import React from 'react'
import Style from '../Single-nft/Single-nft.css';
import { useNavigate,useLocation } from 'react-router-dom';
// import {da} from '../NFTCard/NFTCard';
// import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

export const SingleNFT = ({state}) => {
  // const { address, isConnecting, isDisconnected } = useAccount();


  useEffect(()=>{
    Show_ownernft();
  },[])

  const { contract } = state;
  const [viewImg,setviewImg] = useState({img:null,price:null,title:null,des:null,creator:null});

  const Show_ownernft = async () => {
    const history=window.location.href;
    // console.log('useParams--------------',history);
    const lastDigit = parseInt(history.substring(history.length - 1));
  
    // console.log('lastdigit---------------------',lastDigit);
    // console.log('daaadadadadadadadad-----------',da[0]);
    // console.log('consoljbjbbb h-----------',typeof(da));
  
    const imgurl1 = await contract.NFT_DATA(lastDigit);
    const img = imgurl1.imgUrl;
    const price = Number(imgurl1.nftprice);
    const title = imgurl1.nft_title;
    const des = imgurl1.nftDescription;
    const creator = imgurl1.nftcreator;
    setviewImg({img,price,title,des,creator});

    // console.log('nftdata===========================================',imgurl1.imgUrl);
}
  return (
    <>
    <div className='row single'>
        <div className='col singleCol'>
           <img src={viewImg.img} alt="" className='img' />
        </div>
        <div className='col singleCol'>
         <h1 className='title'>{viewImg.title}</h1>
         <h2 className='price'>{viewImg.price} ETH</h2>
         <p className='des'>{viewImg.des}</p>
         <p className='creator'>created by @{viewImg.creator}</p>
        </div>
    </div>
    </>
  )
}

export default SingleNFT;