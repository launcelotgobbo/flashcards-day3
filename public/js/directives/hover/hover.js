app.directive('borderOnHover',function(){
	
	function link(scope, element, attrs){
		element.on('mouseenter', function(){
			element.addClass('twoPixelBorder')
		});
		
		element.on('mouseleave', function() {
			element.removeClass('twoPixelBorder')
		});
	}

	return{
		restrict: 'A',
		link: link
	}
});