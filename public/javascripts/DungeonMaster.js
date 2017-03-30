var DungeonApp = angular.module('DungeonApp', []);
DungeonApp.controller('CharacterCreation', [
  '$scope','$http',
  function($scope,$http) {
    $scope.characters = [];
    $scope.addCharacter = function() {
      console.log("Adding Character");
      var newCharacter = {name:$scope.name,race:$scope.race,ddclass:$scope.ddclass,level:$scope.level,hp:$scope.hp,type:"Player"};
      $scope.name='';
      $scope.race='';
      $scope.ddclass='';
      $scope.level=0;
      $scope.hp=0;
      $scope.error='';
      $http.post('/characters',newCharacter).success(function() {
	console.log("New Character Posted Successfully");
	$scope.characters.push(newCharacter);  
    	});
	    console.log("Adding Character");
      if($scope.level>=1 && $scope.hp>=1) {
        var newCharacter = {name:$scope.name,race:$scope.race,ddclass:$scope.ddclass,level:$scope.level,hp:$scope.hp};
        $scope.name='';
        $scope.race='';
        $scope.ddclass='';
        $scope.level=0;
        $scope.hp=0;
        $scope.error='';
        //PUSH NEW CHARACTER TO DATABASE THEN TO LOCAL ARRAY
        $http.post('/character', newCharacter).success(function(data) {
          $scope.characters.push(data);
        });

    	}
      else{
	      $scope.error="Please enter a positive number for HP and Level.<br>";
	    }
    }
    $scope.getCharacter = function() {
      console.log("Fetching Character from Database");
    }
  }
]);
