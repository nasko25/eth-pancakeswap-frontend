const { assert } = require("chai");

const CakeToken = artifacts.require('CakeToken');

contract('CakeToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async function() {
        this.cake = await CakeToken.new({ from: minter });
    });


    it('mint', async function() {
        await this.cake.mint(alice, 1000, { from: minter });
        assert.equal((await this.cake.balanceOf(alice)).toString(), '1000');
    })
});
