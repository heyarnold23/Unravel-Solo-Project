const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js')
const commentsRouter = require('./comments')
const annotationsRouter = require('./annotations')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/comments', commentsRouter);
router.use('/annotations', annotationsRouter);


// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
