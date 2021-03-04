const UserModel = require('../models/user');
// const ClothingModel = require("../models/clothSection")
const mongoose = require('mongoose');

exports.saveUser = async (req, res) => {
	const { username, email, firstName, lastName, scores } = req.body;
	try {
		const newUser = new UserModel({
			username,
			firstName,
			lastName,
			email,
			scores
		});
		const savedUser = await newUser.save();
		res.json(savedUser);
	} catch (error) {
		res.send(error);
	}
};

exports.findUser = async (req, res) => {
	try {
		const { username } = req.params;
		console.log('USERNAME:', username);
		const currentUser = await UserModel.findOne({ username });
		// console.log(currentUser)
		res.json(currentUser);
	} catch (error) {
		res.send(error);
	}
};

exports.viewUsers = async (req, res) => {
	try {
		const users = await UserModel.find({});
		res.send(users);
	} catch (error) {
		res.json(error);
	}
};

exports.updateUserScores = async (req, res) => {
	try {
		const username = req.params.username;
		const { action, updateData } = req.body;
		let updatedUser;

		console.log('request action:', action);
		console.log('data:', updateData);

		// console.table("request", reqBody)

		if (action === 'UPDATE_LASTPLAYED') {
			console.log('Into the Last Played Update')
			updatedUser = await UserModel.findOneAndUpdate(
				{ username },
				{ $set: updateData }, 
				{ new: true }
				);
		} else {
			console.log('Into the ELSE OF Last Played Update')
			updatedUser = await UserModel.findOneAndUpdate(
				{ username },
				{ $push: updateData }, 
				{ new: true }
				);
		}
		console.log(updatedUser)
		res.json({ msg: updatedUser  });
	} catch (error) {
		res.json(error);
	}
};

// exports.updateLastPlayed = async(req, res) => {
// 	try {
// 		const [updateKey] = req.body
// 		console.log(req.body)
// 		console.log("UPDATE KEY")
// 		// const timeOfLastPlayed = UserModel.findOneAndUpdate(
// 		// 	{ username: req.params.username },
// 		// 	{ [updateKey]: req.body.updateKey },
// 		// 	{ new: true }
// 		// 	)
// 			res.json(updateKey)
// 	} catch (error) {

// 	}
// }
