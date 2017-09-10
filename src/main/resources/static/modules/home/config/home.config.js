angular.module('home').run(['Menus', function(Menus){
	
	// Adding items to the main menu 
	Menus.addMenuItem({
		menuItemId: 'mainMenuItem',
		title: 'Main Menu Item', 
		location: '/'
	});
	Menus.addMenuItem({
		menuItemId: 'LogMenuItem',
		title: 'Log event', 
		menuItemType: 'callback',
		callback: function($event){
			console.log($event);
		}
	});
	
	
	// Adding items to a new Menu
	Menus.addMenu({menuId: 'anotherMenu', title: 'Another Menu'});
	
	Menus.addMenuItem({
		menuId: 'anotherMenu',
		 menuItemId: 'exportFileMenuItem',
		 title: 'Export',
		 menuItemType: 'callback', 
		 callback: function($event){console.log($event);}, 
		 isPublic: false, 
		 roles: ['user'], 
		 position: 1
	});
	
	Menus.addMenuItem({
		menuId: 'anotherMenu',
		menuItemId: 'ExampleMenu',
		title: 'Example Menu', 
		menuItemType: 'dropdown',
		roles: ['ADMIN']
	});
	Menus.addMenuItem({
		menuId: 'anotherMenu',
		menuItemId: 'ExampleMenuItem',
		title: 'Example Item', 
		location: '/', 
	});
}]);