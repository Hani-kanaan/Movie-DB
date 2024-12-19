import  User  from '../model/User.js';
import express from 'express' ;
import {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser, 
    deleteUser
} from '../controllers/UserController.js'

const userRoutes = express.Router();

userRoutes.get('/' , getAllUsers);
userRoutes.get('/:id' , getUserByID);
userRoutes.put('/:id' , updateUser);
userRoutes.post('/' , createUser);
userRoutes.delete('/:id' , deleteUser)

export default userRoutes;