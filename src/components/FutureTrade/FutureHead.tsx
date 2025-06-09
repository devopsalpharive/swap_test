import React from 'react'
import bit from "../../assets/coins/btc.svg";
const FutureHead = () => {
  return (
    <div className='flex gap-8 dark:bg-black p-2 overflow-x-scroll'>
      <div className='flex gap-2 items-center'>
        <div>
          <img src={bit} className='w-[25px]'/>
        </div>
        <div>
          <h6 className='dark:text-white font-[500] text-[15px]'>BTC Perpetual/USDT</h6>
        </div>
      </div>
      <div className='flex gap-6 items-center'>
        <p className='text-[#008000]'>88349.02</p>
        <div>
          <p className='dark:text-[#718096] text-[13px] font-[600]'>24H Change</p>
          <p className='text-[#008000]'>0.92%</p>
        </div>
        <div>
          <p className='dark:text-[#718096] text-[13px] font-[600]'>24H High</p>
          <p className='dark:text-white'>  88877.00</p>
        </div>
        <div>
          <p className='dark:text-[#718096] text-[13px] font-[600]'>24H Low</p>
          <p className='dark:text-white'>86389.78</p>
        </div>
        <div>
          <p className='dark:text-[#718096] text-[13px] font-[600]'>24h Vol(USDT)</p>
          <p className='dark:text-white'>2432935469.66</p>
        </div>
      </div>
    </div>
  )
}

export default FutureHead
