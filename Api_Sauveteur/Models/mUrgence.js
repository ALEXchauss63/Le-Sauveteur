const mongoose = require("mongoose");

const urgenceSchema = mongoose.Schema({
  id: { type: Number, required: true },
  userId: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: Boolean, required: true },
  /*
    breath : {type : Boolean},
    age : {type : String},
    blessureBalle : {type : Boolean},
    blessureArmeBlanche : {type : Boolean}
    */
});
module.exports = mongoose("Urgence", urgenceSchema);
