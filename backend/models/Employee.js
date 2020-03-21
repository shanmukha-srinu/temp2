const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   firstname: {
      type: String
   },
   lastname: {
      type: String
   },
   gender:{
      type:String
   },
   email: {
      type: String
   },
   city: {
      type: String
   },
   state: {
      type: Number
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)