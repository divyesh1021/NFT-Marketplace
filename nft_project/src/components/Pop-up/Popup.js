import React,{useEffect,useState} from "react";
import "./Popup.css";
// import Abi from "../../../contracts/Abi.json";
// import {fundMe} from "../ABIs/fundMe.js";
import { ethers } from 'ethers';
// import { fetchSigner } from '@wagmi/core';



const Popup = (props) => {
  
  const [price, setprice] = useState()
  // const shownftprice=async()=>{
  //    const data1=await contract.sellData(Id);
  //    setprice(Number(data1.Price))
  //   //  setprice(0)
  //    console.log(Number(data1.Price));
  // } 
  
  // useEffect(() => {
  //   shownftprice()
  // }, [contract])
  
  const Sellnft=async(e)=>{
     e.preventDefault();
     const ID = props.nftimg;
     const Sell_NFT_ID = Number(ID[0].id);
     console.log('Sell_NFT_ID-------',Sell_NFT_ID);
     console.log(props.nftimg);
     console.log(props.contract);
     const s = await props.contract.SellNFT(Sell_NFT_ID,price);
     const data = await s.wait();
     console.log('------------------',data);
    //  const options = {value: ethers.utils.parseEther(`${price}`)}
    //  const tx= await props.contract.BuyNFT(props.Id)
    //  const waittx= await tx.wait()
    //  console.log("this is txwait",waittx);
    //  props.setsellpopup(false)
    //  console.log("fdsf");
  }
  return (
    <div className="modal__wrapper">
        <div className="single__modal">
          
            <span className="close__modal">
              <i class="ri-close-line" onClick={() => props.setsellpopup(false)}></i>
            </span>
          <form onSubmit={Sellnft}>
            <h6 className="text-center text-light">Sell NFT</h6>
            <p className="text-center text-light">
              Sell Your NFT
            </p>
            
            <div className="input__item mb-4">
              <input type="number" placeholder="Enter Price To Sell" onChange={(e)=>{setprice(e.target.value)}}/>
            </div>
          
            <button className="place__bid-btn" type="submit">Sell</button>
          </form>
      </div>
     </div>
  )
}

export default Popup;