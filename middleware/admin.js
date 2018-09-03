module.exports = function(req, res, next) {
  // 401 Unauthorized: users access protected resource without valid JWT
  // 403 Forbidden: even with valid JWT, user cannot access this resource

  if (!req.user.isAdmin) return res.status(403);

  next();
};
