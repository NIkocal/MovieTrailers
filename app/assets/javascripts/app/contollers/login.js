'use strict';

angular.module('popcornApp.controllers')
.controller('LoginController',
	function($scope, $location) {
		$scope.signup = {};
		$scope.login = {};

		$scope.submitSignup = function() {
			console.log($scope.signup)
		};

		$scope.submitLogin = function() {
			console.log($scope.login)
		};

	});

