require('../models/database');
const Excuses = require('../models/Excuses');







/**
 * GET /
 * Homepage 
*/



exports.homepage = async(req, res,next) => {
    try{
       test=req.query.tag;

   
      //const excuse = await Excuses.aggregate([{ $match:   { $expr: { $gte: [ { $rand: {} }, 0.5 ] } } }, { $sample: { size: 1} }]);

     //const excuse = await Excuses.aggregate([{ $match: {tag : test}},{ $match: { $expr: { $gte: [ { $rand: {} }, 0.5] } } },{ $sample: { size: 1} }]);

     const excuse = await Excuses.aggregate([{ $match: {tag : test}},{ $sample: { size: 1} }]);



     //const myRequest = new Request(excuse);

     
    //fetch(myRequest)

     //.then((res) => res.json())

     //console.log(res.render('index', {message: message}));
     //testttt= res.render('message', req.query);

     //const excuse = await Excuses.find({'message':"lol"});

     //const excuse = await Excuses.findOne({},{message:1,_id:0,tag:0,http_code:0});
    // const excuse = await Excuses.findOne({"tag":test},{message:1,_id:0,tag:0,http_code:0});

    //testt=req.params._id;

    //console.log(req.body.message);
   



      // const excuse = await Excuses.aggregate [ { $match : { tag : test } } ];
      

       // testt = await  Excuses.distinct("message"[{ $match:  {tag : test} },{ $sample: { size: 1} } ]);

     

       //excuse = { $project : { "message":1} };


       
       // console.log(test2);
      // console.log(testt);
    //    console.log(excuse);


    




    res.render('index', { title: 'Dev Excuse ' ,excuse,test}  );
    } catch (error){

    }
}


/**
 * GET /
 * addExcuse
*/


exports.addExcuse = async(req, res) => {
    try{
        const infoErrorsObj = req.flash('infoErrors');
        const infoSubmitObj = req.flash('infoSubmit');
  
    res.render('addExcuse', { title: 'Dev Excuse - Add',infoSubmitObj,infoErrorsObj } );
    } catch (error){

    }
}

/**
 * POST /
 * addExcuse
*/

exports.addExcusePost = async(req, res) => {
    try {
        
        const newUser = new Excuses({
            message: req.body.message,
            tag: req.body.tag,
            http_code: req.body.http_code

    });
       await newUser.save();

       req.flash('infoSubmit', 'New excuse  has been added')
       res.redirect('/addExcuse');

    } 
    catch (error){

        req.flash('infoErrors', error  );
        res.redirect('/addExcuse');
    }
  }

/**
 * GET /
 * lost
*/
  
exports.pageLost = async(req, res) => {
    try{
   
    res.render('lost', { title: 'Dev Excuse - Lost' } );
    } catch (error){

    }
}

/**
 * GET /
 * list
*/
exports.listGet = async(req, res) => {
    try{
      const excuse= await Excuses.find({});
   

    res.render('list', { title: 'Dev Excuse - List',excuse } );
    } catch (error){

    }
}


/**
 * GET /
 * http_code/number
*/
exports.http_code = async(req, res) => {
    try{
        let categoryId = req.params.http_code;

        const excuse = await Excuses.find({'http_code': categoryId});


    res.render('http_code', { title: 'Dev Excuse - List',excuse } );
    } catch (error){

    }
}


/**
 * GET /
 * http_code/number
*/
exports.http_codeByid = async(req, res) => {
    try{
        let categoryId = req.params.http_code;

        const excuse = await Excuses.find({'http_code': categoryId});


    res.render('http_code', { title: 'Dev Excuse - List',excuse } );
    } catch (error){

    }
}


/*

async function insertDymmyExcuseData(){
    try {
     await Excuses.insertMany([
         {
             "http_code": "702",
             "tag": "Inexcusable",
             "message": "Emacs"
         },
         {
            "http_code": "701",
             "tag": "Inexcusable",
             "message": "Meh"
         }, 
         {
             "http_code": "703",
             "tag": "Inexcusable",
             "message": "Explosion"
         },
  
         {
             "http_code": "704",
             "tag": "Inexcusable",
             "message": "Goto Fail"
         }
  
     ]);
    } catch (error){
     console.log('err', + error)
  
    }
  }
  
  insertDymmyExcuseData();
*/
/**
 * GET /
 * 404
*/

exports.excuseError = async(req, res) => {

        res.render('404', { title: 'Dev Excuse - 404' } );
}

