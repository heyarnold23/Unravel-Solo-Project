const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const {Comment, User} = require('../../db/models');

const CommentsRepository = require('../../db/comments-repository');


//include validations later

router.put(
    '/:id',
    /* put validation here later*/
    asyncHandler(async (req, res) => {
        const created = await CommentsRepository.updateComment(req.body);
        const {id} = created;

        const comment = await Comment.findByPk(id, {
            include: User
        })

        return res.json(comment);
}));

router.delete("/:id", asyncHandler(async function (req, res) {
    const {userId} = req.body;
    const commentId = await CommentsRepository.deleteComment(req.params.id);

    return res.json( commentId );
}));


module.exports = router;
