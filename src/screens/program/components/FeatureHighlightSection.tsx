import { Images } from "../../../constants/images";
import FeaturedCard from "../../../CommonComponents/card/FeaturedCard";
const FeatureHighlightSection = () => {
  const FeaturedCardData = [
    {
      title: "Learn Interactively by doing project",
      iconsURL: Images.AssigmentIcon,
    },
    {
      title: "Live QnA Session with Industry expert on every saturday",
      iconsURL: Images.VideoIcon,
    },
    {
      title: "Learn Instantly by watching videos",
      iconsURL: Images.BrowserIcon,
    },
    {
      title: "Get instant help from Mentra",
      iconsURL: Images.BookHelpIcon,
    },
  ];
  const TrustedCompanyLogo = [
    Images.TrustedCompanyLogo1,
    Images.TrustedCompanyLogo2,
    Images.TrustedCompanyLogo3,
    Images.TrustedCompanyLogo4,
    Images.TrustedCompanyLogo5,
    Images.TrustedCompanyLogo6,
    Images.TrustedCompanyLogo7,
  ];
  return (
    <div className="w-full py-[40px] px-5 md:px-8 lg:px-12">
      <div className=" container px-4 mx-auto">
        {/* --- */}
        <div className="flex flex-wrap justify-between gap-[15px]">
          {FeaturedCardData.slice(0, 2).map((item, index) => (
            <FeaturedCard
              key={index}
              title={item.title}
              iconURL={item.iconsURL}
              className="w-full md:w-[48.5%] xl:w-[49%] "
            />
          ))}
        </div>
        {/* ---- */}
        <div className="rounded-[20px] mt-[20px] p-[24px] min-h-[189px] h-full bg-white border border-[rgba(210,214,219,1)] w-full">
          <p className="font-sans font-normal leading-[28px] text-[20px] text-[rgba(17,48,37,1)] text-left">
            Build Skills That Land Jobs at These Top Firms
          </p>
          <div className="flex gap-[10px] flex-wrap items-center justify-between mt-[25px]">
            {TrustedCompanyLogo.map((logo, index) => (
              <img
                key={index}
                className=" shrink-0 w-auto"
                src={logo}
                alt="Trusted Company Logo"
              />
            ))}
          </div>
        </div>
        {/* ----- */}
        <div className="flex flex-wrap mt-[20px] justify-between gap-[15px]">
          {FeaturedCardData.slice(2, 4).map((item, index) => (
            <FeaturedCard
              key={index}
              title={item.title}
              iconURL={item.iconsURL}
              className="w-full md:w-[48.5%] xl:w-[49%] "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlightSection;
