 public contract BasicNFT{

 public var totalSupply: UInt64

    init(){
        self.totalSupply = 0
    }

    public resource interface NFTPublic{
        public fun getID(): UInt64
        public fun getURL(): String
    }

    public resource NFT: NFTPublic{
    
        public let id: UInt64
        public var metadata: {String: String}

        init(InitURL: String){
            self.id = BasicNFT.totalSupply
            self.metadata = {"URL": InitURL}
            BasicNFT.totalSupply = BasicNFT.totalSupply + 1
        }

        public fun getID(): UInt64{
            return self.id
        }        

        public fun getURL(): String{
            return self.metadata["URL"]!
        }   

    }

    public fun createNFT(url: String): @NFT{
        return <- create NFT(InitURL: url)
    }

}
