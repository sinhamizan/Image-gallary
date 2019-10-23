const active = document.querySelector('.active img');
const imgs = document.querySelectorAll('.img_gallary img');

const opacity = 0.5;

imgs[1].style.opacity = opacity

imgs.forEach(img => img.addEventListener('click', function(e){
	imgs.forEach(img =>(img.style.opacity= 1))
	active.src = e.target.src
	e.target.style.opacity = opacity

	active.classList.add('fade')

	setTimeout(function(){
		active.classList.remove('fade')
	},2000)


}));
