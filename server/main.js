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

    Api.addRoute('qr',
    {
        authRequired: false
    },
    {
        get: function ()
        {
            let id = this.request.query.autoID;
            console.log(id);
            if (id === "test")
            {
              return {
                  "Status": 0,
                  "Data":
                  {
                      "Id": 2,
                      "ImageUrls": ["https://ostrinetdisks504.blob.core.windows.net/pap/9c3f1aa6-314c-4b9d-a81a-828625739d16.jpg"],
                      "PapStylingUrl": "http://elsapapwebapi.azurewebsites.net/api/pap/1/styling",
                      "BrandName": "Cape Cobra",
                      "ProductAttributes": [
                      {
                          "Name": "Name",
                          "Value": "Product Name"
                      },
                      {
                          "Name": "Style",
                          "Value": "Product Style"
                      },
                      {
                          "Name": "Material",
                          "Value": "Product Material"
                      },
                      {
                          "Name": "Description",
                          "Value": "Product Description"
                      },
                      {
                          "Name": "Colour",
                          "Value": "Product Colour"
                      },
                      {
                          "Name": "RRP",
                          "Value": "USD 1000.00"
                      },
                      {
                          "Name": "Manufacturer",
                          "Value": "Cape Cobra"
                      },
                      {
                          "Name": "Brand",
                          "Value": "Cape Cobra"
                      }],
                      "ProductUrl": "http://www.capecobra.co.za/",
                      "BrandUrl": "http://www.capecobra.co.za/",
                      "ManufacturerUrl": "http://www.capecobra.co.za/",
                      "CitesPermitUrl": null,
                      "SalesInvoiceUrl": null
                  }
              }
            }
            else
            {
                return {
                    "code": 200,
                    "status": 200,
                    "text": "Product Not Found"
                }
            }


        }
    });
    Api.addRoute('tag',
    {
        authRequired: false
    },
    {
        get: function ()
        {
            let id = this.request.query.tagID;
            console.log(id);

            if (id === "test")
            {
                console.log('Product Found');
                return {
                    "Status": 0,
                    "Data":
                    {
                        "Id": 2,
                        "ImageUrls": ["https://ostrinetdisks504.blob.core.windows.net/pap/9c3f1aa6-314c-4b9d-a81a-828625739d16.jpg"],
                        "PapStylingUrl": "http://localhost:3000/api/style",
                        "BrandName": "Cape Cobra",
                        "ProductAttributes": [
                        {
                            "Name": "Name",
                            "Value": "Product Name"
                        },
                        {
                            "Name": "Style",
                            "Value": "Product Style"
                        },
                        {
                            "Name": "Material",
                            "Value": "Product Material"
                        },
                        {
                            "Name": "Description",
                            "Value": "Product Description"
                        },
                        {
                            "Name": "Colour",
                            "Value": "Product Colour"
                        },
                        {
                            "Name": "RRP",
                            "Value": " 0.00"
                        },
                        {
                            "Name": "Manufacturer",
                            "Value": "Cape Cobra"
                        },
                        {
                            "Name": "Brand",
                            "Value": "Cape Cobra"
                        }],
                        "ProductUrl": "http://www.capecobra.co.za/",
                        "BrandUrl": "http://www.capecobra.co.za/",
                        "ManufacturerUrl": "http://www.capecobra.co.za/",
                        "CitesPermitUrl": null,
                        "SalesInvoiceUrl": null
                    }
                }
            }
            else
            {
                console.log('Product Not Found');
                return {
                    "code": 200,
                    "status": 200,
                    "text": "Product Not Found"
                }
            }
        }
    });
    Api.addRoute('tag_',
    {
        authRequired: false
    },
    {
        get: function ()
        {
            let id = this.request.query.tagID;
            console.log(id);

            if (id === "test")
            {
                console.log('Product Found');
                return {
                    "status": 0,
                    "data":
                    {
                        "Id": 123,
                        "ImageUrls": [
    "/assets/img/product.jpg",
    "/assets/img/product.jpg",
    "/assets/img/product.jpg"
  ],
                        // "PapStylingUrl": "http://192.168.0.2:3000/api/style",
                        "PapStylingUrl": "http://localhost:3000/api/style",
                        "BrandName": "CCL",
                        "ProductUrl": null,
                        "BrandUrl": "www.google.com",
                        "ManufacturerUrl": "www.google.com",
                        "ProductAttributes": [
                            {
                                "name": "Name",
                                "value": "Lowry"
    },
                            {
                                "name": "Style",
                                "value": "15109"
    },
                            {
                                "name": "Material",
                                "value": "Nile Croc Matte"
    },
                            {
                                "name": "Description",
                                "value": "Small drawstring bag with a detachable and adjustable sling strap"
    },
                            {
                                "name": "Colour",
                                "value": "Bow Blue"
    },
                            {
                                "name": "EautoId",
                                "value": null
    },
                            {
                                "name": "AutoId",
                                "value": null
    },
                            {
                                "name": "Rrp",
                                "value": 10000
    },
                            {
                                "name": "RrpCurrency",
                                "value": "USD"
    },
                            {
                                "name": "ManufacturerName",
                                "value": "CCL"
    }
  ]
                    }
                }
            }
            else
            {
                console.log('Product Not Found');
                return {
                    "code": 200,
                    "status": 200,
                    "text": "Product Not Found"
                }
            }
        }
    });
    Api.addRoute('style',
    {
        authRequired: false
    },
    {
        get: function ()
        {

            return {
    "Status": 0,
    "Data":
    {
        "LogoUrl": "/assets/img/cape-cobra.png",
        "AuthenticProductText": "This is an authentic product from CCL",
        "AuthenticProductTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#fff",
            "Size": "18px"
        },
        "ProductNotFoundText": "This product was not found",
        "ProductNotFoundTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#F0F8FF",
            "Size": "14px"
        },
        "Background1":
        {
            "StartColour": "#6f6f6f",
            "EndColour": "#9e9e9e"
        },
        "Background2":
        {
            "StartColour": "#f5f5f5",
            "EndColour": "#eaeaea"
        },
        "ProductInfoLabel":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#b7b7b7",
            "Size": "10px"
        },
        "ProductInfoField":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#3e3e3e",
            "Size": "14px"
        },
        "ProductInfoSeparator":
        {
            "Colour": "#f3f3f3",
            "Thickness": 1
        },
        "AdditionalMediaText": "See more",
        "AdditionalMediaTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        },
        "ProductHomeText": "See this product",
        "ProductHomeTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        },
        "ManufacturerText": null,
        "ManufacturerTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        },
        "BrandText": "Cape Cobra",
        "BrandTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        },
        "CitesExportPermitText": "Click here for CITES export permit",
        "CitesExportPermitTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        },
        "SalesInvoiceText": "Click here for Sales Invoice",
        "SalesInvoiceTextStyle":
        {
            "Font": "Verdana",
            "Weight": "Normal",
            "Colour": "#000000",
            "Size": "10px"
        }
    }
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
