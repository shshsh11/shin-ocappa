const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const storySchema = require("../schema/storySchema");

// const dbUser = process.env.dbUser;
// const dbPass = process.env.dbPass;
require("../../env");

const dbUri = process.env.dbUri;

mongoose.connect(dbUri);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>
{
	console.log("connected to db");
})

const Story = mongoose.model("Story", storySchema);


//temporary setup
// const stories1 = new Story(
// {
// 	title: "pastaman origins",
// 	desc: "the start"
// })
// const stories2 = new Story(
// {
// 	title: "pastaman origins gaiden",
// 	desc: "the start...gaiden"
// })
// const stories3 = new Story(
// {
// 	title: "pastaman II",
// 	desc: "the sequel"
// })

// stories1.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })
// stories2.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })
// stories3.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })


router.get("/stories", (req, res) =>
{
	Story.find((err, docs) =>
	{
		if (err) return console.error(err);
		res.json(docs);
	})
})


module.exports = router;