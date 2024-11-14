import express from 'express';
import { getListingsBySeller,  getListingsByBookTitle } from '../controllers/listingController.js';

const router = express.Router();

router.get('/listings/seller/:userId', getListingsBySeller);
router.get('/listings/title/:title', getListingsByBookTitle);

export default router;
