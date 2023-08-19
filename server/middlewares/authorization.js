const jwt = require("jsonwebtoken");
require("dotenv").config();

// The purpose of this middleware :
// get the token
// verify the token and get payload from it 
// store this payload in req.user 
// now forward this request 

module.exports = async (req, res, next) => {
    try {
        // request header contains the token
        const jwtToken = req.header("token");
        // if there is no token provided 
        if (!jwtToken) {
            return res.status(403).json("Not Authorized");
        }

        // verify the token and get the payload from it 
        const payload = jwt.verify(jwtToken, process.env.jwtsecret);
        // token's payload contains the user id 
        req.user = payload.user
        next();
    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Not Authorized");
    }
}