// import e from 'express';
import moment from 'moment-timezone';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    timestamp: {
        type: String,
        // required: true,
        default: moment().format('D MMM YYYY, h:mm:ss a')
    }
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;