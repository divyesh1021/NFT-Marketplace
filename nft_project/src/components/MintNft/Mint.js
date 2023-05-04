import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './create-file.css';
import { useState,useEffect } from "react";
import Web3 from 'web3';
import { ethers } from "ethers";
import { useAccount } from 'wagmi';
import img from '../alien-life.jpg';
import { NFTStorage, File, Blob } from 'nft.storage';
import NFTCard from '../NFTCard/NFTCard';
import SellCard from "../Sellcard/SellCard";


// import ipfs from './ipfs';
// import { NFTStorage, File } from 'nft.storage';
// import mime from 'mime';
// import fs from 'fs';
// import path from 'path';
// const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlDMEI5QzIxNUYzNjQzRDkyMEJjM0EwMDUwZTJGNjY1MjkyNmQ4MUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTczNDU5ODgwOSwibmFtZSI6Im5mdCJ9.Tk0SToXLf6qRODF2fgEFq0kCcmM3eaKJkhGD0Oa1aQs';

// import { IPFS } from 'ipfs-http-client';


const Mint = ({state}) => {

    useEffect(()=>{
        Show_ownernft();
    },[]);

    
    // const ipfs = ipfsHttpClient();

    // const [imageData, setImageData] = useState(null)

    const { address, isConnecting, isDisconnected } = useAccount();
    console.log('addresssssssss',address);

    const [Data,setData] = useState({price:null,title:null,creator:null,des:null,_imgUrl:null});

    // const [nftData,setnftData] = useState({nftprice:null,nfttitle:null,nftcreator:null,nftdes:null,nft_imgUrl:null});
    
    const [Img,setImg] = useState([]);


    // const [Price, setPrice] = useState([]);
    // const [DataArray,setDataArray] = useState([]);
    // const DataArray = [];
    // const [Account,setAccoount] = useState();

    const [nftlist, setnftlist] = useState([]);

    const { ethereum } = window;

    const { contract } = state;


    const changeHandler = e => {
        setData({...Data,[e.target.name]:e.target.value});
    }


    function handleImangechange(e) {
        setData({
          ...Data,
          _imgUrl:URL.createObjectURL(e.target.files[0]),
          imgUrl:e.target.files[0]
        });
    } 

    // function showimg(e) {
    //     setData({
    //       ...Data,
    //       imgurl:e.target.files[0]
    //     });
    // } 

    const Mint_NFT = async (event,imag) => {
        event.preventDefault();
        
        
        // const web3 = new Web3(window.web3.currentProvider);
        // const account = await web3.eth.getAccounts();
        // const connected_account = account[0];
        // setAccoount(connected_account);
        // console.log("999999999999999999999999999999fffff 9999999999",connected_account)
        // const add = Data.address;
        const amount = Number(Data.price);
        const price = { value: ethers.utils.parseEther(`${amount}`) };
        // console.log(Data.price);
        // const price = Number(Data.price);
        // console.log(price);
        // const title = Data.title;
        // console.log(title);
        // const creator = Data.creator;
        // const description = Data.description;
        // const _imgUrl = Data._imgUrl;
        // setData()
        const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlDMEI5QzIxNUYzNjQzRDkyMEJjM0EwMDUwZTJGNjY1MjkyNmQ4MUMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTczNDU5ODgwOSwibmFtZSI6Im5mdCJ9.Tk0SToXLf6qRODF2fgEFq0kCcmM3eaKJkhGD0Oa1aQs';
        const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
        console.log(Data)
        const imageFile = new File([Data.imgUrl] , 'nft.png', { type: 'image/png' });
        const metaData = await client.store({
        name: Data.title,
        description : Data.des,
        image : imageFile,
        price : Data.price,
        creator : Data.creator
        });
        // DataArray.push(Data);
        // console.log('@@@@-------------------------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',Data);
        // setMetaData(metaData);
        console.log("METAData",metaData);
        // const a
        // console.log("METAData",metaData.url);
        // setData({_imgUrl:metaData.data.image.href});
        const imgurl1 = metaData.data.image.pathname;
        const i = imgurl1.replace('/nft.png','.ipfs.dweb.link/nft.png');
        const url = i.replace('//','https://');
        console.log('11111111111111111',imgurl1);
        console.log('2222222222222222222222222222255555555555555555555555555555',url);

        // console.log('=================',imgurl);
        const someData = new Blob([Data]);
        const cid = await client.storeBlob(someData);
        // const img_url = `${cid} + /metaData`;
        const nftprice = Number(Data.price);
        console.log('nftprice==============nency',nftprice);
        console.log('cid----------------------------',cid);
        const mint_token = await contract.Add_nft(address,nftprice,Data.title,url,Data.des,Data.creator);
        const a = await mint_token.wait();
        // nft_list.push(Data);
        console.log('-------------------',a);
        console.log(`Transaction Hash: ${mint_token.hash}`);
        console.log('titleeeeeeeeeeeeeeee',Data._imgUrl);



        // const nft_balance = await contract.balanceOf(address);
        // console.log(Number(nft_balance));
        
        // for(var i = 0;i<nft_balance;i++){
        //     const tokenId = await contract.tokenOfOwnerByIndex(address,i);
        //     console.log('000000000000000000000000000000',tokenId);
        //     const ID = Number(tokenId);
        //     console.log('000000000000000000000000000000',ID);
        //     const imgurl1 = metaData.url;
        //     console.log('999999999999999',`${imgurl1}.json/`);
        //     const imgurl = `${imgurl1}`;
        //     console.log('11111111111111111111111',imgurl);
        //     nft_list.push({ID,imgurl});
        //     setImg([...Img,imgurl1]);
        //     Img.push(imgurl1);
            
            // const user_Data = await contract.data(ID);
            // console.log('userdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',user_Data);
            // const Token_Uri = nft_list[i];
            // console.log('jhjbbhjbhhhhhhhhhhhhhhhhhhhhh',Token_Uri);
        // }
        console.log('loooooooooooooooopppppppppppp',nftlist);

        // for(var j=0;j<nft_list.length;j++){
            // const nft = nft_list[j];
            // console.log('nft_list-----',nft);
            // console.log('nft_image-----',nft.imgurl);
            // const metadataresponse = await fetch(nft_list);
            // const metadata1 = await metadataresponse.json();
            // console.log("metadata=========", metadata1);
            // setImg([...Img,metadata1.image]);
        // }
    }


    const Show_ownernft = async () => {

        const nft_balance = await contract.balanceOf(address);
        console.log(Number(nft_balance));
        // console.log('metadata----------------------------',MetaData);

        for(var i = 0;i<nft_balance;i++){
            const tokenId = await contract.tokenOfOwnerByIndex(address,i);
            console.log('000000000000000000000000000000',tokenId);
            const ID = Number(tokenId);
            console.log('000000000000000000000000000000',ID);
            // const imgurl1 = MetaData.url;
            // const imgurl1 = await contract.data[ID];
            const imgurl1 = await contract.NFT_DATA(ID);
            // const nftimg = imgurl1.imgUrl;
            // const nftprice = imgurl1.nftprice;
            // const nfttitle = imgurl1.nft_title;
            // const nftowner = imgurl1.nftowner;
            // const nftdes = imgurl1.des;
            // setnftData({nftprice:nftprice,nfttitle:nfttitle,nftcreator:nftowner,nftdes:nftdes,nft_imgUrl:nftimg});
            // setnftlist(prevArray => [...prevArray, nftData])

            // nftlist.push(nftData);

            console.log('nftdata===========================================',imgurl1);
    // const [nftData,setnftData] = useState({nftprice:null,nfttitle:null,nftcreator:null,nftdes:null,nft_imgUrl:null});

            // console.log('----------------------------------------------------------',imgurl1);
            // console.log('9999999999999gggggggggggggggggggg99',imgurl1.imgUrl);
            // console.log('9999999999999gggggggggggggggggggg99',imgurl1.nftprice);
            // console.log('9999999999999gggggggggggggggggggg99',imgurl1.nft_title);
            // console.log('9999999999999gggggggggggggggggggg99',imgurl1.des);
            // console.log('999999999999999',`${imgurl1}.json/`);
            const imgurl = imgurl1;
            console.log('11111111111111111111111',imgurl);
            // nft_list.push({ID,imgurl});
            setImg([...Img,imgurl1]);
            Img.push(imgurl1);
            
            // const user_Data = await contract.data(ID);
            // console.log('userdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',user_Data);
            // const Token_Uri = nft_list[i];
            // console.log('jhjbbhjbhhhhhhhhhhhhhhhhhhhhh',Token_Uri);
        }
    }
    console.log("nftttttttttttttt----",nftlist)

    const ShowSell_NFT = async () => {

    }


    return(
        
        <>
        <div className="row " style={{backgroundColor:"black",color:'white'}}>
            <section className="section">
                <Container>
                <Row className="n">
                    <Col  className="col1" lg="3" md="4" sm="6">
                    <h5 className="mb-4 text-light">Preview Item</h5>
                    <div className="single__nft__card">
                        <div className="nft__img">
                            <img src={Data._imgUrl} alt="" className="w-100" />
                        </div>

                        <div className="nft__content">
                            <h5 className="nft__title">
                                {Data.title}
                                <h6>Created By</h6>
                                <p>{Data.creator}</p>
                                <h6>Current Bid</h6>
                                <p>{Data.price} ETH</p>
                            </h5>   

                            {/* <div className="creator__info-wrapper d-flex gap-3">
                                <div className="creator__img">
                                <img src="" alt="" className="w-100" />
                                </div>

                                <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                                <div>
                                    
                                </div>

                                <div>
                                    
                                </div>
                                </div>
                            </div> */}

                            <div className=" mt-3 d-flex align-items-center justify-content-between">
                                <button className="bid__btn d-flex align-items-center gap-1" style={{backgroundColor:'black',color:'white'}}>
                                <i class="fa-solid fa-bag-shopping"></i> Mint
                                </button>

                            </div>
                        </div>
                    </div>
                    </Col>

                    <Col className="col2" lg="9" md="8" sm="6">
                    <div className="create__item">
                        <form onSubmit={Mint_NFT}>
                        <div className="form__input">
                            <label htmlFor="">Upload File</label>
                            {/* <input type="file" className="upload__input" /> */}
                            <input type="file" className="upload__input"  onChange={handleImangechange}/>
                        </div>

                        <div className="form__input">
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder="Enter title" name="title" onChange={changeHandler}/>
                        </div>

                        <div className="form__input">
                            <label htmlFor="">Creator</label>
                            <input type="text"   placeholder="Enter title" name="creator" onChange={changeHandler}/>
                        </div>

                        <div className="form__input">
                            <label htmlFor="">Price</label>
                            <input type="number" placeholder="Enter price" name="price" onChange={changeHandler}/>
                        </div>            

                        <div className="form__input">
                            <label htmlFor="">Description</label>
                            <textarea
                            name="des"
                            id=""
                            rows="7"
                            placeholder="Enter description"
                            className="w-100"
                            onChange={changeHandler}
                           ></textarea>
                        </div>
                        <button className="bid__btn d-flex align-items-center gap-1 mint" type="submit">
                            <i class="fa-solid fa-bag-shopping"></i> Mint
                        </button>
                        </form>
                        <button className="viewnft" type="submit" onClick={ShowSell_NFT}>OnSell</button>
                        <button className="viewnft" type="submit" onClick={Show_ownernft}>ShowNFT</button>
                    </div>
                    </Col>
                </Row>
                </Container>
            </section>
            < SellCard />

            < NFTCard  state={ Img } contract={contract} />

            {/* {Img.map((d,i)=>{
                <div>
                    <img src={d} alt="NFT images" width={600} height={600} />
                </div>
            })} */}
        </div>
        </>
    );
}

export default Mint;