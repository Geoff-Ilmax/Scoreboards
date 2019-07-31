let c1 = docData['players_1'].split('||');
let c2 = docData['players_2'].split('||');
docData['players_1'] = c1[0];
docData['players_2'] = c2[0];
$('#c1 .flag').removeClass().addClass('flag '+c1[1]);
$('#c2 .flag').removeClass().addClass('flag '+c2[1]);

if ($('#players_1').text() != docData['players_1'] ||
    $('#players_2').text() != docData['players_2'] ||
    $('#round_1').text() != docData['round_1'] )
{
    $('body')
        .queue(elemHide('.scores'))
		.queue(elemHide('.wins'))
		.queue(elemHide('.countries'))
        .queue(elemHide('.players'))
		.queue(elemHide('.round'))
        .queue(elemUpdate()).delay(1000)
		.queue(elemShow('.round'))
        .queue(elemShow('.players'))
		.queue(elemShow('.countries')).delay(1000)
		.queue(elemShow('.wins'))
        .queue(elemShow('.scores'));
}
else if ($('#players_1s').text() != docData['players_1s'] ||
    $('#players_2s').text() != docData['players_2s'] )
{
    $('body')
        .queue(elemHide('.scores')).delay(250)
        .queue(elemUpdate()).delay(250)
        .queue(elemShow('.scores'));
}
else if ($('#wins_1s').text() != docData['wins_1s'] ||
	$('#wins_2s').text() != docData['wins_2s'] )
{
    $('body')
		.queue(elemHide('.wins')).delay(1000)
        .queue(elemUpdate()).delay(1000)
		.queue(elemShow('.wins'));
}