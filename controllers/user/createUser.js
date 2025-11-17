const UserModel = require("../../schemas/userSchema");

const createUser = async (req, res) => {
  const { firstname, email, password, phoneNumber, address } = req.body;
  try {
    const data = await UserModel.create({
      firstname: firstname,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
    });
    console.log(data);
    res.status(201).json(`created user:${data}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};
module.exports = createUser;
