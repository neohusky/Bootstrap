var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the about route
router.get('/about', function(req, res) {
    res.render('about');
});


// define the settings route
router.get('/settings',function(req,res){
    var set = { selCommPortName: '1',
        CommPortName: '2',
        Baud: 'image.jpg url',
        webport: 'title of the image' };
    console.log("set :" + set.CommPortName); //correct json object
    res.render('settings', {
        title: 'Settings Page',
        result: set
    });

});


router.post('/settings', function (req, res) {
    res.render('settings', { CommPortName: req.body.CommPortName });
    console.log("result")
});

router.post('/getJson', function (req, res) {
    // If it's not showing up, just use req.body to see what is actually being passed.
    console.log(req.body);
    res.render('about');
});

module.exports = router;




