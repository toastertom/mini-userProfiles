angular.module('userProfiles').controller('MainController', function($scope, mainService){

  

  // Used an iffe to invoke the function right away ()()
    (function getUsers() {
      $scope.users = mainService.getUsers();
    })()


    // Acts as a middle man
    $scope.toggleFavorite = mainService.toggleFavorite;

})
