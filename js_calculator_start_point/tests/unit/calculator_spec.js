var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers',function(){
    calculator.numberClick(7);
    calculator.operatorClick("+");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal,8);
  })

  it('should be able to takeaway numbers',function(){
    calculator.numberClick(10);
    calculator.operatorClick("-");
    calculator.numberClick(10);
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal,0);
  })

  it('should be able to multiply numbers',function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.operatorClick(2);
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal,4);
  })

  it('should be able to divide numbers',function(){
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal,2);
  })

  it('calculator has number click',function(){
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal,4);
  })

  it('calculator has operator click',function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    assert.equal(calculator.runningTotal,4);
  })

  it('calculator has operator clear click',function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.clearClick();
    assert.equal(calculator.runningTotal,0);
  })

});
