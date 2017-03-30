var DungeonApp = angular.module('DungeonApp', []);
DungeonApp.controller('CharacterCreation', [
  '$scope','$http',
  function($scope,$http) {
    $scope.characters = [];

    var RollStat = function() {
      var rollone = Math.floor((Math.random()*6)+1);
      var rolltwo = Math.floor((Math.random()*6)+1);
      var rollthree = Math.floor((Math.random()*6)+1);
      var rollfour = Math.floor((Math.random()*6)+1);
      return ((rollone + rolltwo + rollthree + rollfour)-Math.min(rollone,rolltwo,rollthree,rollfour));
    }

    $scope.addCharacter = function() {
      console.log("Adding Character");
      var Str=RollStat();
      var Dex=RollStat();
      var Con=RollStat();
      var Int=RollStat();
      var Wis=RollStat();
      var Cha=RollStat();
      var newCharacter = {name:$scope.name,race:$scope.race,ddclass:$scope.ddclass,level:$scope.level,hp:$scope.hp,type:"Player",Str:Str,Dex:Dex,Con:Con,Int:Int,Wis:Wis,Cha:Cha};
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
        //PUSH NEW CHARACTER TO DATABASE THEN TO LOCAL ARRAY

    }

    $scope.getCharacter = function() {
      console.log("Fetching Character from Database");
      return $http.get('/characters').success(function(data) {
        angular.copy(data,$scope.characters);
      });
    }

/*    $scope.delete = function(character) {
      $http.delete('/characters/' + character._id )
        .success(function(data){
          console.log("delete worked");
          $scope.getCharacter();
        })
	.error (function(err){
	  console.log(err);
	});
    };*/
  }
]);
