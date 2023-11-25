const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "profilePicture") {
      cb(null, "./public/Customer/");
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "profilePicture") {
      const filename = file.originalname.split(" ").join("-");
      cb(null, `${filename}`);
    }
  },
});

const customer = multer({
  storage: storage,
}).single('profilePicture')

module.exports = { customer };
