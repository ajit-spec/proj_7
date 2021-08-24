const File = require('../model/file')

const uploadfile = async (req, res) => {
    console.log(req.file)

    const {filename, size, mimetype} = req.file

    const file = new File(
        {
            name: filename,
            size,
            type: mimetype,
            path: `${process.env.APP_BASE_URL}/uploads/${filename}`
        }
    )

    const result = await file.save()
    res.send(
        {
            status: 1,
            msg: 'file uploaded',
            filepath: result.path
        }
    )
}


const downloadfile = async (req, res) => {
    const filepath = req.body.filepath;
    const result = await File.findOne(
        {
            path: filepath
        }
    )

    res.send(result.path)
}


module.exports = {
    uploadfile,
    downloadfile
}