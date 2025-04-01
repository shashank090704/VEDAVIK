import mongoose from 'mongoose'

const messageschema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true
    },
    receiverId: { 
        type: String,
         required: true 
        },
    messagedata: { 
        type: String, 
        required: true 
    },
    createdAt: { type: Date, default: Date.now },


});
const message = mongoose.models.message || mongoose.model('message', messageschema);
export default message;

// import mongoose from 'mongoose'
// const orderschema = new mongoose.Schema({
//    name : {
//     type : String,
//     require : true

//    },
//     duration:{
//         type: String,
//         required: true,
//     },
//     amount : {
//         type : String,
//         require: [ true , "please provide amount"],
    
//       },
//       quantity :{
//         type : String,
//         require : true
//       },
//       city :{
//         type : String,
//         require : true
//       },
//       buyerid :{
//        type : mongoose.Schema.Types.ObjectId,
//        ref : "buyer"
//       },
//       farmerid :{
//        type : mongoose.Schema.Types.ObjectId,
//        ref : "farmer"
//       },
//       isaccepted : {
//         type : Boolean,
//         default : false
//       },
//       iscompleted : {
//         type : Boolean,
//         default : false
//       },
//       tempfarmid : [{
//         type : mongoose.Schema.Types.ObjectId,
//         ref : 'farmer'
//   }]

// });
// const order = mongoose.models.order || mongoose.model( 'order', orderschema);
// export default order;