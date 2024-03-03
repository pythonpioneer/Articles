const router = require('express').Router();


// to check that the server is running 
router.get('/health', (_, res) => {
    return res.status(200).json({ message: "App is running." });
});

module.exports = router;

