
var fs = require('fs');
module.exports = function(file, extension, callback) {
	
	var arr = [];

	fs.readdir(file, function (err, list) {
		
		if (err) {	
			return callback(err);
		} else {
		
			for (var i = 0; i < list.length; i++) {
				list[i] = list[i].split('.');
				if (list[i][1] === extension) {
					arr.push(list[i].join('.'));
				}
			}
			return callback(null, arr);

		}
	})
};

var mymodule = require('./module.js');
mymodule(process.argv[2], process.argv[3], function(err, list){
	if (!err) {
		for (var i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
	}
});