export default function ResponsiveColorBoxes() {
    return (
      <div className="p-5">
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden w-xs-px h-20 bg-white border text-black flex items-center justify-center">
          xs (50px)
        </div>
        <div className="hidden xs-sm:block sm:hidden md:hidden lg:hidden xl:hidden w-xs-sm-px h-20 bg-gray-500 text-black flex items-center justify-center">
          xs-sm (50px)
        </div>
        <div className="hidden sm:block sm-md:hidden md:hidden lg:hidden xl:hidden w-sm-px h-20 bg-yellow-500 text-black flex items-center justify-center">
          sm (50px)
        </div>
        <div className="hidden sm-md:block md:hidden lg:hidden xl:hidden w-sm-md-px h-20 bg-green-500 text-white flex items-center justify-center">
          sm-md (60px)
        </div>
        <div className="hidden md:block md-lg:hidden lg:hidden xl:hidden w-md-px h-20 bg-pink-500 text-white flex items-center justify-center">
          md (70px)
        </div>
        <div className="hidden md-lg:block lg:hidden lg-xl:hidden xl:hidden w-md-lg-px h-20 bg-blue-500 text-white flex items-center justify-center">
          md-lg (100px)
        </div>
        <div className="hidden lg:block lg-xl:hidden xl:hidden w-lg-px h-20 bg-orange-500 text-white flex items-center justify-center">
          lg (250px)
        </div>
        <div className="hidden xl:hidden w-lg-xl-px h-20 bg-purple-500 text-white flex items-center justify-center">
          lg-xl (180px)
        </div>
        <div className="hidden xl:block w-xl-px h-20 bg-red-500 text-white flex items-center justify-center">
          xl (300px)
        </div>
      </div>
    );
  }
  