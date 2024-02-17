const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

let myPath = path.resolve(__dirname, "uploads");

const uploadDir = path.join(__dirname, "uploads");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir);
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
	res.send("все ок");
});

app.get("/goDir", (req, res) => {
	console.log(req);
});

async function findFileType(arr) {
	let res = [];

	for (let el of arr) {
		const handleredItem = await new Promise((res) => {
			fs.stat(path.resolve(__dirname, myPath, el), (err, stats) => {
				res({
					isFile: stats.isFile(),
					title: el,
				});
			});
		});

		res.push(handleredItem);
	}

	return res;
}

app.get("/dir", async (req, res) => {
	let files = fs.readdirSync(myPath);

	files = await findFileType(files);

	res.send(files);
});

function start() {
	try {
		app.listen(4000, () => {
			console.log("сервер начал работать на порту 4000");
		});
	} catch (e) {
		console.log(e);
	}
}

start();
