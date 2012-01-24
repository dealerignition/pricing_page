$(function() {
	$( "#check1" ).button();
	$( "#check2" ).button();
	$( "#check3" ).button();
	$( "#check4" ).button();
	$( "#check5" ).button();
	$( "#check6" ).button();
	$( "#check7" ).button();
	$( "#check8" ).button();
});

// SLIDER OPTIONS
	$(function() {
		$( "#slider-range-min" ).slider({
			range: "min",
			value: 250,
			min: 0,
			max: 2000,
			step: 50,
			change: function(event, ui) {
  			var price = 0;
  			var product_url = "";
  			var dealer_id = jQuery("input#dealer_id").attr('value');
  			var manufacturer_reimbursement = jQuery("input#manufacturer_reimbursement").attr('value');
  			switch(ui.value) {
  				case '50':
  				case 50:
  				 dealers = 50;
  				break;
  				case '100':
  				case 100:
  				 dealers = 100;
  				break;
  				case '150':
  				case 150:
  				 dealers = 150;
  				break;
  				case '200':
  				case 200:
  				 dealers = 200;
  				break;
  				case '250':
  				case 250:
  				 dealers = 250;
  				break;
  				case '300':
  				case 300:
  				 dealers = 300;
  				break;
  				case '350':
  				case 350:
  				 dealers = 350;
  				break;
  				case '400':
  				case 400:
  				 dealers = 400;
  				break;
  				case '450':
  				case 450:
  				 dealers = 450;
  				break;
  				case '500':
  				case 500:
  				 dealers = 500;
  				break;
  				case '550':
  				case 550:
  				 dealers = 550;
  				break;
  				case '600':
  				case 600:
  				 dealers = 600;
  				break;
  				case '650':
  				case 650:
  				 dealers = 650;
  				break;
  				case '700':
  				case 700:
  				 dealers = 700;
  				break;
  				case '750':
  				case 750:
  				 dealers = 750;
  				break;
  				case '800':
  				case 800:
  				 dealers = 800;
  				break;
  				case '850':
  				case 850:
  				 dealers = 850;
  				break;
  				case '900':
  				case 900:
  				 dealers = 900;
  				break;
  				case '950':
  				case 950:
  				 dealers = 950;
  				break;
  				case '1000':
  				case 1000:
  				 dealers = 1000;
  				break;
  				case '1050':
  				case 1050:
  				 dealers = 1050;
  				break;
  				case '1100':
  				case 1100:
  				 dealers = 1100;
  				break;
  				case '1150':
  				case 1150:
  				 dealers = 1150;
  				break;
  				case '1200':
  				case 1200:
  				 dealers = 1200;
  				break;
  				case '1250':
  				case 1250:
  				 dealers = 1250;
  				break;
  				case '1300':
  				case 1300:
  				 dealers = 1300;
  				break;
  				case '1350':
  				case 1350:
  				 dealers = 1350;
  				break;
  				case '1400':
  				case 1400:
  				 dealers = 1400;
  				break;
  				case '1450':
  				case 1450:
  				 dealers = 1450;
  				break;
  				case '1500':
  				case 1500:
  				 dealers = 1500;
  				break;
  				case '1550':
  				case 1550:
  				 dealers = 1550;
  				break;
  				case '1600':
  				case 1600:
  				 dealers = 1600;
  				break;
  				case '1650':
  				case 1650:
  				 dealers = 1650;
  				break;
  				case '1700':
  				case 1700:
  				 dealers = 1700;
  				break;
  				case '1750':
  				case 1750:
  				 dealers = 1750;
  				break;
  				case '1800':
  				case 1800:
  				 dealers = 1800;
  				break;
  				case '1850':
  				case 1850:
  				 dealers = 1850;
  				break;
  				case '1900':
  				case 1900:
  				 dealers = 1900;
  				break;
  				case '1950':
  				case 1950:
  				 dealers = 1950;
  				break;
  				case '2000':
  				case 2000:
  				 dealers = 2000;
  				break;
  			}
  			var originDealers = Math.ceil(dealers);
  			var dealerNumber = (dealers).toFixed(0);
  			                                //$ in cents 
  			                                //6% discount per 50 dealers
    		        var originalNumber =    (originDealers * (parseFloat(1)));
    		        var matchPlan =         (1750 / dealerNumber).toFixed(2);
    		        var lighterPlan =       (2500 / dealerNumber).toFixed(2);
    		        var flamethrowerPlan =  (4500 / dealerNumber).toFixed(2);
    		        var blowtorchPlan =     (6500 / dealerNumber).toFixed(2);
  			jQuery('#search_price').html(originalNumber);
  			jQuery('#match_plan').html(matchPlan);
  			jQuery('#lighter_plan').html(lighterPlan);
  			jQuery('#flamethrower_plan').html(flamethrowerPlan);
  			jQuery('#blowtorch_plan').html(blowtorchPlan);
  		},

			slide: function( event, ui ) {
				$( "#amount" ).val(ui.value + " dealers" );
			}
		});
		$( "#amount" ).val( $( "#slider-range-min" ).slider( "value" )  + " dealers" );
	});

// PLAN OPTIONS (RADIO)
$(function() {
	$( "#radio" ).buttonset();
	  var plan = jQuery("input#radio1").attr('value');
	  switch(ui.value) {
	  	case 'match':
	  	case match:
	  	 plan = 'Match';
	  	break;
	  	case '100':
	  	case 100:
	  	 dealers = 100;
	  	break;
	  	case '150':
	  	case 150:
	  	 dealers = 150;
	  	break;
	  	case '200':
	  	case 200:
	  	 dealers = 200;
	  	break;
	}
	var set_plan = Math.ceil(plan);
	jQuery('#match_plan_name').html(set_plan);
});

// OPTIONS OPTIONS (CHECKBOXES)






