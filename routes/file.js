const express = require('express')
const router = express.Router()
const filecontrollers = require('../controller/file')
const multer = require("multer");
const path = require('path')

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, path.join(__dirname, '../public/uploads'));

    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.originalname}-${Date.now()}.${ext}`);
    },
});

const upload = multer(
    {
        storage: multerStorage
    }
)

//upload file
router.post(
    '/upload',
    upload.single('file'),
    filecontrollers.uploadfile
)

//download file
router.post(
    '/download',
    filecontrollers.downloadfile
)

module.exports = router