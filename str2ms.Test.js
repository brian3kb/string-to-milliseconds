var assert = require('assert');
var str = require('./str2ms');

describe('String to Milliseconds', function() {

    it('should output correct millisecond value for specified (second) strings', function() {
        assert.equal(str.ms('1s'), 1000);
        assert.equal(str.ms('1second'), 1000);
        assert.equal(str.ms('1 second'), 1000);
        assert.equal(str.ms('1 Second'), 1000);
    });
    
    it('should output correct millisecond value for specified (minute) strings', function() {
        assert.equal(str.ms('1m'), 60000);
        assert.equal(str.ms('1minute'), 60000);
        assert.equal(str.ms('1 minute'), 60000);
        assert.equal(str.ms('1 Minute'), 60000);
    });  
    
    it('should output correct millisecond value for specified (hour) strings', function() {
        assert.equal(str.ms('1h'), 3600000);
        assert.equal(str.ms('1hour'), 3600000);
        assert.equal(str.ms('1 hour'), 3600000);
        assert.equal(str.ms('1 Hour'), 3600000);
    });  
    
    it('should output correct millisecond value for specified (day) strings', function() {
        assert.equal(str.ms('1d'), 86400000);
        assert.equal(str.ms('1day'), 86400000);
        assert.equal(str.ms('1 day'), 86400000);
        assert.equal(str.ms('1 Day'), 86400000);
    });    
    
    it('should handle decimal point values', function() {
        assert.equal(str.ms('0.5 Hours'), 1800000);
        assert.equal(str.ms('.25 mins'), 15000);
        assert.equal(str.ms('.1s'), 100);
        assert.equal(str.ms('12.565s'), 12565);
    });    
    
    it('should handle multiple types in a single string', function() {
        assert.equal(str.ms('2 Hours, 45 Minutes'), 9900000);
        assert.equal(str.ms('3m15s'), 195000);
        assert.equal(str.ms('1min 25secs'), 85000);
        assert.equal(str.ms('3 Days, 1 Hour and 15m2s'), 263702000);
    });    
    
    it('should handle empty strings and null values as 0', function() {
        assert.equal(str.ms(''), 0);
        assert.equal(str.ms(), 0);
    });  
    
    it('should kep calm and know where its towel is', function() {
        assert.equal(str.ms('00.0...10.112s'), 10112);
        assert.equal(str.ms('00.00.42s'), 420);
    });     
    
});