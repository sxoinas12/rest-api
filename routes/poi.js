const GeoPoint = require('geopoint')
const Router = require('koa-router');
const router = new Router();
const knex = require('../models/database');

const p = new GeoPoint(16.56,43.52);

const tools = require('../helpers/tools');


//request --> localhost:3000/poi/-9.724&124.27
router.get('/poi/:lat&:lon', (ctx,next) => {

  let userCoord = {
  	lon :ctx.params.lon,
  	lat :ctx.params.lat
  }
  let UserPoint = new GeoPoint(parseFloat(userCoord.lat),parseFloat(userCoord.lon));

  return knex.table('Points_of_Interest').select('id','lat' ,'lon').
  then((data) => {
          let results = tools(data,UserPoint);
          return results;
  }).then((res)=> {
    console.log(res)
    return knex.select('Points_of_Interest.id','Points_of_Interest.name','Points_of_Interest.lon'
      ,'Points_of_Interest.lat','Types_of_POI.type')
    .from('Points_of_Interest').join('POI_to_type',function(){
  this.on('Points_of_Interest.id','=','POI_to_type.POI_id').onIn('Points_of_Interest.id',res)
}).join('Types_of_POI',function(){
  this.on('POI_to_type.Type_id','=','Types_of_POI.id')
}).
    then((res)=>{
      
      ctx.body = res;
    })
   
  }).catch((err)=>{
    ctx.body = err;
  })
 
 
});


module.exports = router;

