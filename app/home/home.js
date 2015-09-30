'use strict'

angular.module( 'myApp.home', ['ngRoute', 'firebase'] )

// Declared route
.config( ['$routeProvider', function( $routeProvider )
{
	$routeProvider.when( '/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller( 'HomeCtrl', ['$scope', '$firebaseSimpleLogin', function( $scope, $firebaseSimpleLogin )
{
	var firebaseObj = new Firebase( 'https://amber-heat-1868.firebaseapp.com' );
	var loginObj    = $firebaseSimpleLogin( firebaseObj );

	$scope.user = {};
	$scope.SignIn = function( e )
	{
		e.preventDefault();
		var username = $scope.user.email;
		var password = $scope.user.password;

		// Auth logic will be here
		loginObj.$login( 'password',
		{
			email    : username,
			password : password
		})
		.then( function( user ) {
            console.log('Authentication successful');
        }, function( error ) {
            console.log('Authentication failure');
        });
	}

}]);