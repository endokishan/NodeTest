import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : { type : String, required : true},
    firstName : { type : String, required : true},
    lastName : { type : String, required : true},
    mobile : { type : Number, required : true},
    password : { type : String, required : true},
    isActive : { type : Boolean, required : true, default : true},
});


export default mongoose.model('users', userSchema);