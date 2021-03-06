import mongoose from 'mongoose';

const buyerSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
        minlength: 6
    },
    mobile: {
        type : Number || String,
        minlength : 10,
        maxlength: 10,
        unique : true,
    },
    address:[
        {
            pincode: {
                type: String || Number,
               
            },
            street : {
                type : String
            },
            landmark : {
                type: String,
               
            }
        }
    ],

    cart: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    isAdmin : {
        type: Boolean,
        default : false
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

const Buyer = mongoose.model('Buyer' , buyerSchema);

export default Buyer;

