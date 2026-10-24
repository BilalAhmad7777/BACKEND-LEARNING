const express = require('express');
const musicController = require('../controllers/music.controller');
const authMiddleWare=require("../middlewares/auth.middleware")
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

const router = express.Router();

router.post(
    '/upload',
    authMiddleWare.authArtist,
    upload.single('music'),
    musicController.createMusic,
);

router.post("/album",authMiddleWare.authArtist,musicController.createAlbum)

router.get('/',authMiddleWare.authUser,musicController.getAllMusics)
router.get('/albums',authMiddleWare.authUser,musicController.getAllAlbums)



module.exports = router;
