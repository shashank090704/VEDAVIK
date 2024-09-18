import mongoose from 'mongoose'
const orderschema = new mongoose.Schema({
   name : {
    type : String,
    require : true

   },
    duration:{
        type: String,
        required: true,
    },
    amount : {
        type : String,
        require: [ true , "please provide amount"],
    
      },
      quantity :{
        type : String,
        require : true
      },
      city :{
        type : String,
        require : true
      },
      buyerid :{
       type : mongoose.Schema.Types.ObjectId,
       ref : "buyer"
      },
      farmerid :{
       type : mongoose.Schema.Types.ObjectId,
       ref : "farmer"
      },
      isaccepted : {
        type : Boolean,
        default : false
      },
      iscompleted : {
        type : Boolean,
        default : false
      },
      tempfarmid : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'farmer'
  }]
  ,
  tempamount : {
    type : String
  },
  date:{
    type : Date,
    default : Date.now()
  }


});
const order = mongoose.models.order || mongoose.model( 'order', orderschema);
export default order;