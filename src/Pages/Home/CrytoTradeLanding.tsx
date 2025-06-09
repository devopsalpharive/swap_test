import bg from "../../assets/images/CryptoTrade.png"
import gpay from "../../assets/images/google-play-1.svg"
import gpay1 from "../../assets/images/google-play-2.svg"
export default function CryptoTradeLanding() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      className="min-h-screen bg-gradient-to-br from-black to-green-900 text-white flex flex-col items-center justify-start md:justify-center px-4 py-12"
    >
      {/* Trade Text */}
      <div className="text-center md:text-left w-full max-w-4xl mb-10">
        <h1 className="text-[30px] md:text-[45px]  font-handwritten leading-tight">
          Trade. <br /> Anytime. <br /> Anywhere.
        </h1>
      </div>

      {/* Center Mobile Mockup & QR */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
        {/* <div className="rounded-3xl overflow-hidden shadow-xl w-[300px] h-[600px] bg-black">
          <img
            src={bg}
            alt="App Screenshot"
            className="object-cover w-full h-full"
          />
        </div> */}

        <div className="flex flex-col items-center gap-4">
          {/* <img src={bg} alt="QR Code" className="w-32 h-32" /> */}
          <div className="flex gap-2 relative">
            <div className="absolute top-[9rem] left-[-10rem] md:left-[-15rem]">
            <a
              href="#"
              className="block px-4 py-2 rounded-xl shadow-lg"
            >
              <img src={gpay1} alt="App Store" className="h-10" />
            </a>
            </div>
            <div className="absolute left-[0] md:left-[8rem]">
            <a
              href="#"
              className="block  px-4 py-2 rounded-xl shadow-lg"
            >
              <img src={gpay} alt="Google Play" className="max-w-[8rem]" />
            </a>
            </div>
           
          </div>
        </div>
      </div>

      {/* Footer Text */}
    
    </div>
  );
}
