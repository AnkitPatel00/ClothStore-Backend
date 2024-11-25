// const mongoose = require('mongoose')

//   const clothingSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     imgUrl:{type:String,required:true},
//     price: { type: Number, required: true },
//   discount:{type:Number},
//     rating: { type: Number, required: true },
//     size: { type: String, enum: ["S","M","L","XL", "XXL"] },
//     category: { type: String, enum: ["Men", "Women"] },
//     description:{type:String}
//   //   inWishlist: { type: Boolean, default: false },
//   //   inCart: { type: Boolean, default: false },
//   // isNewArrival: {type:Boolean,default:false}
//   }, { timestamps: true });

//   clothingSchema.pre("save", function (next) {
//     // Check if there's a discount to apply
//     if (this.discount && this.discount > 0) {
//         this.discountedPrice = this.price - (this.price * (this.discount / 100));
//     } else {
//         this.discountedPrice = this.price;  // No discount, keep original price
//     }
//     next();
// });

// const Cloth = mongoose.model('clothStore', clothingSchema)

// module.exports = Cloth

const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 }, // Set a default value for discount
    rating: { type: Number, required: true },
    size: [{ type: String, enum: ["S", "M", "L", "XL", "XXL"] }],
    category: { type: String, enum: ["Men", "Women"] },
    description: { type: String },
}, { timestamps: true });



const Cloth = mongoose.model('ClothStore', clothingSchema); // Changed model name to follow naming conventions

module.exports = Cloth;
