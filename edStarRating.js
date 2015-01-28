/**
 * Takes a value e.g. 3.5 and converts it in to
 * a set of star elements, including half values
 * @return mixed
 */
$.fn.edStarRating = function(){
	'use strict';

	return this.each(function(){
		var container = $(this);
		var amount = container.data('amount').toString();
		var split = amount.split('.');
		var full_stars_amount = split[0];

		// Loop through full star value (3.5 = 3)
		for(var i=1; i <= full_stars_amount; i++){
			$('<div/>', {
				'class': 'star'
			}).appendTo(container);

			if(i == 5){
				break;
			}
		}

		if(split[1] && full_stars_amount < 5){

			// Takes the decimal, e.g.  .6 and rounds it to the nearest .5
			var half_stars_amount = Math.round(Number('.' + split[1]) * 2) / 2;
			var classes = (half_stars_amount == 0.5) ? 'star half' : 'star';

			if(half_stars_amount > 0){
				$('<div/>', {
					'class': classes
				}).appendTo(container);
			}
		}
	});
};
