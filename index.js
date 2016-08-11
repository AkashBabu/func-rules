









var rules = {};
var count = 0;

var Rules = function(){
	return this;
};

Rules.prototype.append = function(callback){
	rules[count] = callback;

	var ruleNum = count++;
	return ruleNum.toString();
}

Rules.prototype.exec = function(rulesToExec, data){
	if(rulesToExec.constructor == Array){
		rulesToExec.forEach(function(rule){
			rules[rule.rule](rule.config, data);
		})
	}else{
		throw new Error('Rules.exec() accepts only Array');
	}
};

module.exports = Rules;

















