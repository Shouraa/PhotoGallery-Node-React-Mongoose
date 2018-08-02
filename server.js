const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const app = express();

//Body-parser
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB is Connected ..."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});

// app.get("/api/students", (req, res) => {
//   MongoClient.connect(
//     url,
//     function(err, db) {
//       if (err) throw err;
//       const dbo = db.db(myDB);
//       dbo
//         .collection(myCollection)
//         .find({})
//         .toArray(function(err, result) {
//           if (err) throw err;
//           res.json(result);
//           db.close();
//         });
//     }
//   );
// });

// const url = "mongodb://localhost:27017/";
// const myDB = "Integrify";
// const myCollection = "students";
