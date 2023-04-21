import React from 'react'
// import Cardd from './Cardd';

const Home = () => {
  return (
    <div>
    <>
    <div id="page">
		<div id="body" class="home">
			<div className="header">
				<div>
					<img src="images/t4.gif" alt="" class="satellite" />
					<h1>CREATE YOUR OWN NFT</h1>
					{/* <h2>NFT MARKETPLACE</h2> */}
					<a href="blog.html" class="more">Read More</a>
					<h3>TRADING NFT</h3>
					<ul>
						<li>
                        <a href="projects.html" ><img src="../images/i2.gif" alt="" height="235px" /></a>
						</li>
						<li>
							<a href="projects.html" ><img src="../images/i3.gif" alt='' height="150px" /></a>
						</li>
						<li>
							<a href="projects.html"><img src="../images/i4.gif" alt="" height="235x" /></a>
						</li>
						<li>
							<a href="projects.html"><img src="../images/i5.gif" alt="" height="300px" /></a>
						</li>
					</ul>
				</div>
			</div>
			<div className="body">
				<div>
					<h1>What Are NFTs?</h1>
					<p>A NFT (non-fungible token) is data added to a file that creates a unique signature. It can be an image file, a song, a tweet, a text posted on a website, a physical item, and various other digital formats.</p>
				</div>
			</div>
			<div className='container-fluid col-xl-11 col-lg-9' style={{backgroundColor:'white' ,width: '1280px',marginLeft: '276px'}} >
				
				 <div className='row asdfg d-flex justify-content-space-between'>
					{/* <div className='col-2' >
						fgfdgf
						
					</div>
					<div className='col-2' >
						gfdgdf
					</div> */}
				
				{/* <div className='row mt-5 d-flex flex-column'> */}
				<div className="card-group CardClass">
					<div className="card cardGroup d-flex flex-column align-items-center">
						<img className="card-img-top iClass mt-5 mb-5" src="/images/i2.jpg" alt="Card image cap" width="250px" height="250px"/>
					
						<div className="card-body ">
							<h5 className="card-title titleClass ">Buy a home</h5>
							<p className="card-text ctextClass">With over 1 million+ homes for sale <br/>available on the website, Trulia can  <br/>match you with a house.</p>
						</div>
					</div>
					<div className="card cardGroup d-flex flex-column align-items-center">
						<img className="card-img-top iClass mt-5 mb-5" src="/images/project-image1.jpg"  alt="Card image cap" width="250px" height="250px"/>
						<div className="card-body">
							<h5 className="card-title titleClass" >Rent a home</h5>
							<p className="card-text ctextClass">With 35+ filters and custom keyword <br/> search, Trulia can help you  <br/>find a home</p>
						</div>
					</div>
					<div className="card cardGroup d-flex flex-column align-items-center">
						<img className="card-img-top iClass mt-5 mb-5" src="/images/i1.jpg"  alt="Card image cap" width="250px" height="250px" />
					<div className="card-body ">
						<h5 className="card-title titleClass" style={{fontFamily:"initial",fontSize:"20px"}}>Crypto Art</h5>
						<p className="card-text ctextClass">With more neighborhood insights  <br/>than any other real estate  <br/>website.</p>
					</div>
					</div>
					<div className="card cardGroup d-flex flex-column align-items-center">
					<img className="card-img-top iClass mt-5 mb-5" src="/images/project-image1.jpg"  alt="Card image cap" width="250px" height="250px" />
					<div className="card-body ">
						<h5 className="card-title titleClass">See neighborhoods</h5>
						<p className="card-text ctextClass">With more neighborhood insights  <br/>than any other real estate  <br/>website.</p>
					</div>
					</div>
				</div>
				</div>
			{/* </div> */}

			</div> 
			
		</div>
		
	</div>
    </>
    </div>
  )
}

export default Home;