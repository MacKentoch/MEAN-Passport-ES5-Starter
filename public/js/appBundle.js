/**
 * application : app config
 */ 
 
;(function(){
	'use strict';
	
	angular
		.module('app.config',[]);
		//.config(configfct)


		//configfct.$inject = ['SOME_DEP'];
		//function configfct(SOME_DEP){
		// 	
		//}
})(); 
/* global WOW */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/**
 * application : root
 */ 
;(function(){
	'use strict';
	
	angular
		.module(	'app', 	
							[
								/*shared modules :*/
								'app.core',
								'app.config',
								/*app modules :*/
								'app.index.main.Controller',
								'app.login.main.Controller',
								'app.register.main.Controller',
								'app.home.main.Controller'					
							]
				); 

	/**
	 * document.ready - angular way
	 * -> init javascript/jquery here 
	 */
	angular
		.element(document)
		.ready(documentReady);
		
	function documentReady(){
		/**
		 * wow.js init
		 */
		new WOW().init(); 
	}

})(); 

/**
 * about view : main controller
 */
 ;(function(){
	'use strict';
	 
	angular
		.module('app.about.main.Controller', [])
		.controller('MainAboutController', MainAboutController);
		
		
		MainAboutController.$inject = [];		
		function MainAboutController(){
			
			/* jshint validthis: true */
			var MainAboutCtrl = this;
			
			MainAboutCtrl.isAnExample = true;
			
			
		}
		
		
 })();

/**
 * application : core modules
 */ 
;(function(){
	'use strict';
	
	angular
		.module(	'app.core', 	
							[						
								'duScroll',
								'ngAnimate',
								'toaster',
								'ngPasswordStrength',
								'validation.match',	
								'ui.bootstrap'
							]
				);

})(); 

/**
 * index view : main controller
 */
 ;(function(){
	 
	'use strict';
	 
	angular
		.module('app.home.main.Controller', [])
		.controller('HomeMainController', HomeMainController);
		
		
		HomeMainController.$inject = [];		
		function HomeMainController(){
			
			/* jshint validthis: true */
			var HomeMainCtrl = this;
			
			HomeMainCtrl.isAnExample = true;
			
			
		}
		
		
 })();

/**
 * index view : main controller
 */
 ;(function(){
	 
	'use strict';
	 
	angular
		.module('app.index.main.Controller', [])
		.controller('IndexMainController', IndexMainController);
		
		
		IndexMainController.$inject = [];		
		function IndexMainController(){
			
			/* jshint validthis: true */
			var IndexMainCtrl = this;
			
			IndexMainCtrl.isAnExample = true;
			
			
		}
		
		
 })();

/**
 * about login : main controller
 */
 ;(function(){
	'use strict';
	 
	angular
		.module('app.login.main.Controller', [])
		.controller('LoginMainController', LoginMainController);
		
		
		LoginMainController.$inject = ['$timeout', 'toaster'];		
		function LoginMainController($timeout, toaster){
			
			/* jshint validthis: true */
			var LoginMainCtrl = this;
			
			LoginMainCtrl.errorLogin = errorLogin;
			
			
			
			
			
			/**
			 * display a taoster message when login action failed
			 */
			function errorLogin(message){
				if (message) {
					if (message.length > 0) {	    		
						$timeout(function(){
							toaster.pop({
												type: 'error',
												title: 'Authentification failed...',
												body: 'Sorry, login and password are not recognized.',              
												showCloseButton: true
								});
						}, 10);
					}    		
				}
    	}
			
			
		}
		
		
 })();

/**
 * register view : main controller
 */
 ;(function(){
	'use strict';
	 
	angular
		.module('app.register.main.Controller', [])
		.controller('RegisterMainController', RegisterMainController);
		
		
		RegisterMainController.$inject = ['toaster'];		
		function RegisterMainController(toaster){
			
			/* jshint validthis: true */
			var RegisterMainCtrl = this;
			
			RegisterMainCtrl.hello = 'hello';
			
			
		}
		
		
 })();
