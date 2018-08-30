app.controller('HomeCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});

app.controller('AboutCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});

app.controller('WorkCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});

app.controller('ContactCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});