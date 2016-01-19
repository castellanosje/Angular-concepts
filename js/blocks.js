(function(){
	var app = angular.module('template-blocks', []);
	app.directive('topBlock', function(){  
		return {
			restrict: 'E',
			templateUrl: 'blocks/menu-header.html',
			controller:function(){ 
					this.menu = elements.menu;
					this.items = this.menu.items;
					this.brands = elements.brands;
			} ,
			controllerAs:'head'
		};
	});

	app.directive('sliderBlock', function(){
		return{
			restrict: 'E',
			templateUrl: 'blocks/carousel.html',
			controller:function(){
				this.carousel =  elements.carousel;
			},
			controllerAs:'carouselCtrl'

		};
	});

	app.directive('mainContent', function(){
		return{
			restrict: 'E',
			templateUrl: 'blocks/articles.html',
			controller:function(){
				this.articles = elements.articles;
			},
			controllerAs:'articlesCtrl'

		};
	});

	app.directive('footerBlock',function(){
		return{
			restrict: 'E',
			templateUrl: 'blocks/footer.html',
			controller:function(){
				this.element = elements.footer;
			},
			controllerAs:'footerCtrl'

		};

	});

})();