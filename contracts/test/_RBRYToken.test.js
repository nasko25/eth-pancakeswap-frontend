// The name of the file is _RBRYToken.test.js in order to run it first.
// Otherwise the block numbers are incorrect.
const { assert } = require("chai");

const RBRYToken = artifacts.require('RBRYToken');

contract('RBRYToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async function() {
        this.raspberry = await RBRYToken.new({ from: minter });
    });


    it('mint', async function() {
        await this.raspberry.mint(alice, 1000, { from: minter });
        assert.equal((await this.raspberry.balanceOf(alice)).toString(), '1000');
    })
});
