/* global console */
'use strict';
const resolveUrl = require('../index');
// This file is just a helper so I could write the tests faster
// and still have good logging.
module.exports = class TestCase {
 constructor (base, relative, expectedResult) {
   this.base = base;
   this.relative = relative;
   this.expectedResult = expectedResult;
   this.actualResult = null;
 }
 result () {
   this.actualResult = resolveUrl(this.base, this.relative);
   if (this.expectedResult !== this.actualResult) {
     console.log('\nTestCase failure: ');
     console.log('Base: ', this.base);
     console.log('Relative: ', this.relative);
     console.log('Expected Result: ', this.expectedResult);
     console.log('Actual Result: ', this.actualResult);
     console.log();
     return false;
   }
   return true;
 }
};
