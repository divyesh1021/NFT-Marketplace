// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, ERC721Enumerable, Ownable {
    constructor() ERC721("MyToken", "MTK") {}

    uint NFT_ID = 1;
    struct Detail {
        uint id;
        address nftowner;
        string imgUrl;
        uint nftprice;
        string nft_title;
    }

    mapping(uint=>Detail) public data;
    mapping(address=>Detail[]) userdata;
    event AddNFT(uint NFT_ID,string imgUrl,uint nftprice,string nft_title);
    // uint256 public constant MINT_PRICE = 0.05 ether;


    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function Add_nft (address _add, uint _price,string memory _title , string memory _imgUrl ) public payable {
        _mint(_add,NFT_ID);
        data[NFT_ID] = Detail(NFT_ID,_add,_imgUrl,_price,_title);
        userdata[_add].push(Detail(NFT_ID,_add,_imgUrl,_price,_title));
        NFT_ID += 1;
        emit AddNFT(NFT_ID,_imgUrl,_price,_title);
    }

}

// 0x8AEeF79D959a5a17Aa600b1FC3Bd2476746C2Cd2


// 0x64bc4849DC7683e9bA90D729346B6eB287f349d6 sepo