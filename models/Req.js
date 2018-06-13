const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const config = require("../config/db");

// style Schema
const ReqSchema = mongoose.Schema({
// Asset Id
  a_id:{
    type:String,
    required: true
  },
// Style Id
  style_id:{
    type:String,
    required: true
  },
// Date
  cdate:{
    type:Date,
    default: Date.now
  },
  adate:{
    type:Date,
    default: null
  },
  idate:{
    type:Date,
    default: null
  },
// Item name
  i_name:{
    type:String,
    required:true
  },
// Size
  size:{
    type:String,
    required: true
  },
// Requsition By date
  req_b:{
      // name
      name:{
          type: String,
          required: true
      },
      // Floor
      floor:{
        type: String,
        required: true
      },
      // Section
      section:{
        type: String,
        required: true
      },
      // Line
      line:{
        type: String,
        required: true
      }
  },
  /// Later
  req_to:{
    type:String,
    required: true
  },
  // Design Number
  d_no:{
    type: String,
    required: false
  },
  // Issue Quantity
  i_qty:{
    type: Number,
    required: false
  },
  // Rate
  rate:{
    type: Number,
    required: false
  },
  status:{
    type: String,
    default: ""
  }
});

const Req = (module.exports = mongoose.model("Req", ReqSchema));

/*
module.exports.getStyleById = function(id, callback) {
  Style.findById(id, callback);
};

module.exports.getStyleByName = function(style_name, callback) {
  const query = { style_name: style_name };
  Style.findOne(query, callback);
};
*/

module.exports.addReq = function(newReq, callback) {
  newReq.save(callback);
};
