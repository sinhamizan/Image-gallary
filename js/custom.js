var active = document.querySelector('.active img');
const imgs = document.querySelectorAll('.img_gallary img');

imgs.forEach(img => img.addEventListener('click', res));

function res(e){
	return active.src = e.target.src

}