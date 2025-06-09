import { useState, useRef } from "react";

export default function StepSlider() {
  const [value, setValue] = useState(25);
  const marks = [0, 25, 50, 75, 100];
  const sliderRef = useRef(null);
  
  const handleMarkClick = (mark:any) => {
    setValue(mark);
  };

  const handleMouseMove = (e:any) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    let newValue = Math.round((offsetX / rect.width) * 100);
    newValue = marks.reduce((prev, curr) =>
      Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
    );
    setValue(newValue);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    }, { once: true });
  };

  const offsetMap = {
  0: "-4.3px",
  25: "-8.3px",
  50: "-11.3px",
  75: "-15.3px",
  100: "-19.3px",
};
  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* <p className="text-white mb-2">Value: {value}</p> */}
      <div ref={sliderRef} className="relative w-full max-w-lg mt-2">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-700 rounded-lg" />
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-green-500 rounded-lg transition-all"
          style={{ width: `${value}%` }}
        />
        <div className="flex justify-between items-center relative">
          {marks.map((mark, index) => (
            <div key={index} className="relative cursor-pointer" onClick={() => handleMarkClick(mark)}>
              <div
                className={`w-4 h-4 rounded-full ${
                  value >= mark ? "bg-green-500" : "bg-gray-600"
                }`}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute -top-[4px] left-[200px] w-6 h-6 flex items-center justify-center rounded-md border-2 border-yellow-500 cursor-pointer"
          style={{ left: `calc(${value}% + ${offsetMap[value]})` }}
          onMouseDown={handleMouseDown}
        >
          <div className="w-4 h-4 bg-green-500 rounded-full" />
        </div>
      </div>
    </div>
  );
} 
// const offsetMap = {
//   0: "-4.3px",
//   25: "-8.3px",
//   50: "-11.3px",
//   75: "-15.3px",
//   100: "-19.3px",
// };
