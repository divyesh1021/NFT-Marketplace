const Web3 = require('web3');
const ethers = require('ethers')
// Create Web3 instance
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/r4vhnw7sqCu54awQJQENXGemhNnGrFhj'); // Insert your RPC URL here


// 2. Create account variables
const accountFrom = {
    privateKey: '3efeca234fd1297d38d868a0e3ede3f9e3dda96173be8807f1daf1112934a45a',
    address: '0x49dE5F840112AaA68512947Bc749d3Ff30Fa40af',
  };
  const addressTo = '0xd459A00f5ab34A221eFe78F500C9178de9e80CeE'; // Change addressTo
  
  // 3. Create send function
  const send = async () => {
    console.log(`Attempting to send transaction from ${accountFrom.address} to ${addressTo}`);
  
    // 4. Sign tx with PK
    const createTransaction = web3.eth.accounts.signTransaction(
      {
        gas: 2100000,
        to: addressTo,
        nonce : 23,
        value: web3.utils.toWei('0.000001', 'gwei'),
      },
      accountFrom.privateKey
    );

    // replacement_price = web3.eth.getTransaction(pending_txn_hash).gasPrice * 0.0001
  
    // 5. Send tx and wait for receipt
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
  };
  
  // 6. Call send function
  send();

// const providerRPC = {
//     Sepolia: {
//         provider: `https://sepolia.infura.io/v3/a000e9d4c4a84f2da055fd797eab742f`,
//         network_id: 11155111,       // Goerli's id
//         confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
//         timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//         skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
//       },
//   moonbase: 'https://sepolia.infura.io/v3/a000e9d4c4a84f2da055fd797eab742f',
// };
// const web3 = new Web3(providerRPC.development); // Change to correct network

// const account_from = {
//   privateKey: '3efeca234fd1297d38d868a0e3ede3f9e3dda96173be8807f1daf1112934a45a',
//   address: '0x49dE5F840112AaA68512947Bc749d3Ff30Fa40af',
// };
// const addressTo = '0xd459A00f5ab34A221eFe78F500C9178de9e80CeE';

// const send = async () => {
//   console.log(`Attempting to send transaction from ${account_from.address} to ${addressTo}`);

//   const createTransaction = await web3.eth.accounts.signTransaction(
//     {
//       gas: 21000,
//       to: addressTo,
//       value: web3.utils.toWei('1', 'ether'),
//     },
//     account_from.privateKey
//   );

//   const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
//   console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
// };

// send();