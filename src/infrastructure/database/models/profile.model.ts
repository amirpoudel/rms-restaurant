
import mongoose, { Schema,Document } from 'mongoose';
import { Profile } from '../../../domain/entities/profile.entity';

export interface ProfileDocument extends Profile, Document {}



const addressSchema = new mongoose.Schema({
    country:{
        type: String,
        default: 'nepal',
        lowercase:true,
        trim:true,
    },
    province:{
        type: String,
        trim:true,
        lowercase:true,
        index:true,
    },
    district:{
        type: String,
        trim:true,
        lowercase:true,
        index:true,
    },
    municipality:{
        type: String,
        trim:true,
        lowercase:true,
    },
    ward:{
        type: Number,
        trim:true,
        lowercase:true,
    
    },
    street:{
        type: String,
        trim:true,
        lowercase:true,
    },
    location:{
        type:{
            type:String,
            enum:['Point'],
        },
        coordinates:{
            type:[Number],
            index:'2dsphere',
        }
    
    }

})

const contactSchema = new mongoose.Schema({
    phone:[
        {
            type:String,
            trim:true,
        }
    ],
    email:[{
        type:String,
        trim:true,
    }]

})

const openingHoursSchema = new mongoose.Schema({
    day:{
        type:String,
        enum:['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
    },
    open:{
        type:String,
    },
    close:{
        type:String,
    }

})



const profileSchema: Schema<ProfileDocument>  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    contact: contactSchema,
    address: addressSchema,
    cuisine: [String],
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    openingHours:[openingHoursSchema],

},{
    timestamps:true,
    toObject:{
        transform: function(doc,ret){
            delete ret.__v;
            return ret;
        }
    }
});

export const ProfileModel = mongoose.model<ProfileDocument>('Profile',profileSchema);
