const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const asyncHandler = require('express-async-handler');

const {User, Annotation} = require('../../db/models');
const AnnotationsRepository = require('../../db/annotations-repository');

//include validations later

router.put(
    '/:id',
    /* put validation here later*/
    asyncHandler(async (req, res) => {
        const created = await AnnotationsRepository.updateAnnotation(req.body);
        const {id} = created;

        const annotation = await Annotation.findByPk(id, {
            include: User
        })

        return res.json(annotation);
}));

router.delete("/:id", asyncHandler(async function (req, res) {
    const annotationId = await AnnotationsRepository.deleteAnnotation(req.params.id);

    return res.json( annotationId );
}));


module.exports = router;
