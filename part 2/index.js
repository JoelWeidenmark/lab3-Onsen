/*
document.addEventListener('init', function(event){
	var page = event.target;

	if(page.id === 'frontPage'){
		page.querySelector('#donkeyButton').onclick = function(){
			document.querySelector("#myNav").pushPage('donkey.html', {data: {title: 'Strange Horse'}});
		};

		page.querySelector('#moodelButton').onclick = function(){
			document.querySelector("#myNav").pushPage('moodel.html', {data: {title: 'Moodel'}});
		};

		page.querySelector('#aboutButton').onclick = function(){
			document.querySelector("#myNav").pushPage('about.html', {data: {title: 'About'}});
		};
	}
	else if(page.id === "about" || page.id === "donkey" || page.id === "moodel"){
		page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
	}

});*/

/*
document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});*/



window.fn = {};

window.fn.open = function() {
	console.log('Tomat');
	  var menu = document.getElementById('menu');
	  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};





function showDialogFunc() {
	var dialog = document.getElementById('obsDialog');

	if (dialog) {
    dialog.show();
  	} 
  	else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
    //document.getElementById("obsDialog").show();
};

function hideDialogFunc() {
    document.getElementById("obsDialog").hide();
};
/*
document
  .getElementById('dialog-1')
  .show();*/