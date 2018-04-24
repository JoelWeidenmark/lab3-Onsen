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

});