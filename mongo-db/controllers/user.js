const User = require("../src/models/User");


// to update any user and return some data
const updateAnyUser = async (req, res) => {
    try {
        // find any user and return
        const user = await User.findOne({ email: 'gfg@gmail.com'});

        // now, we want to update the name of the user
        const name = "Geeks For Geeks";

        // here we updated the user but get the response as the old user's data
        // const oldUser = await User.findOneAndUpdate({ email: 'gfg@gmail.com'}, { $set: { fullName: name }});

        // to get the updated user's data, we have to set the {new: true}
        const updatedUser = await User.findOneAndUpdate({ email: 'gfg@gmail.com'}, { $set: { fullName: name }}, { new: true });

        // here we will return the user
        res.status(200).json({ user: updatedUser });


    } catch (error) {  // if something went wrong
        return res.status(500).json({ status: 500, message: "Internal Server Error!" });
    }
}

// export all the controllers
module.exports = { updateAnyUser };