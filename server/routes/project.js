const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const multer = require("multer");

const { auth } = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(ext != '.jpg' || ext != '.png'){
            return cb(res.status(400).end('Only jpg and png are allowed'), false)
        }
        cb(null, true)
    }
})
var upload = multer({storage:storage}).single('file')

//=================================
//             Project
//=================================

router.post("/uploadImage", auth, (req, res) => {
// Get image from client and save to node server using the Multer library.
upload(req, res, err => {
    if(err) return res.json({success:false, err})
    return res.
})
});

module.exports = router;