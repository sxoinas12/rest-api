const GeoPoint = require('geopoint')


module.exports = function(data,userPoint){
	return new Promise(function(resolve,reject){
		var j = 0;
		var array = [];
		let max_range = 50;
		if(true){

		for(i=0; i<data.length; i++){
		 	let p = new GeoPoint(parseFloat(data[i].lat),parseFloat(data[i].lon));
		 	let id = data[i].id;
		 	//50 is the max range i wanna search
		 	
			if(userPoint.distanceTo(p,true) < max_range) {
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
		return res;
	}).catch(function(err){
		console.log(err.message);
	})
}







