$(document).ready(function() {
	
	// function animateAgain() {
	// 	$('#hello').animate({
	// 		marginTop: '50px',
	// 		marginLeft: '400px'
	// 	}, 1000)
	// }

	// $('#hello').click(function() {
	// 	$(this).animate({
	// 		fontSize: '40px',
	// 		opacity: '0.5',
	// 		padding: '100px 0'
	// 	}, "slow");
	// });

	$('#doSomething').click(function() {
		$('#hello').slideToggle();
	});

});