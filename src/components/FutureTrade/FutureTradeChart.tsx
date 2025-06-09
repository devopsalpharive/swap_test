import { useEffect, useRef, useState } from 'react';

const FutureTradeChart = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
 const [theme, setTheme] = useState("light");
 
 useEffect(() => {
    // Get theme from localStorage or default to system preference
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);


  useEffect(() => {
    const updateTheme = () => {
      const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme); // Save theme in localStorage
    };

    // Observe class changes on <html> to detect dark mode toggle
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);   

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: 'BTCUSDT',
          interval: '30',
          timezone: 'Etc/UTC',
          theme: theme,
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview-widget-container',
        });
      }
    };


    if (chartContainerRef.current) {
        chartContainerRef.current.innerHTML = "";
        chartContainerRef.current.appendChild(script);
      }
    }, [theme]); // 👈 Re-run effect when theme changes
  

    return (
        <div className="dark:bg-[#12151700] bg-white rounded-lg shadow-lg  transition-colors duration-300 h-[100%]">
          <div ref={chartContainerRef} className="w-full h-[650px]" id="tradingview-widget-container"></div>
        </div>
      );
}

export default FutureTradeChart;
