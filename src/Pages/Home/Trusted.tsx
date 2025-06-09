const stats = [
    { label: 'Total Users', value: '~1.4M+' },
    { label: 'Total Trades', value: '31.3M+' },
    { label: 'Total Value Locked', value: '$1.9B+' },
    { label: 'Community', value: '2.4M+' },
  ];
  
  export default function Trusted() {
    return (
      <section className="text-white py-16">
        <div className="container px-4">
        <div className="text-center lg:p-14 p-0">
          <h2 className="md:text-[50px] text-[32px]  font-bold mb-10 leading-tight">
            Used by <span className="text-transparent bg-clip-text bg-linear-gradient ">millions</span>. Trusted with <span className="text-transparent bg-clip-text bg-linear-gradient  font-semibold">billions</span>.
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl px-3 py-5 text-center"
                style={{
                    border: '3px solid transparent',
                    borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.7) 100%)",
                    borderImageSlice: 1,
                    boxShadow: '0px 18px 37.5px 0px #00000033',
                  }}
              >
    
                <p className="text-[22px] text-transparent bg-clip-text bg-linear-gradient font-bold mb-1">{stat.label}</p>
                <p className="lg:text-[40px] text-[26px] font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    );
  }
  