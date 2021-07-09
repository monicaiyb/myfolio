const express = require("express");
const router = express.Router();
const { Project } = require("../models/Project");
const multer = require("multer");

const { auth } = require("../middleware/auth");

// SAVE IMAGES TO DB.
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("Only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

//=================================
//             Project
//=================================

router.post("/uploadImage", auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

// SAVE OTHER PROJECT INFO TO DB.
router.post("/uploadProject", auth, (req, res) => {
  //Save all the data got from the client into the DB
  const project = new Project(req.body);

  project.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
router.get("/getProjects", (req, res) => {
  res.body;
});

router.post("/getProjects", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      findArgs[key] = req.body.filters[key];
    }
  }

  console.log(findArgs);

  if (term) {
    Project.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("writer")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, projects) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, projects, postSize: projects.length });
      });
  } else {
    Project.find(findArgs)
      .populate("writer")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, projects) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, projects, postSize: projects.length });
      });
  }
});

// GET SINGLE PROJECT FROM DB.
//?id=${projectId}&type=single
//id=12121212,121212,1212121   type=array
router.get("/projects_by_id", (req, res) => {
  let type = req.query.type;
  let projectIds = req.query.id;

  console.log("req.query.id", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    projectIds = [];
    projectIds = ids.map((item) => {
      return item;
    });
  }

  console.log("projectIds", projectIds);

  //Finding the project information that belongs to this project Id
  Project.find({ _id: { $in: projectIds } })
    .populate("writer")
    .exec((err, project) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(project);
    });
});

module.exports = router;