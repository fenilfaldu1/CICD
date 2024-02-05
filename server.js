const express = require('express')//
const app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const port = 4000
const auth = (req,res,  next) => {
	const headers = req.headers;
	if (headers['x-dsn']!='abcd-abcd')
	{
		res.send('Auth Failed');
		return;
	}
	next();
}
app.get('/',  (req, res) => {
	res.send("Hello World!,This is Fenil's First pipeline");
  })
app.get('/testgetrequest',  (req, res) => {
	res.send('Hello World!');
  })
app.get('/testwithheader', auth,  (req, res) => {
  res.send('Hello World! with header');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//express started