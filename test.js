
var x = 1;
var y = 3;
var prom = new Promise(function(resolve,reject){
	if(x === 1){
		y = y+1;
		resolve(y);
	}
	
	else{
		var reason = new Error("error");
		reject(reason);
	}
})


var print = function(){
	prom.then(function(res){
		console.log(res);
	}).catch(function(err){
		console.log(err.message);
	})
}


print();


