const {Annotation} = require('./models');



async function updateAnnotation(details) {
    const id = details.id;
    delete details.id;
    await Annotation.update(
      details,
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );
    return await Annotation.findByPk(id);
}

async function deleteAnnotation(annotationId) {
    const annotation = await Annotation.findByPk(annotationId);
    if (!annotation) throw new Error('Cannot find annotation');

    await Annotation.destroy({ where: { id: annotation.id }});
    return annotation.id;
}


module.exports = {
    updateAnnotation,
    deleteAnnotation,
  }
