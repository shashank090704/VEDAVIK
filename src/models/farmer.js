import mongoose from 'mongoose'

const farmerschema = new mongoose.Schema({
  name:{
    type : String,
    require : true
  },

    phonenumber :{
        type: String,
        required: true,
        // unique: true,
        // trim: true,
        // match: [/^\d{10}$/, 'Phone number must be a 10-digit number.'] 
    },
    email : {
        type : String,
        require: [ true , "please provide a email"],
        // unique: true
      },
      password : {
        type : String,
        require : [true , "please provide password"]
      },
      area :{
        type : String ,
        require : true
      },
      city :{
        type : String,
        require : true
      }


});
const farmer = mongoose.models.farmer || mongoose.model( 'farmer', farmerschema);
export default farmer;