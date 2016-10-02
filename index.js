









// var rules = {};
// var ruleNum = 0;

var Rules = function(){
	this._rules = {};
	this._ruleNum = 0;
	return this;
};

Rules.prototype.register = function(callback){
	this._rules[this._ruleNum] = callback;
	var temp = this._ruleNum++;
	return temp.toString();
}

Rules.prototype.exec = function(rulesToExec){
	console.assert(rulesToExec.constructor == Array, 'Only Arrays are allowed as a first argument');
	var self = this;
	var commonArgs = Array.prototype.slice.call(arguments, 1);
	rulesToExec.forEach(entry => {
		console.assert(entry.constructor == Object, 'Elements of the Array has to be Objects only');
		console.assert(entry.rule, 'Key "rule" is missing in the object provided');
		var specificArgs = entry.args || [];
		self._rules[entry.rule].apply(this, Array.prototype.concat.call(specificArgs, commonArgs));
	});
};

// Rules.prototype.deregister = function(ruleNum){
// 	delete this._rules[ruleNum];
// }

module.exports = Rules;


if(require.main == module){
	function func1(one ,two){
		console.log('Func1');
		console.log('Specificargs :' + one);
		console.log('Common args : ' + two);
		console.log();
	}
	function func2(one, two){

		console.log('Func2');
		console.log('Specificargs :' + one);
		console.log('Common args : ' + two);
		console.log();
	}

	var rules = new Rules();
	var func1Rule = rules.register(func1);
	var func2Rule = rules.register(func2);

	rules.exec([
		{rule : func1Rule},
		{rule : func2Rule, args : ['specificForFunc2']},
		
		
	],'common'
	);
}














