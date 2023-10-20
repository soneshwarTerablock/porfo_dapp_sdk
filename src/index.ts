export class Porfo {
    static connect (walletAddress: string){
        console.log(`${walletAddress} connected!`)
    }

    static getBalance (msg: string){
        console.log(`${msg} balance is 100PFT`);
    }
}