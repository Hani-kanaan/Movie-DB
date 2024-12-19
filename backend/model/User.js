import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: Number , required: true },
    likes: { type: String },
});
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password; // Remove 'password'
    return ret;
  },
});

const User = mongoose.model('User', userSchema);
export default User;