const User = require('../models/User');

const UserController = {
    register: (req, res) => {
        try {
            // get the data from the request
            const { fullname, phone, email, password } = req.body;

            // create a new user
            const user = new User({
                fullname,
                phone,
                email,
                password
            });

            // save the user to the database
            user.save()
            // send api response created
            .then(() => res.status(200).json({message: 'User created'}))
        } catch (error) {
            res.status(500).json({message: 'Error creating user'});
        }
    },
    login: (req, res) => {
        // get the data from the request
        const { email, password } = req.body;

        // find the user in the database
        User.findOne({email: email})
        .then(user => {
            // check if the user exists
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }

            // check if the password is correct
            if(user.password === password) {
                // save the user to the session
                user.password = "********";
                req.session.user = user;
                res.status(200).json({message: 'Login successful', account: user });
            } else {
                res.status(401).json({message: 'Incorrect password'});
            }
        })
        .catch(error => {
            res.status(500).json({message: 'Error logging in'});
        });
    },
    logout: (req, res) => {
        // destroy the session
        req.session.destroy();
        res.status(200).json({message: 'Logout successful'});
    },status: (req, res) => {
        // check if the user is logged in
        if(req.session.user) {
            res.status(200).json({message: 'User logged in', user: req.session.user});
        } else {
            res.status(401).json({message: 'User not logged in'});
        }
    }
}

module.exports = UserController;