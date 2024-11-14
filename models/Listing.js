
import mongoose from 'mongoose';

const { Schema } = mongoose;

const listingSchema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  salesPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  condition: { type: String, enum: ['New', 'Like New', 'Good', 'Fair', 'Poor'], required: true },

}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;
