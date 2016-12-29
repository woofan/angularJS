app = angular.module("myapp",[]);
app.controller("mycontroller",[function(){
	var self = this;
	self.wf = "wf";
	self.list = [
		{name:"胖头鱼",age:16,six:"male"},
		{name:"李莫愁",age:22,six:"female"},
		{name:"小野菊",age:45,six:"female"},
		{name:"小强",age:6,six:"male"},
		{name:"何润东",age:116,six:"male"}
	];
}]);