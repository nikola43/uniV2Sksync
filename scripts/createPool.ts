
import { ethers } from "hardhat";



async function main() {


    const token0Address = "0x20b28B1e4665FFf290650586ad76E977EAb90c5D";
    const token1Address = "0x2D9F963ABFFB9F8e6B791F4071a5Dc23C744C263";
  

    // enconde function call to bytes
    const functionCall = ethers.utils.defaultAbiCoder.encode(
        ["address", "address"],
        [token0Address, token1Address]
    );

    // print function call
    console.log(functionCall);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});