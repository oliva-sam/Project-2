module.exports = function (req, res, next) {
    // if user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
// If user isn't logged in, redirect them to the login page
  return res.redirect("/");
};