var fileLottery = function(directory) {
  	this.index = 0;
  	this.fileArray = ["fiel1", "file2", "file3"];
   // return directory;
   
}
	fileLottery.prototype = {
		next : function(){
			return this.fileArray[this.index++];
		},
		randomInRange : function(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		shuffle : function(){
		    var shuffled = [];
		    for (i = 0; i <= this.fileArray.length; i++) {
		        var randomIndex = this.randomInRange(0,this.fileArray.length-1);
		        console.log(this.fileArray);
			    shuffled[i] = this.fileArray.splice(randomIndex,1)[0];
		    }
			return shuffled;
		}
	}

module.exports.fileLottery = fileLottery;
