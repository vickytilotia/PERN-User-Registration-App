const router = require('express').Router();
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

// middlewares 
const validInfo = require("../middlewares/validInfo");
const authorization = require('../middlewares/authorization');


// register user

router.post('/register', validInfo, async (req, res) => {
    try {

        // destructure the req.body 
        const { name, email, password } = req.body;

        // check if user exists 
        const user = await pool.query("select * from users where email =$1",
            [email]);
        if (user.rows.length !== 0) { return res.status(401).json("user already exists") }


        // bcrypt password 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);
        console.log(bcryptPassword)

        // save user 
        const newUser = await pool.query("insert into users (name,email,password) values($1,$2,$3) returning *",
            [name, email, bcryptPassword]);

        // generate jwt token 
        const token = jwtGenerator(newUser.rows[0].todo_id);
        res.json({ token })

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// Login user 

router.post('/login', validInfo, async (req, res) => {
    try {

        // destructure req.body 
        const { email, password } = req.body;

        // check if user exists 
        const user = await pool.query("select * from users where email=$1",
            [email])

        // if user does not exists 
        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");

        }

        // check if incoming password is same as database password 
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect");
        }

        // give them the jwt token 
        const token = jwtGenerator(user.rows[0].todo_id);

        res.json({ token });

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
});


// is user verified 

router.get('/is-verify', authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
});

module.exports = router;