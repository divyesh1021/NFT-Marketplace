import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mint from './components/MintNft/Mint';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon,sepolia ,bscTestnet } from 'wagmi/chains'
import { useState,useEffect } from 'react';
import Abi from './contracts/NFT.json';
import { ethers } from 'ethers';
import SingleNFT from './components/Single-nft/SingleNFT';
import Buy from './components/BuyNFT/Buy';
// import NFTCard from './components/NFTCard/NFTCard';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

const chains = [bscTestnet, arbitrum, mainnet, polygon, sepolia];
const projectId = 'ade8d95fae5b2c8d95db08d23496f064';

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains);


function App() {
  const[State,setState] = useState({provider:null,signer:null,contract:null});

  useEffect( () => {
    const Get_Contract = async () => {
      const contract_add = '0xfeca7Eb4dDAaE816483Ad76fA6CB774fA89504a2';
      const contract_abi = Abi.abi;
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contract_add,contract_abi,signer);
      setState({provider,signer,contract});
      console.log("dgvdfgvd");
    }
    Get_Contract();
  },[]);


  return (
    <>
    <BrowserRouter>
      {/* <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode showRecentTransactions={true}>
            <Navbar />
          </RainbowKitProvider>
      </WagmiConfig> */}
       <WagmiConfig client={wagmiClient}>
        <Navbar />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/mint-nft" element={<Mint state={State} />}/>
        <Route path="/single-nft" element={<SingleNFT state={State} />}/>
        <Route path="/buy-nft" element={<Buy state={State} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;




// have karo