import React from 'react'

const Notification = () => {

const notify=[
   { login:"Login", sucess:"Logged In successfully", time:"2025-03-10 18:32" },
   { login:"Login", sucess:"Logged In successfully", time:"2025-03-10 15:18" },
   { login:"Login", sucess:"Logged In successfully", time:"2025-03-10 15:11" },
   { login:"Login", sucess:"Logged In successfully", time:"2025-03-10 15:18" },
   { login:"Login", sucess:"Logged In successfully", time:"2025-03-10 15:11" },
]

  return (
    <div className="">
       <div
      className="pt-10 px-6 pb-10 relative rounded-3xl mt-10 bg-gradient-to-r from-[#ffffff33] to-[#b0efc8] dark:bg-none"
      style={{
        
          
        border: "1px solid #2954A3",
        boxShadow: "0px 10.01px 20.03px 0px #07071A26",
      }}
    >
        <div className="login-notify">
           {notify.map((item, index) =>(
            <div key={index} className='flex justify-between items-center mb-4 even:bg-gray-100 p-4 even:rounded-lg flex-wrap dark:even:bg-cardBgDark'>
               <div className="login-part">
                   <h5 className="relative dark:text-white before:content-['•'] before:absolute before:-left-3 before:text-red-500 before:text-xl font-bold">{item.login}</h5>
                   <p className='dark:text-white'>{item.sucess}</p>
               </div>
               <div className="login-time dark:text-white">
                 <p>{item.time}</p>
               </div>
            </div>
           )

           )}
        </div>

    </div>
    </div>
  )
}

export default Notification
