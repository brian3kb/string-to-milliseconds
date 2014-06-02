/**
* String to Milliseconds.
* Author: Brian Barnett, brian@3kb.co.uk, http://brianbar.net/ || http://3kb.co.uk/
* Date: 2014-06-02
**/
!function(t){"use strict";function e(t){return t=t||"",t.toLowerCase().match(/((\d+|)\.\d+|\d+)( [smhd]|[smhd])/g)||[]}function n(t){var e=0;return t.forEach(function(t){-1!==t.indexOf("d")&&(e+=864e5*+t.split("d")[0]),-1!==t.indexOf("h")&&(e+=36e5*+t.split("h")[0]),-1!==t.indexOf("m")&&(e+=6e4*+t.split("m")[0]),-1!==t.indexOf("s")&&(e+=1e3*+t.split("s")[0])}),e}t.ms=function(t){return n(e(t))}}("undefined"==typeof exports?this.str={}:exports);