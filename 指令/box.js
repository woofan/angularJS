angular.module("myapp")
.directive("boxAdd",[function(){
	return{
		templateUrl:"box.html",
		restrict:"AE",
		scope:{
			data:"="
		},
		link:function($scope,$element,$attrs){
			$scope.getSix = function(x){
				if(x ==="male")
					return "他是男人！";
				else
					return "他是女人！";
			};
		}
	};
}]);