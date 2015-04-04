app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.chosenCategory = 'All';
	   $scope.loading = true;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
	        $scope.loading = false;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        $scope.loading = true;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.flashCards = cards;
            $scope.loading = false;
        });
    };

    $scope.getAllCards();
    $scope.loading = false;

});
