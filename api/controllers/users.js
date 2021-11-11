const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  getOneUser: (req, res) => {
    res.send("Users...");
  },
  createUser: async (req, res) => {
    try {
      const { email, name, phone, password, school, course, gender, role } =
        req.body;
      const _id = uuidv4();
      const salt = await bcrypt.genSalt(10);
      const encrypted_password = await bcrypt.hash(password, salt);
      const user = await db.create(
        "users",
        {
          _id,
          email,
          name,
          phone,
          password: encrypted_password,
          school,
          course,
          gender,
          role,
        },
        "_id"
      );

      console.log(user);
      res.send(req.body);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .send({ message: "An error occurred", error: error.message });
    }
  },
};
