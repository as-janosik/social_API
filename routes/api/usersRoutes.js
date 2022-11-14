const router = require('express').Router();

//const { json } = require('express');
const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;