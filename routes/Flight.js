var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/flight', function(req, res, next) {
  res.render('flight');
});

router.get('/FirstClass',function(req,res){
console.log(req.query)

dis=[0,200,400,600]

if(req.query.fsrc=="Pune")
{
    i=0
}

else  if(req.query.fsrc=="Mumbai")
{
  i=1
}

else  if(req.query.fsrc=="Goa")
{
    i=2
}

else  if(req.query.fsrc=="Chennai")
{
    i=3
}

if(req.query.fdes=="Pune")
{
    j=0
}

else  if(req.query.fdes=="Mumbai")
{
  j=1
}

else  if(req.query.fdes=="Goa")
{
    j=2
}

else  if(req.query.fdes=="Chennai")
{
    j=3
}

distance=Math.abs(dis[i]-dis[j])

if(req.query.food=="Burger")
{
    fprice=200
}

else  if(req.query.food=="Idli")
{
  fprice=100
}

else  if(req.query.food=="Vada Pao")
{
  fprice=75
}

else  if(req.query.food=="Salad")
{
  fprice=150
}

else  if(req.query.food=="None")
{
  fprice=0
}

if(req.query.class=="First Class")
{ na=(distance*24)+parseInt(fprice)
res.render('FirstClass',{tclass:req.query.class,name:req.query.nam,age:req.query.age,gen:req.query.sex,fn:req.query.fn,fname:req.query.fname,fsrc:req.query.fsrc,fdes:req.query.fdes,food:req.query.food,distance:distance,na:na})
}

else if(req.query.class=="Second Class")
{ na=(distance*18)+parseInt(fprice)
res.render('SecondClass',{tclass:req.query.class,name:req.query.nam,age:req.query.age,gen:req.query.sex,fn:req.query.fn,fname:req.query.fname,fsrc:req.query.fsrc,fdes:req.query.fdes,food:req.query.food,distance:distance,na:na})
}

else if(req.query.class=="Economy Class")
{na=(distance*12)+parseInt(fprice)
res.render('EconomyClass',{tclass:req.query.class,name:req.query.nam,age:req.query.age,gen:req.query.sex,fn:req.query.fn,fname:req.query.fname,fsrc:req.query.fsrc,fdes:req.query.fdes,food:req.query.food,distance:distance,na:na})
}

})
module.exports = router;