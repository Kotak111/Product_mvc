const bcrypt = require('bcryptjs');
const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    }
    catch (err) {
       console.log(err);
    }
}
module.exports = comparePassword;