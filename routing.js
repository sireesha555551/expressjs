var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
    res.send('get a routing value');
});
router.post('/',function(req,res){
    res.send('posting a routing value');

});
module.exports=router;

