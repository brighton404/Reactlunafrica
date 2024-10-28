// authMiddleware.js
const authMiddleware = (req, res, next) => {
    // Implement authentication logic here
    // Check if the user is from lunahealth.co or lunafrica.com
    // Check if the password is correct
    // Log user login and logout times
  
    next();
  };
  
  module.exports = authMiddleware;
  