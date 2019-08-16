if ($('#venue_1').text() != docData['venue_1'] ||
    $('#event_1').text() != docData['event_1'] )
{
    $('body')
        .queue(elemHide('.event')).delay(1000)
        .queue(elemUpdate()).delay(1000)
        .queue(elemShow('.event'));
}

var timer_int = null;

if (docData['timer_1'] == true)
{
	var timer_cnt = parseInt(docData['timelimit_1']) * 60;
	
	updateTimer(timer_cnt);
    $('body').queue(elemShow('.timer'));
	
	this.timer_int = setInterval(function ()
	{
        timer_cnt--;
		updateTimer(timer_cnt);
	}, 1000);
}

if (docData['timer_1'] == false)
{
    clearInterval(this.timer_int);
    $('body').queue(elemHide('.timer'));
}

function updateTimer(counter)
{
	let minutes = Math.floor(counter / 60).toString(),
		seconds = (counter % 60).toString();
		
    $('#countdown').text(minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0'));
}
