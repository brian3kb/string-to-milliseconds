/**
* String to Milliseconds.
* Author: Brian Barnett, brian@3kb.co.uk, http://brianbar.net/ || http://3kb.co.uk/
* Date: 2014-06-02
**/
(function(exports) {
    'use strict';

    /**
     * Returns array of strings that match the regex which checks for (h)our, (m)inutes & (s)econds - case insensitive & will accept a single space between the number & the time measurement. Will also allow decimal values (0.5, 0.25 etc). Will return an empty array if no matches (which will result in a 0 second value as the delay.).
     * @param  {String} str [ e.g. '2h30m', '1 Hour, 25 Minutes', '0.5h 20sec' ]
     * @return {Array}     [ e.g ['2h', '30m'] ]
     */
    function _getMatches(str) {
        str = str || '';
        return str.toLowerCase().match(/((\d+|)\.\d+|\d+)( [smhd]|[smhd])/g) || [];
    }

    /**
     * Takes the arary from the _getMatches function and converts the h,m,s value to its equivalent value in milliseconds, the total value is returned as the delay to use.
     * @param  {[Array]} matches [Array as returned from the _getMatches function]
     * @return {[Number]}         [Output of the total in milliseconds]
     */
    function _getDelay(matches) {
        var delay = 0;
        matches.forEach(function(i) {
            if (i.indexOf('d') !== -1) {
                delay += +i.split('d')[0] * 864e5;
            }            
            if (i.indexOf('h') !== -1) {
                delay += +i.split('h')[0] * 36e5;
            }
            if (i.indexOf('m') !== -1) {
                delay += +i.split('m')[0] * 6e4;
            }
            if (i.indexOf('s') !== -1) {
                delay += +i.split('s')[0] * 1e3;
            }  
        });

        return delay; //in milliseconds
    }

    exports.ms = function(str) {
        return _getDelay(_getMatches(str));
    };

})(typeof exports === 'undefined' ? this['str'] = {} : exports);