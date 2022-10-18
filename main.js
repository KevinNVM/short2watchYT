const version = '0.1';

console.log(`Shorts To Watch Youtube v${version} \nMade With ❤️ By: Kevin\nFollow Me on httpsL://github.com/kevinnvm`)
window.addEventListener('keydown', ({
	key
}) => {
	if (key.toLowerCase() == '-'  /* <- Set Your Own Keybind */) {

    if (location.hostname !== 'www.youtube.com') {
      alert('Invalid Youtube HREF')
      return;
    }
    
		const arrayHref = location.pathname.split('/');

		if (arrayHref.length > 2) // mean shorts url
		{
			let key = arrayHref[2]
			location.replace(`https://youtube.com/watch?v=${key}`)
		} else {
			var url_string = location.href
			var url = new URL(url_string);
			let key = url.searchParams.get("v")


			location.replace(`https://youtube.com/shorts/${key}`)
		}


	}

})
