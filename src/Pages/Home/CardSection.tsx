import { Bell } from "lucide-react"
import GradientCard from "../../UIComponents/GradientCard"

const cardData = [
    { text: "All Participants", count: "3254+", Icon: Bell },
    { text: "Total Earned", count: "4564466.21+", Icon: Bell },
    { text: "BTC 24H Change", count: "-0.29%", Icon: Bell },
  ];
const CardSection = () => {
    return (
        <>
            <div className="w-full text-black dark:text-white flex items-start justify-center ">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-4 md:gap-6 lg:gap-10 items-center">
                    {cardData.map((card, index) => {
                        let textColor = "text-themeGreen"; // Default: Blue for 1st and 2nd card

                        // Apply red/green only for the 3rd card
                        if (index === 2) {
                            const numericValue = parseFloat(card.count.replace(/[^0-9.-]/g, ""));
                            textColor = numericValue < 0 ? "text-red-500" : "text-green-500";
                        }

                        return (
                            <GradientCard
                                key={index}
                                // width={card.width}
                                width="w-[300px] xs-sm:w-[300px] sm:w-[200px] sm-md:w-[150px] md:w-[220px] md:w-[220px] lg:w-[250px]"
                                // height={card.height}
                                height="h-[150px] xs:h-[250px] sm-md:h-[140px] md:h-[200px] lg:h-[210px]"
                                text={card.text}
                                count={card.count}
                                Icon={card.Icon}
                                textColor={textColor} // Dynamic color assignment
                                contentAlignment="gap-5 shadow-md shadow-themeGreen/60 dark:bg-gradient-to-r from-[#19274b] to-[#0c1237] dark:text-white items-center justify-center"
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default CardSection