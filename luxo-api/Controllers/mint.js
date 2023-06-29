const { Web3 } = require("web3");
const { ABI, ADDRESS } = require("../data/contract");

// Mumbai Testnet RPC Change to Mainnet RPC when deploying to production
const RPC = "https://rpc-mumbai.maticvigil.com";
// IPFS link to metadata.json file for NFT (change to your own IPFS link) this is just for testing
const IPFS =
  "https://ipfs.io/ipfs/bafybeigfzj3fgq6zsseeglancahlzveouccjqqx6munzvfqdlpmbq3m5na/metadata.json";

/*
    BalanceCheck: Checks if a user has already minted this NFT
    @params: wallet address
    @returns: balance of NFT
    @dev: If balance is greater than 0, user has already minted this NFT and should not be allowed to mint again 
*/
const BalanceCheck = async (req, res) => {
  try {
    const { wallet } = req.params;
    if (!wallet) {
      return res
        .status(400)
        .json({ message: "Please provide a wallet address" });
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC));
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    let balance = await contract.methods.balanceOf(wallet).call();
    // parse BigNumber to Integer
    balance = parseInt(balance);
    console.log(parseInt(balance));
    if (balance > 0) {
      return res.status(200).json({
        status: 200,
        message: "User has already minted this NFT",
        balance: balance,
      });
    }
    return res.status(200).json({
      status: 200,
      message: "User has not minted this NFT yet",
      balance: balance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

/* 
    Mint: Mints an NFT for a user
    @params: wallet address
    @returns: transaction hash
    @dev: If user has already minted this NFT, they should not be allowed to mint again
    Add the gas wallet address and private key to the .env file
*/
const Mint = async (req, res) => {
  try {
    const { wallet } = req.body;
    // Check if wallet address and gas wallet address, private key are provided
    if (!wallet) {
      return res
        .status(400)
        .json({ message: "Please provide a wallet address" });
    }
    if (!process.env.GAS_WALLET || !process.env.GAS_WALLET_PRIVATE_KEY) {
      return res
        .status(400)
        .json({
          message: "Please provide a gas wallet address and private key",
        });
    }
    // Initialize web3 and contract
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC));
    const contract = new web3.eth.Contract(ABI, ADDRESS);

    // Check if user has already minted this NFT
    // const balance = await contract.methods.balanceOf(wallet).call();
    // if(balance > 0) {return res.status(400).json({message: "User has already minted this NFT"})}

    // Get nonce, gas price and gas estimate
    const nonce = await web3.eth.getTransactionCount(process.env.GAS_WALLET);
    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await contract.methods
      .mint(wallet, IPFS)
      .estimateGas({ from: process.env.GAS_WALLET });
    // construct transaction data
    const txData = {
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasEstimate,
      to: ADDRESS,
      data: contract.methods.mint(wallet, IPFS).encodeABI(),
    };

    try {
      // Send transaction to blockchain
      const signedTx = await web3.eth.accounts.signTransaction(
        txData,
        process.env.GAS_WALLET_PRIVATE_KEY
      );
      const response = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );
      if (response) {
        // @dev - If transaction is successful, return transaction hash and store the status of the transaction in the database
        return res.status(200).json({
          status: 200,
          message: "NFT Minted",
          tx: response.transactionHash,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        status: 400,
        message: error.message || "Error minting NFT",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = { BalanceCheck, Mint };
