(function(angular) {
  'use strict';
angular.module('ngMessagesExample', ['ngMessages'])
	.controller('EmailController', ['$scope', function($scope) {
      $scope.email = {
        text: 'me@example.com'
      };
    }]);
})(window.angular);

