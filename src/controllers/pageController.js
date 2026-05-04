exports.homePage = (req, res) => {
  res.redirect("/login");
};

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.dashboardPage = (req, res) => {
  res.render("dashboard", {
    user: req.user
  });
};