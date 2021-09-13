const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const {Song} = require('../../db/models')

router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll();
    res.json(songs)
}));

router.get('/:id', asyncHandler(async(req, res) => {
    const song = await Song.findOne(
        {where: {id: req.params.id}});
    res.json(song)
}));

module.exports = router;
