require ('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const App = express;
App.request(express.json);

//DOTENV
const{SERVER_PORT, CONNECTION_STRING} = process.env;

//USE REQ, RES
app.use(express.json());

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
app.set("db", db); 
console.log('DB Connected'); 
})
.catch(() => {
    console.log('Error happened while trying to connect to the DB'); 
});

///END POINTS

//GET
app.get("/api/search", searchProduct);
//POST
app.post("/api/add", addProduct);
//PUT
app.put("/api/edit", editProduct);
//DELETE
app.delete("/api/cancel", deleteProduct);

//LISTEN
const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));