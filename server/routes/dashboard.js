const router = require('express').Router();
const pool = require('../config/db');
const authorization = require('../middlewares/authorization');


router.get('/', authorization, async (req,res)=> {
    try {
        // req.user has the payload of token from the middleware 
        // res.json(req.user);

        const user = await pool.query("select name,email from users where todo_id=$1",
        [req.user]);

        res.json(user.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
}); 

module.exports = router;