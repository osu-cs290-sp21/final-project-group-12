var port = process.env.PORT || 3000;
var itemData = require('./itemData.json')
var express = require('express')
var app = express()
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

if (itemData){
  console.log("itemData imported successfully"),
  console.log(itemData)
}

// return the main page, using parameters and twitData.json array
app.get('/', function (req, res) {
  if(itemData) 
     {res.status(200).render('homePage', {items: itemData})}
   else
     {next()}
})

// return the main page, using parameters and twitData.json array
app.get('/category/:key', function (req, res, next){
  var key = req.params.key
   if(itemData[key]) 
     res.status(200).render('catPage', 
        {   
            items: itemData[key]
        }
      )
   else
     {next()}
    }   
)

app.get('/checkout', function (req, res, next){
    console.log("Checkout page requested")
     res.status(200).render('checkoutPage', 
        //{   
            // serve the selected items data object here, somehow
        //}
      )
     next()
    }   
)

app.get('*', function (req, res, next) {
  res.status(404).render('404')
})

app.listen(port, function () {
  console.log("== Server is listening on port", port)
  }
);
