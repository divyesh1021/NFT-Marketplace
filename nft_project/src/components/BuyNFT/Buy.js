import React from 'react'
import Style from './Buy.module.css';
import { Link } from 'react-router-dom';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import img from './alien-life.jpg';


const Buy = () => {

  const [like,setLike] = useState(true);

  const likeNft = () => {
      if(!like){
          setLike(true);
      }else{
          setLike(false);
      }
  }

  const nftimg = [img,img]

  return (
    <>
    <div className={Style.NFTCard}>
        {nftimg.map((el,i)=>(
            <div className={Style.NFTCard_box} key={i+1}>
                <div className={Style.NFTCard_box_img}>
                    <img src={el} alt="NFT images"  className={Style.NFTCard_box_img_img} />
                </div>
                {/* <Link to="/single-nft">View NFT</Link> */}

                {/* <a href="/single-nft"><button className={Style.viewNFT111}>View NFT</button></a> */}
                <Link className={Style.viewNFT111} to={`/single-nft?${Number(el.id)}`} onClick={""}>View NFT</Link>
                <button className={Style.buy}>Buy</button>
                
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
                            {/* <small>Remaining time</small>
                            <p>3h : 15m : 20s</p> */}
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
                                    <p className={Style.Price}>{Number(el.nftprice)} ETH</p>
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
        ))}
    </div>
    </>
  )
}

export default Buy;