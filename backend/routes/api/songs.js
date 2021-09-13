const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const {Song} = require('../../db/models')

router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll();
    res.json(songs)
}));

module.exports = router;
