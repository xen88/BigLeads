// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { ValidatedMethod } from 'meteor/mdg:validated-method';
// import rateLimit from '../../modules/rate-limit.js';
//
// import Entries from './entries';
//
//
// export const upsertEntry = new ValidatedMethod({
//   name: 'entries.upsert',
//   run(entry) {
//     return Entries.upsert(entry);
//   },
// });
//
// rateLimit({
//   methods: [
//     upsertEntry,
//     removeEntry,
//   ],
//   limit: 5,
//   timeRange: 1000,
// });
