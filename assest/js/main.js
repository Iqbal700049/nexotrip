
//*datepicker*//

$( function() {
	$( "#datepicker" ).datepicker({ minDate: -20, maxDate: "+1M +10D" });
} );

$( function() {
	var dateFormat = "mm/dd/yy",
	from = $( "#from" )
	.datepicker({
		defaultDate: "+1w",
		minDate: -20, 
		maxDate: "+12M +10D",
		changeMonth: false,
		numberOfMonths: 2
	})
	.on( "change", function() {
		to.datepicker( "option", "minDate", getDate( this ) );
	}),
	to = $( "#to" ).datepicker({
		defaultDate: "+1w",
		minDate: -20, 
		maxDate: "+12M +10D",
		changeMonth: false,
		numberOfMonths: 2
	})
	.on( "change", function() {
		from.datepicker( "option", "maxDate", getDate( this ) );
	});
	
	function getDate( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}
		
		return date;
	}
} );


//*slider*//

$('.carousel').carousel({
	interval: 2000
})