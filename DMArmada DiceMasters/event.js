if ($('#venue_1').text() != docData['venue_1'] ||
    $('#event_1').text() != docData['event_1'] )
{
    $('body')
        .queue(elemHide('.event')).delay(1000)
        .queue(elemUpdate()).delay(1000)
        .queue(elemShow('.event'));
}

if ($('#timer_1').text() != docData['timer_1'] &&
    (docData['timer_1'] == false) )
{
    $('body')
        .queue(elemHide('.timer')).delay(1000)
        .queue(elemUpdate());
}

if ($('#timer_1').text() != docData['timer_1'] &&
    (docData['timer_1'] == true) )
{
    startTimer(parseInt(docData['timelimit_1']), timer_1);
    $('body')
        .queue(elemUpdate()).delay(1000)
        .queue(elemShow('.timer')); 
}

function startTimer(duration, display) {
    var timer = duration*60;
    var minutes, seconds;
    nInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		if (timer == 0) 
		{
            clearInterval(nInterval);
        }
        --timer;
	}, 1000);
}