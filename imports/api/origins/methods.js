import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Origins from './origins';


export const upsertOrigin = new ValidatedMethod({
  name: 'origins.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    owner: { type: String, optional: true },
    origin: { type: String, optional: true }
  }).validator(),
  run(origin) {
    let x = origin.origin;
    let _x = x.substring(0,x.charAt(x.length-1)=="/"?x.length-1:x.length);
    origin.origin = _x;
    return Origins.upsert({ _id: origin._id }, { $set: origin });
  },
});
