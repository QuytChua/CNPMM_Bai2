import CRUDService from "../services/CRUDService.js";

let getHomePage = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.redirect("/get-crud");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  return res.render("users/findAllUser.ejs", { dataTable: data });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  let userData = await CRUDService.getUserById(userId);
  return res.render("users/updateUser.ejs", { user: userData });
};

let putCRUD = async (req, res) => {
  await CRUDService.updateUserData(req.body);
  return res.redirect("/get-crud");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  await CRUDService.deleteUserById(id);
  return res.redirect("/get-crud");
};

export default {
  getHomePage,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
