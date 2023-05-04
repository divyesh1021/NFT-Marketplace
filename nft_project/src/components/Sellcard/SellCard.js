import React from 'react'
import { useState } from 'react';
import Style from './NFTCard.module.css';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
// import Image from 'next/image';
import img from './alien-life.jpg';
import { Link } from 'react-router-dom';


// const { Id,setId } = useState();

const SellCard = (props) => {
    // const featureArray = [1,2,3,4,5,6,7,8,9];
    // const [ Id,setId ] = useState();
    const nftimg = props.state;
    
    // const id = nftimg.id;
    // setId(nftimg);
    // const nftImg = nftimg.imgUrl;
    // const data = props.data;
    console.log('tyoenjbf df',typeof(n));
    console.log('nft+list------------------------------------------------',nftimg);
    // console.log('imgUrl------------------',nftImg);
    // console.log('ooooooooooooofggfgfgfgfoooooooooo',data);
    const [like,setLike] = useState(true);

    const likeNft = () => {
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    }
    
  return (
    <div className={Style.NFTCard}>
        {/* {nftimg.map((el,i)=>( */}
            <div className={Style.NFTCard_box} >
                <div className={Style.NFTCard_box_img}>
                    <img src={img} alt="NFT images"  className={Style.NFTCard_box_img_img} />
                </div>
                {/* <Link to="/single-nft">View NFT</Link> */}

                {/* <a href="/single-nft"><button className={Style.viewNFT111}>View NFT</button></a> */}
                {/* <Link className={Style.viewNFT111} to={`/single-nft?${Number(el.id)}`} onClick={""}>View NFT</Link> */}
                {/* <button className={Style.sell}>Sell</button> */}
                
                <div className={Style.NFTCard_box_update}>
                    <div className={Style.NFTCard_box_update_left}>
                        <div className={Style.NFTCard_box_update_left_like} onClick={()=>likeNft()}>
                            {like ? (
                                <AiOutlineHeart />
                            ) : (
                                <AiFillHeart className={Style.NFTCard_box_update_left_like_icon} />
                            )}
                            {""} 22
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_right}>
                        <div className={Style.NFTCard_box_update_right_info}>
                            <small style={{fontSize:"20px"}}>Sellend</small>
                            <p>3h : 15m : 20s</p>
                        </div>
                    </div>
                </div>
                <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                        <div className={Style.NFTCard_box_update_details_price_box}>
                            {/* <h4>creator</h4> */}
                            {/* <p>{el.nftcreator}</p> */}
                            <div className={Style.NFTCard_box_update_details_price_box_box}>
                                <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                    {/* <small>Current Price</small> */}
                                    {/* <p>{Number(el.nftprice)} ETH</p> */}
                                </div>
                                <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                    {/* <small>1 in stock</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details_category}>
                        {/* <BsImages/> */}
                    </div>
                </div>
            </div>
        {/* ))} */}
    </div>
  )
}

export default SellCard;