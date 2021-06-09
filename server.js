var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs')
var mainPageItemData = require('./mainPageItemData.json')
var itemData = require('./itemData.json')
var cartData = require('./cartData.json')
const { networkInterfaces } = require('os')
var app = express()
var port = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.static('public'))



//
//var mongoose = require('mongoose')
//mongoose.connect



//


if (itemData){
  console.log("itemData imported successfully"),
  console.log(itemData["meats"])
}

// return the main page
app.get('/', function (req, res) {

  if(itemData) 
     {res.status(200).render('homePage',
     
     {  
      specialItems: mainPageItemData["specials"],
      meatsItems: mainPageItemData["meats"],
      veggiesItems: mainPageItemData["veggies"],
      drinksItems: mainPageItemData["drinks"]
      }
    )
  }
   else
     {next()}
})


app.get('/category', function (req, res, next){
     res.status(200).render('catMainPage')
  }   
)

// return the main page, using parameters and itemData.json array
app.get('/category/:key', function (req, res, next){
  var key = req.params.key.toLowerCase();
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
//create datafile
/*app.post('/category/:key', function (req, res, next)){})*/
app.post('/category/:key', function (req, res, next) {
  console.log("== req.body:", req.body)
    var key = req.params.key.toLowerCase();
    if (req.body && req.body.img && req.body.title && req.body.priceDescription && req.body.price && req.body.amount && req.body.priceUnit) {
    if (itemData[key]) {
      //console.log("smth");
      cartData.push({
        img: req.body.img,
        title: req.body.title,
	      priceDescription: req.body.priceDescription,
	      price: req.body.price,
	      amount: req.body.amount,
        priceUnit: req.body.priceUnit,
      })
      console.log(cartData)
      fs.writeFile(
        __dirname + '/cartData.json',
        JSON.stringify(cartData, null, 2),
        function (err) {
          if (err) {
            res.status(500).send("Error writing new data.  Try again later.")
          } else {
            res.status(200).send()
          }
        }
      )
    } else {
      next()
    }
  } else {
    console.log(req.body && req.body.img && req.body.title && req.body.priceDescription && req.body.price && req.body.amount && req.body.priceUnit)
    res.status(400).send("Request needs a JSON body with smth missing." )
  }
})

app.get('/checkout', function (req, res, next){
    console.log("Checkout page requested");
          if(cartData)  
            res.status(200).render('checkoutPage', 
               {   
                   cartData: cartData,

                   
               }
             )
    else {next()}

    })

app.post('/checkout', function (req, res, next){
  console.log("== req.body:", req.body)
  if (req.body && req.body.title && req.body.amount){

    console.log(req.body && req.body.title && req.body.amount)
    var itemTitle = req.body.title;
    var itemAmount = req.body.amount;
    var titleField = title;
    var amountField = amount //unknown var?
      for( var k = 0; k < cartData.length; ++k ) {
          if(  itemTitle == cartData[k][titleField] ) {
              cartData[k][amountField] = itemAmount ;
          }
        }
      }
    //}

//var data = fs.readFileSync(cartData);
//var json = JSON.parse(data);
//fs.writeFileSync('cartdata, JSON.stringify(json, null, 2));

  else if (req.b && req.b.title && req.b.amount){
    var itemTitle = req.b.title;
    var itemAmount = req.b.amount;
    var titleField = title;
    var amountField = amount
    var i=0;

    let editedDataBase = JSON.stringify(ReadData, null, 2);
    fs.writeFileSync('database.json', editedDataBase);

  for (i ;i< cartData.entries().length; i++) {
    if (cartData.title == "itemTitle") {
        cartData.splice(i, 1);
        //delete carttData[i];
    }
 }
}
  else {next()}
})

/*app.post('/checkout', function (req, res, next){

})*/

app.get('/thank', function(req,res,next){
        //res.status(200).render('thankPage');
          //var data = fs.readFileSync(cartData);
          //var json = JSON.parse(cartData);
          //while(json.length()>0)
          //json.remove(json.next());
          /*var i = 0;
          for (i ; i<cartData.length; i++)
          console.log("datalength ==", cartData.length)
              {cartData.splice} }*/
              res.status(200).render('thankPage');
              return;
              var cartDota =  [/*{
                img: "",
                title: "",
                priceDescription: "",
                price: "",
                amount: "",
                priceUnit: "",
              }*/]

              fs.writeFile(
                __dirname + '/cartData.json',
                JSON.stringify(cartDota, null, 2),
                function (err) {
                  if (err) {
                    res.status(500).send("Error writing new data.  Try again later.")
                  } else { //
                    res.status(200).send()
                  }
                }
              )
              //console.log(window.location.assign( 'http://localhost:3000/thanks'));
})

app.get('/thanks', function (req, res) {
  res.status(200).render('thankPage'); 
})


app.get('*', function (req, res, next) {
  res.status(404).render('404')
})

app.listen(port, function () {
  console.log("== Server is listening on port", port)
  }
);
