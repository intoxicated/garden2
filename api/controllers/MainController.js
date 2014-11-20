/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'login': function(req, res) {
		var email = req.param("email");
		var password = req.param("password");


		Volunteer.findByEmail(email).exec(function(err, usr){
			sails.log(usr[0]);
			if(err)
				return res.send(500, {error: "DB Error"});
			if(usr.length > 0) {
				req.session.user = usr[0].id;

				return res.send(400, {user:usr, msg:"succeed"});
			}
			else{
				req.session.user = null;
				return res.send(404, {error: "User not found"});
			}
		});
	}
};

