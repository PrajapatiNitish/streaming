// Set up image kit for uploading file
import imagekit from "@imagekit/nodejs";

const client = new imagekit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY });

async function uploadFile(file) {
    const result = await client.files.upload({
        folder: "files/videos",
        file,
        fileName
    });

    return result;
};

export default uploadFile;