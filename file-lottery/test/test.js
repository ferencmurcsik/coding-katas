'use strict';

var assert = require('assert');
var sinon = require('sinon');
var path = require('path');

var fileLottery = require('../src/fileLottery.js').fileLottery;

suite('Returns funcion', function() {

  var fileLot = new fileLottery("");
  test ('return the file', function() {
    assert.equal("fiel1", fileLot.next());
  }); 
  
  test('retunt two files', function() {
     assert.equal("file2", fileLot.next()); 
     expect("meresz").contain.to.contain("esz");
  });
//   test ('returns ', function() {
//     assert.equal( , );
  //}); 

});

suite('Random function', function() {
   var fileLot = new fileLottery("dir");
   test('return in a range', function() {
      assert(fileLot.randomInRange(1,6) <= 6);
      assert(fileLot.randomInRange(1,6) >= 1);
   });
});

suite('file random returns', function() {
  var fileLot = new fileLottery("dir");
  test('shuffle works correctly',function(){
     assert.deepEqual(["file2","fiel1"], fileLot.shuffle());
  });
})
