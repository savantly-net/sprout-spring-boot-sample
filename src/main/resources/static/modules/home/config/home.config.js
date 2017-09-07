angular.module('home').run(['Menus', function(Menus){
	
	// Adding items to the main menu 
	Menus.addMenuItem({
		menuItemId: 'mainMenuItem',
		title: 'Main Menu Item', 
		location: '/'
	});
	
	
	// Adding items to a new Menu
	var anotherMenu = Menus.addMenuItem({
		menuItemId: 'ExampleMenu',
		title: 'Example Menu', 
		menuItemType: 'dropdown',
		roles: ['ADMIN']
	});
	anotherMenu.addMenuItem({
		menuItemId: 'ExampleMenuItem',
		title: 'Example Item', 
		location: '/', 
	});
	anotherMenu.addMenuItem({
		menuItemId: 'AnotherExample',
		title: 'Another', 
		callback: function(){
			alert('You clicked it');
		}
	});
}]);