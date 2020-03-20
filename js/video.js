$(document).ready(function(){
	const player = new Plyr('video', {
    
	});

	const vid = document.querySelector('video');
	const spans = document.querySelectorAll('p span');

	vid.addEventListener('timeupdate', (event) => {
  	let currentTime = vid.currentTime;
  	
  	for(let i = 0; i < spans.length; i += 1) {

  		if(currentTime > spans[i].dataset.start && currentTime < spans[i].dataset.end ) {
  			spans[i].style.color = '#ffad61';
  		} else {
  			spans[i].style.color = 'black';
  		}

  	}

	});

	for(let i = 0; i < spans.length; i += 1) {
		spans[i].addEventListener('click', (event) => {
			let start = spans[i].dataset.start;
			vid.currentTime = start;
		});
	}



});

