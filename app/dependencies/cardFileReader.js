(() => {
	const fs = require("fs");

	//create fileReader object with a method that reads txt files
	function CardFileReader(){};
	CardFileReader.prototype.read = (filename, callback) => {
		//read file from location, convert each line to an array item
		fs.readFile(filename, "utf8", (err, data)=>{
			if(err) return callback(err);
			let dataArray = data.split("\r\n");
			//pass null as first parameter to the callback
			callback(null, dataArray);
		});
	}

	module.exports = CardFileReader;
})();