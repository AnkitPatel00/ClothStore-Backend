const mongoose = require('mongoose')

  const clothingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imgUrl:{type:String,required:true},
    price: { type: Number, required: true },
  discount:{type:Number},
    rating: { type: Number, required: true },
    size: { type: String, enum: ["S", "M", "XL", "XXL"] },
    category: { type: String, enum: ["Men", "Women"] },
    description:{type:String},
    inWishlist: { type: Boolean, default: false },
    inCart: { type: Boolean, default: false },
  isNewArrival: {type:Boolean,default:false}
},{ timestamps: true });

const Cloth = mongoose.model('clothStore', clothingSchema)

module.exports = Cloth