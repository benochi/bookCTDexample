import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, immutable: true },
  author: { type: String, required: true, immutable: true },
  ISBN: { type: String, required: true, unique: true, immutable: true },
  genre: { type: String, immutable: true },
  publicationDate: { type: Date, immutable: true },

}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
export default Book;