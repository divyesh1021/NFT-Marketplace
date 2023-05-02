import React from "react";
import { Link } from "react-router-dom";
import { Web3Button } from '@web3modal/react'

const Navbar = () => {
    return (
        <>
        <div id="header">
			<div>
				<a href="/" class="logo"><img src="../images/i2.png" alt="" height="80px" width="150px"/></a>
				<ul id="navigation">
					<li className="">
                        <Link to="/">Home</Link>
						{/* <a href="index.html">Home</a> */}
					</li>
					<li>
                        <Link to="/about">About</Link>
						{/* <a href="about.html">About</a> */}
					</li>
					<li className="menu">
						<Link to="/Mint-nft">Mint-NFT</Link>
						{/* <ul className="primary"> */}
							{/* <li> */}
                                {/* <Link to="#">proj 1</Link> */}
								{/* <a href="proj1.html">proj 1</a> */}
							{/* </li> */}
						{/* </ul> */}
					</li>
					<li className="menu">
						{/* <a href="blog.html">Blog</a> */}
                        <Link to="/buy-nft">Buy-NFT</Link>
					</li>
					
					<li>
                        <Link to="/contact">Contact</Link>
						{/* <a href="contact.html">Contact</a> */}
					</li>
					{/* <ConnectButton /> */}
					<li style={{margin:"10px"}}>
						<Web3Button/>
					</li>
				</ul>
				
			</div>
		</div>
        </>
    );
}

export default Navbar;