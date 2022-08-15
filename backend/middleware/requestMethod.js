const requestMethod= (req, res, next) => {
    // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.
    const allowedMethods = [
      "OPTIONS",
      "HEAD",
      "CONNECT",
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
    ];
  
    if (!allowedMethods.includes(req.method)) {
      res.end(405,`${req.method} not allowed.`);
    }
  
    next();
  };

  module.exports = { requestMethod } 