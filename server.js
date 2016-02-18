var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname+ '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
       ig.media_popular(function(err, medias, remaining, limit) {       
           res.render('pages/index', { grams: medias });   
        });
});


ig.use({
    //7bb8c43173164b38a89d9d0b1320bf0d
    // 6ac0131dca1f4ed598d0c901d0a64421
    
    //e0e51c60672c4f09abe28c46c71a3a7a
    //db11c575a8ae4f1aa90a03ba1d1345d8
         client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
         client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8'
});

    // app.get('/',function(req,res){
    //     res.render('pages/index');
    // });

app.listen(8080);
console.log('App started. listening at 8080');