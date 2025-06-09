
import React from "react";

const FarmsAndStaking = () => {
  return (
    <> 
    
    <div className="container relative px-4">
    <h2 className="lg:text-[40px] text-[30px] text-white font-bold text-center lg:mb-20 mb-4 leading-tight font-funnel">Join the AlphaSwap - Crypto For Everyone</h2>
     <div className="flex items-center justify-center md:pb-10 pb-0">
      <div className="md:block hidden absolute left-[4%] top-[0px] bg-[url('../../../public/background-blur-1.png')] bg-cover  w-[800px] h-[500px]">
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full text-white relative z-[2]">
        {/* Farms & Staking */}

  <div className="rounded-xl  border-white border-[0.5px]  p-6 text-white bg-[linear-gradient(0deg,rgba(102,8,116,0.3),rgba(102,8,116,0.3))] backdrop-blur-[66px]"
  style={{
    boxShadow: `
      3.3px 2.64px 12.95px 0px #FFFFFF4D inset,
      -3.97px -5.29px 11.5px 0px #5E9FFF40 inset
    `,
  }}>
             <h2 className="lg:text-[30px] text-[22px] font-semibold mb-4">Farms & Staking</h2>
          <div className="space-y-3 text-sm text-white/80">
            <div>
              <p className="font-semiBold text-white mb-2 text-[20px]">Alpha to Harvest:</p>
              <p>- 0.0000000000</p>
              <p>~$0.0000000000</p>
            </div>
            <div>
              <p className="font-semiBold text-white mt-4 mb-2 text-[20px]">Alpha to Wallet:</p>
              <p>0.000</p>
              <p>~$0.000</p>
            </div>
          </div>
        {/* </div> */}
        </div>

        {/* ALPHA Stats */}
        <div className="rounded-xl  border-white border-[0.5px]  p-6 text-white bg-[linear-gradient(0deg,rgba(102,8,116,0.3),rgba(102,8,116,0.3))] backdrop-blur-[66px]"
  style={{
    boxShadow: `
      3.3px 2.64px 12.95px 0px #FFFFFF4D inset,
      -3.97px -5.29px 11.5px 0px #5E9FFF40 inset
    `,
  }}>
          <h2 className="lg:text-[30px] text-[22px] font-semibold mb-4">ALPHA Stats</h2>
          <div className="text-sm text-white/80 space-y-2">
            <div className="flex justify-between">
              <span className="text-white font-semiBold text-[16px]">Market cap</span>
              <span className="text-white font-bold">$0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semiBold text-[16px]">Total Minted</span>
              <span className="text-white font-bold">2,000,000,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semiBold text-[16px]">Total Burned</span>
              <span className="text-white font-bold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semiBold text-[16px]">ALPHA Price</span>
              <span className="text-white font-bold">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white font-semiBold text-[16px]">Circulating Supply</span>
              <span className="text-white font-bold">2,000,000,000</span>
            </div>
          </div>
        </div>       
        {/* Total Value Locked */}
        <div className="rounded-xl text-center align-middle  flex flex-col justify-center  border-white border-[0.5px]  p-6 text-white bg-[linear-gradient(0deg,rgba(102,8,116,0.3),rgba(102,8,116,0.3))] backdrop-blur-[66px]"
  style={{
    boxShadow: `
      3.3px 2.64px 12.95px 0px #FFFFFF4D inset,
      -3.97px -5.29px 11.5px 0px #5E9FFF40 inset
    `,
  }}>
          <h2 className="lg:text-[30px] text-[22px]font-semibold mb-2">Total Value Locked (TVL)</h2>
          <p className="md:text-[50px] text-[32px] font-bold text-transparent bg-clip-text bg-linear-gradient mb-1">$801</p>
          <p className="text-[18px] font-bold text-white">Across all LPs and Pools</p>
        </div>
      </div>
      </div>
      <div className="md:block hidden  absolute right-[19%]  top-[0px] bg-[url('../../../public/background-blur-2.png')] bg-cover  rounded-[100%] w-[500px] h-[500px]">
      </div>
    </div>
    </>
  );
};

export default FarmsAndStaking;
