const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

let myPath = path.resolve(__dirname, "uploads");

const uploadDir = path.resolve(__dirname, "uploads");

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
	myPath = path.resolve(myPath, req.query.dirname);
	res.send(true);
});

app.get('/back', (req, res) => {
	myPath = myPath.slice(0, myPath.lastIndexOf(path.sep));
	res.send(true);
} )

async function findFileType(arr) {
	let res = [];

	for (let el of arr) {
		const handleredItem = await new Promise((res) => {
				fs.stat(path.resolve(__dirname, myPath, el), (err, stats) => {
					try {
						res({
							isFile: stats.isFile(),
							title: el,
						});
					} catch(e) {
						console.log(stats);
						res({
							isFile: true,
							title: el
						})
					}
				});
		});

		res.push(handleredItem);	
	}

	return res;
}

app.get("/dir", async (req, res) => {
	try {
		let files = fs.readdirSync(myPath);
		files = await findFileType(files);
		res.send(files);
	} catch(e) {
		res.status(500).send({
			message: 'ошибка крч'
		});
	}
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
