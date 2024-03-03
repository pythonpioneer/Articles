const { updateAnyUser } = require('../../controllers/user');

const router = require('express').Router();


// to check that the server is running 
router.get('/health', (_, res) => {
    return res.status(200).json({ message: "App is running." });
});

// to get the user data and update it
router.get('/', updateAnyUser);

module.exports = router;

