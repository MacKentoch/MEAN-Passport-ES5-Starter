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
