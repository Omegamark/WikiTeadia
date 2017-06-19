angular.module('starter.controllers', [])

.service('searchToMapService', function() {
  var serve = {};
  console.log('hello from the service', serve);
  return serve;
})



.controller('AppCtrl', function($scope, $http, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Getting user information to check against the form.
  $scope.DBprofiles;
  $http.get(`http://localhost:3000/profiles`)
    .then(function(data) {
      console.log(data.data);
      $scope.DBprofiles = data.data;
      console.log($scope.DBprofiles);
    });





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
    console.log('this is window', window.location)
  // This redirects to the profile view. Works with both iOS and Android.
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    console.log('this is login data', $scope.loginData)
    // Check form data against database
    for(var i = 0; i < $scope.DBprofiles.length; i++) {
      if($scope.loginData.username === $scope.DBprofiles[i].username && $scope.loginData.password === $scope.DBprofiles[i].password) {
        //window.location.replace("http://10.6.81.62:8100/?ionicplatform=ios#/app/profile");
        $scope.closeLogin();

        return $state.go('app.profile')
      }
    }
        alert('Wrong Username or Password')


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //
    // }, 1000);
  };
})

.controller('mapCtrl', function($scope, $http, NgMap, searchToMapService, $stateParams) {

  $scope.teas = [];
  $scope.filteredTypes = [];

  $scope.teaData = searchToMapService.data;
  console.log('test 123', $scope.teaData);

  // This is working, but the data is not showing up!!!!!!!!!!!!!
    var check = function() {
      console.log('mapCtrl service variable', searchToMapService.data);
    };
    check();
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
})

.controller('profileCtrl', function($scope, $http, $stateParams) {

  console.log('profile sanity check');
  $scope.profiles = [];

  $http.get(`http://localhost:3000/profiles`)
    .then(function(data) {
      // console.log(data);
      $scope.profiles = data.data;
      console.log($scope.profiles);
    });
// Create and use a service from the login view to populate this with the data from the logged in user.
})

.controller('searchCtrl', function ($scope, $ionicModal, searchToMapService, $http, $stateParams, $timeout) {
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
  searchToMapService.data = tea;

  console.log(searchToMapService.data);
  $scope.modal.show();
};

  console.log('this is the angular version', angular.version);

});
