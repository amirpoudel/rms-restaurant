import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Username is required'],
        minlength: [6, 'Username cannot be less than 6 characters'],
        maxlength: [50, 'Username cannot be greater than 50 characters'],
    },
    
    restaurantType: {
        type: String,
        trim: true,
        lowercase: true,
    },
    description: {
        type: String,
        trim: true,
        lowercase: true,
        minlength: [
            6,
            'Resturant Description cannot be less than 6 characters',
        ],
        maxlength: [
            200,
            'Resturant Description cannot be greater than 200 characters',
        ],
    },
    profileImage: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    contact:{
        phone:[
            {
                type:String,
                trim:true,
                lowercase:true,
            }
        ],
        email:[{
            type:String,
            trim:true,
            lowercase:true,
        }]
    },
    
    address:{
        country: {
            type: String,
            default: 'nepal',
            lowercase: true,
            trim: true,
        },
        province: {
            type: String,
            trim: true,
            lowercase: true,
            index: true,
        },
        district: {
            type: String,
            trim: true,
            lowercase: true,
            index: true,
        },
        municipality: {
            type: String,
            trim: true,
            lowercase: true,
            index: true,
        },
        ward: {
            type: Number,
            trim: true,
            lowercase: true,
            index: true,
        },
        street: {
            type: String,
            trim: true,
            lowercase: true,
        },
        pincode: {
            type: String,
            trim: true,
            lowercase: true,
            minlength: [6, 'Pincode cannot be less than 6 characters'],
            maxlength: [20, 'Pincode cannot be greater than 20 characters'],
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
            },
            coordinates: {
                type: [Number],
                index: '2dsphere',
            },
        },
    },
});


export const RestaurantModel = mongoose.model('Restaurant',restaurantSchema);
