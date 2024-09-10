import mongoose from 'mongoose'

const messageschema = new mongoose.Schema({
    senderId: { type: String,
         required: true },
    receiverId: { type: String, required: true },
    message: { type: String, required: true },


});
const message = mongoose.models.message || mongoose.model( 'message', messageschema);
export default message;