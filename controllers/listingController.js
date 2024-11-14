// controllers/listingController.js
import Listing from '../models/Listing.js';

export const getListingsBySeller = async (req, res) => {
  try {
    const { userId } = req.params;
    const listings = await Listing.find({ userId })
      .populate('bookId') 
      .exec();

    if (!listings.length) {
      return res.status(404).json({ message: 'No listings found for this seller.' });
    }

    res.status(200).json(listings);
  } catch (error) {
    console.error('Error fetching listings by seller:', error);
    res.status(500).json({ message: 'Server error while fetching listings.' });
  }
};

import Listing from '../models/Listing.js';
import Book from '../models/Book.js';

export const getListingsByBookTitle = async (req, res) => {
  try {
    const { title } = req.params;

    const books = await Book.find({ title });
    if (!books.length) {
      return res.status(404).json({ message: 'No books found with this title.' });
    }

    const bookIds = books.map(book => book._id);

    const listings = await Listing.find({ bookId: { $in: bookIds } })
      .populate('bookId') 
      .exec();

    if (!listings.length) {
      return res.status(404).json({ message: 'No listings found for books with this title.' });
    }

    res.status(200).json(listings);
  } catch (error) {
    console.error('Error fetching listings by book title:', error);
    res.status(500).json({ message: 'Server error while fetching listings.' });
  }
};