const Planet = artifacts.require('./Planet.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Planet', (accounts) => {
    let contract;
    before(async () =>{
        contract = await Planet.deployed()
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
            assert.equal(name, 'Planet')
        })
        it('symbol', async() =>{
            const symbol = await contract.symbol()
            assert.equal(symbol, 'PLT')
        })
    })
})