const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const asyncHandler = require('express-async-handler');

const {Song, Comment, User} = require('../../db/models');

// Make custom validator here, refer to users.js
const validateComment = [
    check('body')
    .exists({checkFalsy: true})
    .withMessage('Please add text to body before submitting.'),
    handleValidationErrors,
];

router.get('/', asyncHandler(async(req, res) => {
    const songs = await Song.findAll();
    res.json(songs)
}));

router.get('/:id', asyncHandler(async(req, res) => {
    const song = await Song.findOne(
    {where: {id: req.params.id}}
    );
    res.json(song)
}));

router.get('/:id/comments', asyncHandler(async(req, res) => {
    const comments = await Comment.findAll(
        {where: {songId: req.params.id},
        include: User}
        );
    res.json(comments)
}))

router.post('/:id/comments', validateComment, asyncHandler(async(req, res) => {
    const {userId, songId, body}=  req.body;
    const comment = await Comment.create({
        userId,
        songId,
        body
    });
    const user = await User.findOne({
        where: {id: userId}
    });

    res.json({comment, user})
}));

module.exports = router;
