const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true, 'Pls provide product name'],
        maxlength:[100, 'Name is too long (100 chars max)']
    },
    price:{
        type:Number,
        required:[true, 'Pls provide product price'],
        default:0
    },
    description:{
        type:String,
        required:[true, 'Pls provide product description'],
        maxlength:[1000, 'Description is too long (1000 chars max)']
    },
    image:{
        type:String,
        default:'/uploads/example.jpeg'
    },
    category:{
        type:String,
        required:[true, 'Pls provide product category'],
        enum:['office','kitchen','bedroom']
    },
    company:{
        type:String,
        required:[true, 'Pls provide company'],
        enum:{
            values:['ikea','liddy','marcos'],
            message:'{VALUE} is not supported'
        }
    },
    colors:{
        type:[String],
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    freeShipping:{
        type:Boolean,
        default:false
    },
    inventory:{
        type:Number,
        required:true,
        default:15
    },
    averageRating:{
        type:Number,
        default:0
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals:true}})

ProductSchema.virtual('reviews', {
    ref:'Review',
    localField: '_id',
    foreignField:'product',
    justOne:false,
    // match:{rating:5} only shows ratings that are 5, so like how udemy does it
});

//deletes product and all its reviews
ProductSchema.pre('remove', async function(next){
    await this.model('Review').deleteMany({product:this._id})
})

module.exports = mongoose.model('Product', ProductSchema)