const GeoPoint = require('geopoint')
/*
module.exports =function(data,box) {
 
 let j = 0;
 var array = []
 let b1 = new GeoPoint(box[0]._degLat,box[0]._degLon);
 let b2 = new GeoPoint(box[1]._degLat,box[1]._degLon);

 for(i=0; i<=data.length; i++){
 	
 	let p = new GeoPoint(parseFloat(data[i].lat),parseFloat(data[i].lon));
 	if(p._degLat >= b1._degLat && p._degLat <= b2._degLat && p._degLon>= b1._degLon && p._degLon <= b2._degLon ){
 		console.log(p)
 		array[j] = p;

 		j++;
 	}


 }

 return array;
}
*/




module.exports = function(data,userPoint){
	return new Promise(function(resolve,reject){
		var j = 0;
		var array = [];
		
		if(true){

		for(i=0; i<data.length; i++){
		 	let p = new GeoPoint(parseFloat(data[i].lat),parseFloat(data[i].lon));
		 	let id = data[i].id;
		 	//console.log(p);
			if(userPoint.distanceTo(p,true) < 50) {
				array[j] = id;
				j = j+1;
				

			}
		}
		
		resolve(array)
	}
	else{
		var reason = new Error("error");
		reject(reason);
	}
		
		
	}).then(function(res){
		//console.log(res);
		
		return res;
	}).catch(function(err){
		console.log(err.message);
	})
}







