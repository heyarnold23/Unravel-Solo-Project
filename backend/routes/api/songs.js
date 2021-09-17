const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const asyncHandler = require('express-async-handler');

const {Song, Comment, User, Annotation} = require('../../db/models');

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
    const created = await Comment.create({
        userId,
        songId,
        body
    });
    const {id} = created;
    const comment = await Comment.findByPk(id, {
        include: User
    });
    res.json(comment)
}));

router.get('/:id/annotations', asyncHandler(async(req, res) => {
    const annotations = await Annotation.findAll(
        {where: {songId: req.params.id},
        include: User}
        );
    res.json(annotations)
}))

router.post('/:id/annotations', asyncHandler(async(req, res) => {
    const {userId, songId, body, startPos, endPos}=  req.body;
    const created = await Annotation.create({
        userId,
        songId,
        body,
        startPos,
        endPos
    });
    const {id} = created;
    const annotation = await Annotation.findByPk(id, {
        include: User
    });
    res.json(annotation)
}));

module.exports = router;
