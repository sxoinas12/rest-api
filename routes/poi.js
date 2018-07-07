const GeoPoint = require('geopoint')
const Router = require('koa-router');
const router = new Router();
const knex = require('../models/database');



//request --> localhost:3000/poi/45&65
//localhost:3000/poi/45.55&-65.23
router.get('/poi/:lon&:lat', (ctx) => {
 
  //user location that doing the request
  let coords = {
  	lon :ctx.params.lon,
  	lat :ctx.params.lat
  }

  let point = new GeoPoint(parseFloat(coords.lat),parseFloat(coords.lon));
  ctx.body = point;
  //Some things that need to get done
  //First we must put a range plateu for for our bounding box (distance maybe)
  //Then we should compare the distance from the geo location of database place with the geo location of user
  //if the distance is less than 5km we return the places 

  knex.table('Points_of_Interest').where().select('*')
});


module.exports = router;