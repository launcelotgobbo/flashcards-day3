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
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();

});