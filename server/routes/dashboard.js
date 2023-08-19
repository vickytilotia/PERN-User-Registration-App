const router = require('express').Router();
const pool = require('../config/db');

// middleware
const authorization = require('../middlewares/authorization');

// Return the user info to users who are authorized 
router.get('/', authorization, async (req, res) => {
    try {
        // req.user has the payload of token from the middleware 

        const user = await pool.query("select name,email from users where todo_id=$1",
            [req.user]);

        res.status(200).json(user.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
});

module.exports = router;