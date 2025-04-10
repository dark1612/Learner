<<<<<<< HEAD
const express = require("express");
const multer = require("multer");
const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCloudinary(req.file.path);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Assest Id is required",
=======
const express = require('express');
const multer = require('multer');
const { uploadMediaToCloudinary, deleteMediaFromCloudinary } = require('../../helpers/cloudinary');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Handle single file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const uploadResult = await uploadMediaToCloudinary(file.path, file.mimetype);
    res.status(200).json({
      success: true,
      data: uploadResult,
    });
  } catch (error) {
    console.error(`Error uploading file: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'File upload failed',
      error: error.message,
    });
  }
});

// Handle file deletion
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Asset Id is required',
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
      });
    }

    await deleteMediaFromCloudinary(id);

    res.status(200).json({
      success: true,
<<<<<<< HEAD
      message: "Assest deleted successfully from cloudinary",
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({ success: false, message: "Error deleting file" });
  }
});

router.post("/bulk-upload", upload.array("files", 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map((fileItem) =>
      uploadMediaToCloudinary(fileItem.path)
=======
      message: 'Asset deleted successfully from Cloudinary',
    });
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error deleting file',
    });
  }
});

// Handle bulk file uploads
router.post('/bulk-upload', upload.array('files', 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map((fileItem) =>
      uploadMediaToCloudinary(fileItem.path, fileItem.mimetype)
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
    );

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      data: results,
    });
<<<<<<< HEAD
  } catch (event) {
    console.log(event);

    res
      .status(500)
      .json({ success: false, message: "Error in bulk uploading files" });
=======
  } catch (error) {
    console.error(`Error in bulk uploading files: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error in bulk uploading files',
    });
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
  }
});

module.exports = router;
