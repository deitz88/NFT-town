const Mask = artifacts.require('./Mask.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Mask', (accounts) => {
    let contract;
    before(async () =>{
        contract = await Mask.deployed()
    })
    describe('deployment', async() =>{
        it('deploys successfully', async()=>{
            const address = contract.address
            assert.notEqual(address, '')
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, null)
        })
        it('name', async() =>{
            const name = await contract.name()
            assert.equal(name, 'Mask')
        })
        it('symbol', async() =>{
            const symbol = await contract.symbol()
            assert.equal(symbol, 'QRT')
        })
    })
    describe('minting', async () => {
        it('created new token', async () => {
            const result = await contract.mint('billy')
            const totalSupply = await contract.totalSupply()
          //if successful
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 1, 'id is valid')
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from correct')
            assert.equal(event.to, accounts[0], 'to correct')

            //failure case
            await contract.mint('billy').should.be.rejected;
        })
    })

    describe('indexing', async () =>{
        it('lists masks', async() =>{
            //mint 4 more bois
            await contract.mint('Bob')
            await contract.mint('sam')
            await contract.mint('charlie')
            await contract.mint('px7764')
            const totalSupply = await contract.totalSupply()
            let mask
            let result = []

            for(let i=1; i <= totalSupply; i++ ){
                mask = await contract.masks(i - 1)
                result.push(mask)
            }

            let expected = ['billy','Bob','sam','charlie','px7764']
            assert.equal(result.join(','), expected.join(","))
        })
    })
})