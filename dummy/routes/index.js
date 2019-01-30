import express from 'express';
import politicaloffice from '../controllers/politicaloffice';
import politicalparty from '../controllers/politicalParty';
import Validation from '../validation/formFileldValidation';

const { officeValidator, PartyValidation } = Validation;

const router = express.Router();

const { createOffice, getAllOffice, getSingleOffice } = politicaloffice;
const {
  createParty, getAllParty, getSingleParty, updateparty, DeleteParty
} = politicalparty;


router.post('/createoffice', officeValidator, createOffice);
router.post('/createparty', PartyValidation, createParty);
router.get('/getalloffice', getAllOffice);
router.get('/getallparty', getAllParty);
router.get('/getsingleoffice/:id', getSingleOffice);
router.get('/getsingleparty/:id', getSingleParty);
router.put('/updateparty/:id', updateparty);
router.delete('/deleteparty/:id', DeleteParty);

export default router;
