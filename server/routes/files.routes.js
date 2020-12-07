const { response } = require('express');
const express = require('express');
const router = express.Router();
const Files = require('../models/files.model')
// const uploader = require('../configs/cloudinary.config');
const cloudinary = require('cloudinary').v2
const multer = require('multer');
const upload = multer({ dest: 'designer/' })

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDKEY,
    api_secret: process.env.CLOUDSECRET
})

router.post('/upload', upload.single('imageUrl'), (req, res) => {

    cloudinary.uploader.upload(req.file.path, (error, result) => {
        if (error) res.json(error)
        res.json(result)
    });
});

router.post('/delete', (req, res) => {

    const public_id = Object.keys(req.body)

    cloudinary.uploader.destroy(public_id, (err, result) => {
        if (err) res.json(err)
        res.json(result)
    });
})


router.get('/getLatest', async (req, res) => {
    const getImage = await Files.findOne().sort({ _id: -1 });
    res.json(getImage.imageUrl);
});

module.exports = router;