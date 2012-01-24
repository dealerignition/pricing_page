$(function() {
	$("#check1").button();
	$("#check2").button();
	$("#check3").button();
	$("#check4").button();
	$("#check5").button();
	$("#check6").button();
	$("#check7").button();
	$("#check8").button();
    $("#radio").buttonset();

    $("#slider-range-min").slider({
        range: "min",
        value: 100,
        min: 0,
        max: 2000,
        step: 50,

        change: function() { updatePrice(); },
        slide: function(event, ui) {
            updatePrice();
            $("#amount").val(ui.value + " dealers");
        }
    });

    $("#radio input").change( function() { updatePrice(); } );

    $("#amount").val( $("#slider-range-min").slider("value")  + " dealers");
});

//$ in cents
//6% discount per 50 dealers
function getPrice(base, nDealers) {
    var price = base * Math.pow(0.94, nDealers / 50 - 1);
    return Number((price / 100).toFixed(2));
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function updatePrice() {
    var radioButton = $('#radio .ui-state-active').attr('for');
    var dealerNumber = Number($('#slider-range-min').slider('value'));

    var matchPlan        = 3723;
    var lighterPlan      = 5319;
    var flamethrowerPlan = 9574;

    matchPlan = getPrice(matchPlan, dealerNumber);
    lighterPlan = getPrice(lighterPlan, dealerNumber);
    flamethrowerPlan = getPrice(flamethrowerPlan, dealerNumber);

    $('#match_plan').html(matchPlan.toFixed(2));
    $('#lighter_plan').html(lighterPlan.toFixed(2));
    $('#flamethrower_plan').html(flamethrowerPlan.toFixed(2));

    switch (radioButton) {
        case 'match':
            var price = dealerNumber * matchPlan;
            price = "$" + addCommas(price.toFixed(2));
            break;
        case 'lighter':
            var price = dealerNumber * lighterPlan;
            price = "$" + addCommas(price.toFixed(2));
            break;
        case 'flamethrower':
            var price = dealerNumber * flamethrowerPlan;
            price = "$" + addCommas(price.toFixed(2));
            break;
        case 'blowtorch':
        default:
            var price = 'Call us!';
            break;
    }

    $('#search_price').html(price);
    $('#match_plan_name').html(radioButton);
}
