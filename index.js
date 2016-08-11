









// var rules = {};
// var ruleNum = 0;

var Rules = function(){
	this._rules = {};
	this._ruleNum = 0;
	return this;
};

Rules.prototype.append = function(callback){
	this._rules[this._ruleNum] = callback;
	var temp = this._ruleNum++;
	return temp.toString();
}

Rules.prototype.exec = function(rulesToExec, data){
	var self = this;
	rulesToExec.forEach(function(rule){
		self._rules[rule.ruleNum](rule.config, data);
	})
	self = null;
};

Rules.prototype.remove = function(ruleNum){
	delete this._rules[ruleNum];
}

module.exports = Rules;

















