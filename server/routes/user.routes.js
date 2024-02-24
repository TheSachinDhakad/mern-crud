const express = require('express');
const { createUser, findUsers, updateUser, getUserById, deleteUser } = require('../controllers/User.controller');
const router = express.Router();

router.post('/create', createUser);
router.get('/get', findUsers);
router.get('/get/:id', getUserById);
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router;
