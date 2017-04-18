import '/imports/startup/server';
import Fields from '../imports/api/fields/fields.js';
import APIKeys from '../imports/api/apikeys/apikeys.js';
import Documents from '../imports/api/documents/documents.js';
import Entries from '../imports/api/entries/entries.js';
import Features from '../imports/api/features/features.js';

import '../imports/api/_server/publications/publications.js';

import
{
    _
}
from 'lodash';

import API from './api.js';

Meteor.startup(function ()
{
    var Api = new Restivus(
    {
        useDefaultAuth: true,
        prettyJson: true,
        enablecors: true
    });


    Api.addRoute('verify',
    {
        authRequired: false
    },
    {
        get: function ()
        {
            return {
                "Status": 0,
                "Data": false
            }
        }
    });

    

    Api.addRoute('getFields/:apikey/:userid',
    {
        authRequired: false
    },
    {
        get: function ()
        {
            return 'success'
        }
    });

    Api.addRoute('getpromo/:apikey/:promoid',
    {
        authRequired: false
    },
    {
        get: function ()
        {

            let user = API.authentication(this.urlParams.apikey);
            if (!API.checkOrigin(user, this.request.headers.origin))
            {
                console.log('Origin Failed');
                console.log('Request Origin: => ' + this.request.headers.origin);
                return {
                    status: 'fail',
                    reason: 'Insecure Origin'
                }
            }

            const req = this.urlParams;
            let apikey = req.apikey;
            let promoid = req.promoid;

            let promodoc = Documents.findOne(promoid);
            let promofields = promodoc.promofields || [];
            const fields = Meteor.call('getFieldsSortable', promoid, promofields);

            const promo = Documents.findOne(
            {
                _id: promoid,
                'meta.owner': user
            });
            const features = Features.find(
                {
                    doc: promoid
                })
                .fetch();
            // console.log(features);
            const data = {
                fields, promo, features
            }
            return data
        }
    });
    Api.addRoute('submit',
    {
        authRequired: false
    },
    {
        post: function ()
        {
            let user = API.authentication(this.bodyParams.data.apikey);
            if (!API.checkOrigin(user, this.request.headers.origin))
            {
                console.log('Origin Failed');
                return {
                    status: 'fail',
                    reason: 'Insecure Origin'
                }
            }
            let entry = this.bodyParams;

            let data = entry.data.values;
            let id = entry.data.promoid;
            let origin = this.request.headers.origin;

            let _entry = {
                origin, id, data
            };

            Entries.insert(_entry, function (e, r)
            {
                if (e)
                {
                    throw new Meteor.Error(e);
                }
            });

            return {
                status: 'success',
                data: _entry
            }
        }
    });

    Meteor.methods(
    {
        showUsers: function ()
        {
            let users = Meteor.users.find()
                .fetch();
            let _users = [];
            for (user of users)
            {
                let id = user._id;
                let email = user.emails[0].address;
                let name = user.profile.name.first;
                let _user = {
                    id, email, name
                }
                _users.push(_user);
            }

        },
        initAPIKey: function (userId)
        {
            check(userId, Match.OneOf(Meteor.userId(), String));

            var newKey = Random.hexString(32);

            try
            {
                var key = APIKeys.insert(
                {
                    "owner": userId,
                    "key": newKey
                });
                return key;
            }
            catch (exception)
            {
                return exception;
            }
        },
        //**-- Get ordered fields --**//
        getFieldsSortable: function (id, fields)
        {
            check(id, String);
            check(fields, Array);

            const fields_ = Fields.aggregate([
                //**-- Match fields linked to document/promo --**//
                {
                    $match:
                    {
                        _id:
                        {
                            $in: fields
                        }
                    }
                },
                {
                    $unwind: "$order"
                },
                //**-- Filter for id in order array --**//
                {
                    $match:
                    {
                        "order.for": id
                    }
                },
                //**-- Sort by position field ascending --**//
                {
                    $sort:
                    {
                        "order.position": 1
                    }
                }
            ]);
            return fields_

        },
        getFields: function (id)
        {
            check(id, String);
            const fields = Fields.aggregate([
                    // De-normalize the 'properties' array
                {
                    $unwind: "$order"
                    },
                    // Filter for only height
                {
                    $match:
                    {
                        "order.for": id
                    }
                    },
                    // Sort by 'height' in ascending order.  Use -1 for descending
                {
                    $sort:
                    {
                        "order.position": 1
                    }
                    }
                ])
            return fields

        },
        /**
         * Set initial ordering of fields added to promo, if no order set yet. Run after promo insert/edit.
         *
         * @param {obj} object- The promo object.
         **/
        orderFieldInitial: function (obj)
        {
            check(obj, Object);
            console.log(obj);
            const docId = obj._id;
            const fields = obj.promofields;

            // Loop through each field attached to the promo object
            for (let field of fields)
            {
                // Check if field contains existing order object for current promo.
                const orderArr = Fields.findOne(field)
                    .order || [];

                // Create second, temporary array (_arr) to hold only the 'for' string
                // ( which refers to the promo ID (_id)) inside the order object of the field.
                const _arr = [];
                for (let item of orderArr)
                {
                    _arr.push(item.for)
                }

                // Create new order object for the field.
                const orderObj = {};
                orderObj.for = docId;
                orderObj.position = 99;

                // Check if the array contains the current promo id
                // if not, push new order object into order array of field

                if (!_.includes(_arr, docId)) Fields.update(
                {
                    _id: field
                },
                {
                    $push:
                    {
                        order: orderObj
                    }
                });

            }

        },
        orderFields: function (obj)
        {
            check(obj, Object);
            check(obj.pageid, String);
            check(obj.order, Array);
            const arr = obj.order;
            const id = obj.pageid;
            for (let item of arr)
            {
                const position = arr.indexOf(item);
                Fields.update(
                {
                    _id: item
                },
                {
                    $pull:
                    {
                        order:
                        {
                            for: id
                        }
                    }
                });
                Fields.update(
                {
                    _id: item
                },
                {
                    $push:
                    {
                        order:
                        {
                            for: id,
                            position: position
                        }
                    }
                });
            }

        },
        /**
         * Insert field.
         *
         * @param {obj} object - The feature object.
         **/
        insertFeature: function (obj)
        {
            check(obj, Object);
            console.log(obj);
            // const doc = obj.doc;
            // const owner = obj.owner;
            Features.insert(obj);

        },
    })

})
