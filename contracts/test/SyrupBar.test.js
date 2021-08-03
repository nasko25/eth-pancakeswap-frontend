const { advanceBlockTo } = require('@openzeppelin/test-helpers/src/time');
const { assert } = require('chai');
const RBRYToken = artifacts.require('RBRYToken');
const SyrupBar = artifacts.require('SyrupBar');

contract('SyrupBar', ([alice, bob, carol, dev, minter]) => {
  beforeEach(async function() {
    this.raspberry = await RBRYToken.new({ from: minter });
    this.syrup = await SyrupBar.new(this.raspberry.address, { from: minter });
  });

  it('mint', async function () {
    await this.syrup.mint(alice, 1000, { from: minter });
    assert.equal((await this.syrup.balanceOf(alice)).toString(), '1000');
  });

  it('burn', async function () {
    await advanceBlockTo('650');
    await this.syrup.mint(alice, 1000, { from: minter });
    await this.syrup.mint(bob, 1000, { from: minter });
    assert.equal((await this.syrup.totalSupply()).toString(), '2000');
    await this.syrup.burn(alice, 200, { from: minter });

    assert.equal((await this.syrup.balanceOf(alice)).toString(), '800');
    assert.equal((await this.syrup.totalSupply()).toString(), '1800');
  });

  it('safeRBRYTransfer', async function () {
    assert.equal(
      (await this.raspberry.balanceOf(this.syrup.address)).toString(),
      '0'
    );
    await this.raspberry.mint(this.syrup.address, 1000, { from: minter });
    await this.syrup.safeRBRYTransfer(bob, 200, { from: minter });
    assert.equal((await this.raspberry.balanceOf(bob)).toString(), '200');
    assert.equal(
      (await this.raspberry.balanceOf(this.syrup.address)).toString(),
      '800'
    );
    await this.syrup.safeRBRYTransfer(bob, 2000, { from: minter });
    assert.equal((await this.raspberry.balanceOf(bob)).toString(), '1000');
  });
});
