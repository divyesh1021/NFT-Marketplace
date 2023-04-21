import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <>
        <div id="footer">
			<div class="connect">
				<div className="row">
                    <div className="col" >
                        <img src="../images/i2.png" alt="" height="100px" width="150px"/>
                        <p>All NFTs in one Place. NFTiming serves as a kind of overview for all existing but also still launching NFT projects.</p>
						{/* <a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a> */}
						
                    </div>
                    <div className="col">
                        <p>Navigation</p>
                        <Link to="/" style={{color:"white"}}>Home</Link>
                        <Link to="/about" style={{color:"white"}}>about</Link>
                        <Link to="/project" style={{color:"white"}}>project</Link>
                        <Link to="/blog" style={{color:"white"}}>blog</Link>
                        <Link to="/contact" style={{color:"white"}}>contact</Link>
                    </div>
                    <div className="col">
                        <p>Subnavigation</p>
                        <Link to="#" style={{color:"white"}}>Top Ethereum NFTs</Link>
                        <Link to="/#" style={{color:"white"}}>Top Solana NFTs</Link>
                        <Link to="/#" style={{color:"white"}}>Top Polygon NFTs</Link>
                        <Link to="/#" style={{color:"white"}}>Promotion</Link>
                        <Link to="/#" style={{color:"white"}}>Media Kit</Link>
                        <Link to="/#" style={{color:"white"}}>Submit</Link>
                    </div>
                    <div className="col">
                        <p>Supported Blockchains</p>
                        <div>
                            <img src="images/eth5.png" alt="" height="50px" width="50px"/>
                            <img src="images/solana.png" alt="" height="50px" width="50px"/>
                            <img src="images/cardano.png" alt="" height="50px" width="50px"/>
                            <img src="images/polygon.webp" alt="" height="50px" width="50px"/>
                            <img src="images/binance.png" alt="" height="50px" width="50px"/>
                        </div>
                    </div>
				</div>
			</div>
			<div class="footnote">
				<div>
					<p>&copy; 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</div>  
        </>
    );
}

export default Footer;