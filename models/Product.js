import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    images: [String],
    category: {type: mongoose.Types.ObjectId, ref: 'Category'},
    properties: [{type: Object}],
});

export const Product = models.Product || model('Product', ProductSchema);