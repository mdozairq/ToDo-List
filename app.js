const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const items=["Good Morning!"];
const workItems=[];
let item;
console.log(date);
app.get("/", function(req, res){
	
	res.render("list", {listTitle: date.getDate(), newListItem: items});

});

app.post("/",function(req, res){
	item = req.body.newItem;
	console.log(req.body.newItem);
	if(req.body.list === "Work"){
		workItems.push(item);
		res.redirect("/work");
	}else
	items.push(item);
	res.redirect("/");
});

app.get("/work", function(req,res){
	res.render("list", {listTitle: "Work", newListItem: workItems});
});

app.listen(3000, function(){
	console.log("Server is running on port 3000");
});