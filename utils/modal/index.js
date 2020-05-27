const $ = (id) => document.getElementById(id);

// Open Modal
$('openModal').addEventListener('click', () => {
	$('modal').style.display = 'block';
	document.body.style.overflow = 'hidden';
});

// Close Modal
$('close').addEventListener('click', () => {
	$('modal').style.display = 'none';
	document.body.style.overflow = '';
});
