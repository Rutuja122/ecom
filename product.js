var express = require('express');
var app = express();

// controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"shirt",description:"white",quantity:800, unitprice:1000},
    {id:2, title:"shoes",description:"black",quantity:500, unitprice:2000},
    {id:3, title:"umbrella",description:"red",quantity:200, unitprice:300},
    {id:4, title:"watch",description:"fastrack",quantity:3000, unitprice:4000},
    {id:5, title:"dress",description:"long kurti",quantity:7500, unitprice:10000},
	{id:6, title:"bottle",description:"pink",quantity:500, unitprice:200},
  ];
  res.send(products);
    console.log("Invoking  rest api for entity list");
	var entity=[
	{cutomer, employee, office manager},
	];

  
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})