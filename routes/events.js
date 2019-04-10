import express from 'express';
import {
    fetchAll, fetchByUrl, checkout, release, confirm, validate
} from '../controllers/events.controller';

const router = express.Router();

router.get('/', fetchAll);
router.get('/:url', validate('fetchByUrl'), fetchByUrl);

router.post('/:url/checkout', validate('checkout'), checkout);
router.post('/:url/release', validate('release'), release);
router.post('/:url/confirm', validate('confirm'), confirm);

module.exports = router;
