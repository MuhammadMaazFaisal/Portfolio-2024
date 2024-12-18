const checkAdminEmail = (req, res, next) => {
  const allowedEmail = "m.maazfaisal0301@gmail.com";

  if (req.oidc && req.oidc.user && req.oidc.user.email === allowedEmail) {
    return next();
  }

  return res.status(403).json({ message: "Forbidden: Access is denied." });
};

module.exports = checkAdminEmail;
