app.directive('flashCard', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashcard/flashcard.html',
		scope: {
			card: '='
		} 	
	}
});

