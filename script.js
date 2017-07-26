//Google Login
function onLoadFunction()
{
	gapi.client.setApiKey('AIzaSyBpTsB4BOEdpMOE2Z4h5sywFpkjPlIulTg');
}

var myApp = angular.module("myApp", []);
myApp.controller('myController', ['$scope', function($scope){
	$scope.gmail = {
		username: "", 
		email: ""
	};
	$scope.onGoogleLogin = function(){
		gapi.client.load('plus', 'v1', function(){});
		var params = {
			'clientid': '644842807576-b9cm978ph65hs9kbu1cinvfg3a910gaq.apps.googleusercontent.com',
			'cookiepolicy': 'single_host_origin',
			'callback': function(result){
				if(result['status']['signed_in']) {
					var request = gapi.client.plus.people.get({'userId': 'me'});
					request.execute(function(resp)
					{
						$scope.$apply(function(){
							$scope.gmail.username = resp.displayName;
							$scope.gmail.email = resp.emails[0].value;
							$scope.gmail.image = resp.image.url;
						});
					});
				}
			},
			'approvalprompt': 'force',
			'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read '
		};
		
		gapi.auth.signIn(params);
	}
	
}]);