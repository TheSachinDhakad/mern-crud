
const User = require('../models/User.models');

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = new User({
            name,
            email,
            age,
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const findUsers = async (req, res) => {
    try {
        const user = await User.find()

        res.status(200).json({ user: user })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({ user: user })

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });

    }

}


const updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            },


        }, {
            new: true,
        })


        if (!user) {
            res.status(404).json({ message: " User not found" });
        }


        await user.save();

        return res.status(200).json(user);


    } catch (error) {
        res.status(500).json({ message: "enternal server error" });
    }
}


const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        // Check if the user with the given ID exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    createUser,
    findUsers,
    getUserById,
    updateUser,
    deleteUser
};
