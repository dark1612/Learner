// const cloudinary = require("cloudinary").v2;
const cloudinary = require('cloudinary').v2;
// const url = cloudinary.url('path/to/resource', {
//   sign_url: true,
// });


//configure with env data


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMediaToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error uploading to cloudinary");
  }
};


// async function uploadMediaToCloudinary(filePath) {
//     return new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//             {
//                 resource_type: 'auto',
//             },
//             (error, result) => {
//                 if (error) {
//                     console.error(`Error uploading to Cloudinary`, error.message);
//                     return reject(error);
//                 }
//                 return resolve(result.secure_url);
//             }
//         );

//         const stream = Readable.from(content); 
//         stream.pipe(uploadStream);
//     });
// }


const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete assest from cloudinary");
  }
};

module.exports = { uploadMediaToCloudinary, deleteMediaFromCloudinary };
