import APIKeys from '../imports/api/apikeys/apikeys.js';
import Origins from '../imports/api/origins/origins.js';
import {_} from 'lodash';

var API = {
  authentication: function( apiKey ) {
      var getUser = APIKeys.findOne( { "key": apiKey }, { fields: { "owner": 1 } } );
      if ( getUser ) {
        console.log('User authorised');
        return getUser.owner;
      } else {
        return false;
      }
    },
    checkOrigin: function(user, origin) {
      let origins = Origins.find({owner: user}).fetch();
      let _origins = [];
      for(let item of origins){
        _origins.push(item.origin)
      }
      return _.includes(_origins, origin);
    },
}
export default API;
