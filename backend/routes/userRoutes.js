import {
  addNewUser,
  getUsers,
  getUserByID,
  updateUser,
  removeUser,
} from '../controllers/userController';

const routes = (app) => {
  app
    .route('/users')
    // GET endpoint
    .get(getUsers)
    // POST endpoint
    .post(addNewUser);

  app
    .route('/user/:userID')
    // GET specific user
    .get(getUserByID)
    // UPDATE specific user
    .put(updateUser)
    // DELETE specific user
    .delete(removeUser);
};

export default routes;
