angular.module('popcornApp.directives', [])
.directive('userPanel', function() {
	return {
		templateUrl: '/templates/user_panel.html',
		controller: function($scope, UserService){
			UserService.currentUser().then(function (user) {
				$scope.user = user;
			});

			$scope.logout = function () {
				UserService.logout().then(function() {
					$scope.currentUser = null;
				});
			};

		}
	};
});