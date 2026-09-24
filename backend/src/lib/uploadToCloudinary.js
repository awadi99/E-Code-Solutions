import cloudinary from "./cloudinary.js";
import streamifier from "streamifier";

export const uploadBuffer = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "e-code_solutions/projects",
                resource_type: "image",
                quality: "auto",
                fetch_format: "auto",
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            }
        );

        // Convert the buffer to a readable stream and pipe it to Cloudinary
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};


export const deleteImage = async (publicId) => {

    if (!publicId) {
        return;
    }

    return await cloudinary.uploader.destroy(
        publicId,
        {
            resource_type: "image",
        }
    );
};