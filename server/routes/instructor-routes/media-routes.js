const express = require('express');
const multer = require('multer');
const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require('../../helpers/cloudinary');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Single file upload
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

// File deletion
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Asset Id is required',
      });
    }

    await deleteMediaFromCloudinary(id);

    res.status(200).json({
      success: true,
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

// Bulk upload
router.post('/bulk-upload', upload.array('files', 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map((fileItem) =>
      uploadMediaToCloudinary(fileItem.path, fileItem.mimetype)
    );

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error(`Error in bulk uploading files: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Error in bulk uploading files',
    });
  }
});

module.exports = router;
