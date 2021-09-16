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

  module.exports = {updateComment}
