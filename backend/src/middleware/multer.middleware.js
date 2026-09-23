import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage,

    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
        files: 1,                  // Only one image
    },

    fileFilter: (req, file, cb) => {
        const allowed = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    "Invalid image type. Only JPEG, PNG, and WebP are allowed."
                )
            );
        }
    },
});

export default upload;