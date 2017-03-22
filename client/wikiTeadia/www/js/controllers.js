angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('browse', function($scope, $http, $stateParams, NgMap) {
  console.log('fuuuuuuuucccckkkkk!!!!!!!!');
  $scope.teas = [];
  $scope.filteredTypes = [];
  $http.get(`http://localhost:3000/teas`)
    .then(function(data) {
      $scope.teas = data.data;
      console.log($scope.teas);
    });

    // Filter touches on each item in the object and returns only the ones which meet the criteria. "type" refers to the type created by the ng-repeat on in search.html
    // *Has some unwanted behavior due to what's in the array, fix after MVP
//   $scope.getTeasByType = function(teas, type) {
//     return teas.filter(function(tea) {
//       // if the id exists in the array from the toggleFilterType function, then it is shown. If it is not in the array, the filter function returns "false" and the items are not shown.
//       if($scope.filteredTypes.length && $scope.filteredTypes.indexOf(tea.tea_type_id) == -1) {
//         return false;
//       }
//       // The results of the filter are shown.
//       return tea.tea_type_id === type.id; // && filteredTypes.indexOf(tea.type) > -1
//     });
//   };
//
//     // Filter tea types with a button
//     // This function takes the hard coded ng-click from the search.html and runs it through. If the id is not in the filteredTypes array, the number is pushed into the filteredTypes array. If the number is already in the array, then it is spliced out, effectively creating a toggle.
//   $scope.toggleFilterType = function(id) {
//     if($scope.filteredTypes.indexOf(id) == -1 ) {
//
//     $scope.filteredTypes.push(id);
//   } else {
//     $scope.filteredTypes.splice($scope.filteredTypes.indexOf(id), 1);
//   }
//
//
// };


  // NgMap.getMap().then(function(map) {
  //
  //   });
})

.controller('teaTypesCtrl', function($scope, $http, $stateParams) {


  $scope.teaTypes = [];
  $http.get(`http://localhost:3000/teaTypes`)
    .then(function(data) {
      // console.log(data.data);
      $scope.teaTypes = data.data;
      console.log($scope.teaTypes[0].type);
      // console.log($scope.teaTypes.data);
  });


  //
  // $scope.getData();
//   $scope.teaTypes = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})

.controller('Searchctrl', function ($scope, $ionicModal, $http, $stateParams, $timeout) {
  //Getting the teaTypes for search list headers
  $scope.teaTypes = [];

  $http.get(`http://localhost:3000/teaTypes`)
    .then(function(data) {
      // console.log(data.data);
      $scope.teaTypes = data.data;
      console.log($scope.teaTypes);
      // console.log($scope.teaTypes.data);
  });

  //Getting specific teas for Search list proper
  $scope.teas = [];
  $scope.filteredTypes = [];
  $http.get(`http://localhost:3000/teas`)
    .then(function(data) {
      $scope.teas = data.data;
      console.log($scope.teas);
    });

    // Filter touches on each item in the object and returns only the ones which meet the criteria. "type" refers to the type created by the ng-repeat on in search.html
    // *Has some unwanted behavior due to what's in the array, fix after MVP
  $scope.getTeasByType = function(teas, type) {
    return teas.filter(function(tea) {
      // if the id exists in the array from the toggleFilterType function, then it is shown. If it is not in the array, the filter function returns "false" and the items are not shown.
      if($scope.filteredTypes.length && $scope.filteredTypes.indexOf(tea.tea_type_id) == -1) {
        return false;
      }
      // The results of the filter are shown.
      return tea.tea_type_id === type.id; // && filteredTypes.indexOf(tea.type) > -1
    });
  };

    // Filter tea types with a button
    // This function takes the hard coded ng-click from the search.html and runs it through. If the id is not in the filteredTypes array, the number is pushed into the filteredTypes array. If the number is already in the array, then it is spliced out, effectively creating a toggle.
  $scope.toggleFilterType = function(id) {
    if($scope.filteredTypes.indexOf(id) == -1 ) {

    $scope.filteredTypes.push(id);
  } else {
    $scope.filteredTypes.splice($scope.filteredTypes.indexOf(id), 1);
  }


};

//Ionic Modal for specific teas
$ionicModal.fromTemplateUrl('templates/teaDeckModal.html', {
  scope: $scope
}).then(function(modal) {
  $scope.modal = modal;
});

// Triggered in the login modal to close it
$scope.closeLogin = function() {
  $scope.modal.hide();
};

// Open the login modal
$scope.login = function() {
  $scope.modal.show();
};

// Perform the login action when the user submits the login form
$scope.doLogin = function() {
  console.log('Doing login', $scope.loginData);

  // Simulate a login delay. Remove this and replace with your login
  // code if using a login system
  $timeout(function() {
    $scope.closeLogin();
  }, 1000);
};



$scope.showTea = function(tea) {
  $scope.currentTea = tea;
  console.log('clicked');
  console.log($scope.currentTea);
  $scope.modal.show();
};



  console.log('this is the angular version', angular.version);


});
