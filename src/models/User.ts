import mongoose, {Schema, Document} from "mongoose";

export type UserType = Document & {
    name: string
    lastName: Date
    dni: string
    email: string
    phone: string
}


const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
    },

    dni: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        required: true,
        trim: true,
    },
})

const User = mongoose.model<UserType>('User', UserSchema);
export default User;