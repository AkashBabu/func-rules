









## func-rules

Nodejs library for registering functions, and then executing only selected functions with the specified arguments.  
You can configure function specific arguments and also common arguments for all the functions to be executed.  

### Installation

> npm install func-rules

### Usage

```javascript   
var Rules = require('func-rules');

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
function func3(one, two){
    console.log('Func3');
    console.log('Specificargs :' + one);
    console.log('Common args : ' + two);
    console.log();
}    
function func4(one, two){
    console.log('Func4');
    console.log('Specificargs :' + one);
    console.log('Common args : ' + two);
    console.log();
}    
function func5(one, two){
    console.log('Func5');
    console.log('Specificargs :' + one);
    console.log('Common args : ' + two);
    console.log();
}

var rules = new Rules();
var func1Rule = rules.register(func1);
var func2Rule = rules.register(func2);

rules.exec([
    {rule : func1Rule args : ['func1specific']},
    {rule : func2Rule, args : ['specificForFunc2']},    
    ]
    ,'common'
);
```
The above code would result in 

```
Func1
Specificargs :func1specific
Common args : common

Func2
Specificargs :specificForFunc2
Common args : common
```

You could also chain the exec : 

```javascript
rules.exec([
        {rule : func1Rule, args : [arg1, arg2 ]},
        {rule : func2Rule, args : [arg1]}
    ]
    , commonArg1, commonArg2
).exec([
        {rule : func3Rule, args : [arg1, arg2]},
        {rule : func4Rule, args : [arg1, arg2]},
        {rule : func4Rule, args : [arg1, arg2]},
        {rule : func5Rule, args : [arg1, arg2]}
    ]
    , commonArg1, commonArg2
)
```


### Contributors

Akash Babu  

### Licence

MIT