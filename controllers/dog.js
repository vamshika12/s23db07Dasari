var dog = require('../models/dog');
// List of all dogs
exports.dog_list = async function(req, res) {
    try{
    thedogs = await dog.find();
    res.send(thedogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   //Views and Handle a how all view
   exports.dog_view_all_Page = async function(req, res) {
    try{
    thedogs = await dog.find();
    res.render('dog', { title: 'dog Search Results', results: thedogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific dog.
exports.dog_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dog.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle dog create on POST.
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dog_name":"sunny", "dog_year":5, "dog_birth":"March"}
    document.dog_name = req.body.dog_name;
    document.dog_year = req.body.dog_year;
    document.dog_birth = req.body.dog_birth;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle dog delete on DELETE.
exports.dog_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await dog.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle dog update form on PUT.
exports.dog_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await dog.findById( req.params.id)
 // Do updates of properties
 if(req.body.dog_name)
 toUpdate.dog_name = req.body.dog_name;
 if(req.body.dog_year) toUpdate.dog_year = req.body.dog_year;
 if(req.body.dog_birth) toUpdate.dog_birth = req.body.dog_birth;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// Handle a show one view with id specified by query
exports.dog_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dog.findById( req.query.id)
    res.render('dogdetail',
   { title: 'dog Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a dog.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dog_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dogcreate', { title: 'dog Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a dog.
// query provides the id
exports.dog_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await dog.findById(req.query.id)
    res.render('dogupdate', { title: 'dog Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.dog_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await dog.findById(req.query.id)
    res.render('dogdelete', { title: 'dog Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };