##String to Milliseconds

Converts a string to the equivalent in milliseconds, useful for human readable delays with timeouts and intervals.
e.g. ``"2h30m" -> 9000000    "1 Hour 10 Minutes 5 seconds" -> 4205000``


###Usage

Use ``str.ms('string')`` where you would usually put your millisecond value.

e.g.

    setTimeout(
        function() {
            console.log('Hello!');
        }, 
        str.ms('1m20s')
    );
    

The following types can be handled all are case insensitive:
 - Day (day, days, d)
 - Hour (hour, hours, h)
 - Minute (minute, minutes, mins, min, m)
 - Second (second, seconds, secs, sec, s)
 
It only actually looks for one of the letters after a number (or space then letter), so you could measure your Days in Daves if you really wanted to.
 
Decimal points are handled, so you can specify ``0.5 Hours`` or ``.25mins``.
 
Doing it this way, means it can easily parse values like:

    str.ms('1 Day, 13 Hours, 15 Minutes and 17 seconds');
    --> 134117000
    
    str.ms('3h22m30s');
    --> 12150000
    
    str.ms('.5H.01m.1s');
    --> 1800700


###Install

The JavaScript file will work in both the Browser (ES5+) and Node.

####Browser
    <script src="str2ms.js"></script>

####Node
     var str = require('str2ms');
     
###Testing

Tested with Mocha and basic assert.
