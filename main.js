const popUpBtn = document.getElementById('pop-up');
const popUpMsg = document.getElementById('pop-up-message');
const closeBtn = document.getElementById('close');

popUpBtn.addEventListener('click', function() {
	popUpMsg.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
	popUpMsg.style.display = 'none';
});
