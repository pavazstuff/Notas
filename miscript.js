angular.module("myapp",["LocalStorageModule"]).

controller("con1", function($scope,localStorageService){

	if(localStorageService.get("info")){
		$scope.vlist = localStorageService.get("info");
	}else{
		$scope.vlist = [];
	}

	$scope.$watchCollection("vlist", function(){
		localStorageService.set("info",$scope.vlist);
	});

	$scope.$watchCollection("notas",function(){
		$scope.notas.fecha = new Date();
	});

	$scope.save = function(){
		$scope.vlist.push($scope.notas);
		$scope.notas={};
	}
}).
filter("html", function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
});