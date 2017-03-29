var DungeonApp = angular.module('DungeonApp', []);
DungeonApp.controller('CharacterCreation', [
  '$scope','$http',
  function($scope,$http) {
    $scope.characters = [];
    $scope.addCharacter = function() {
	console.log("Adding Character");
      if($scope.level>=1 && $scope.hp>=1) {
        var newCharacter = {name:$scope.name,race:$scope.race,ddclass:$scope.ddclass,level:$scope.level,hp:$scope.hp};
        $scope.name='';
        $scope.race='';
        $scope.ddclass='';
        $scope.level=0;
        $scope.hp=0;
        $scope.error='';
	      $scope.characters.push(newCharacter);

        //DO AJAX CALL HERE TO PUSH NEW CHARACTER TO DATABASE

    	}
      else{
	      $scope.error="Please enter a positive number for HP and Level.<br>";
	    }
    }
  }
 ]);
