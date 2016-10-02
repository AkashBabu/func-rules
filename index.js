










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
	return this;
};

module.exports = Rules;















