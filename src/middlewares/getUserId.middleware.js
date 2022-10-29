const accountModel = require("../models/account.model");

module.exports = (req, res, next) => {
  // Get token
  const token = req.token;

  accountModel.find({}, (err, accounts) => {
    if (err)
      return res.json({
        status: "Failure",
      });
    else {
      let id_account = null;
      accounts.forEach((account) => {
        if (account.token.includes(token)) {
          id_account = account._id;
        }
      });
      if (!id_account) {
        return res.json({
          status: "Failure",
        });
      }
      console.log("\n\t\t\tMiddleware. id_account = ", id_account);
      req.id_account = id_account;
      next();
    }
  });
};
