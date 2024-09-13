import mongoose from 'mongoose'

const buyerschema = new mongoose.Schema({
   name : {
    type : String,
    require : true

   },
    phonenumber :{
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type : String,
        require: [ true , "please provide a email"],
        unique: true
      },
      password : {
        type : String,
        require : [true , "please provide password"]
      },
      city :{
        type : String,
        require : true
      },
      role : {
        type : String ,
        default : "Buyer",
        required: true
      
      }


});
const buyer = mongoose.models.buyer || mongoose.model( 'buyer', buyerschema);
export default buyer;