const {Comment} = require('./models');



async function updateComment(details) {
    const id = details.id;
    delete details.id;
    console.log({ details});
    await Comment.update(
      details,
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );
    return await Comment.findByPk(id);
}

async function deleteComment(commentId) {
  const comment = await Comment.findByPk(commentId);
  if (!comment) throw new Error('Cannot find comment');

  await Comment.destroy({ where: { id: comment.id }});
  return comment.id;
}


module.exports = {
  updateComment,
  deleteComment,
}
