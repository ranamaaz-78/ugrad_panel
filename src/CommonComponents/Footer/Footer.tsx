import { Images } from "../../constants/images";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const companyArray = [
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Terms of Use", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];
  const programsArray = [
    { name: "Fellowship", link: "#" },
    { name: "Self-Pieced", link: "#" },
  ];
  const resourcesArray = [
    { name: "Blogs", link: "#" },
    { name: "Apply as Mentor", link: "#" },
  ];
  return (
    <>
      <div className="md:block">
        <div className="py-12">
          <div className="flex flex-col md:flex-row px-8 gap-8 w-full">
            {/* Left Column - Brand Info */}
            <div className="flex flex-col gap-1 w-full md:w-[30%] items-start">
              <div
                className="flex items-center mb-4"
                onClick={() => navigate("/")}
              >
                <img src={Images.FooterLogo} alt="Jgrad Logo" />
              </div>
              <div className="space-y-1 text-base font-sans text-white">
                <p>Learn by doing.</p>
                <p>Grow with mentors.</p>
                <p>Land your dream job.</p>
              </div>
              <div className="mb-2 md:mb-0 mt-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <FaFacebookF fontSize={16} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <TiSocialTwitter fontSize={16} />
                </div>

                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <FaInstagram fontSize={16} />
                </div>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <FaYoutube fontSize={16} />
                </div>
              </div>
            </div>

            {/* Middle Columns - Links */}
            <div className="flex flex-col md:flex-row  w-full md:w-[70%] gap-8 md:gap-28">
              <div>
                <h3 className="text-lg text-white font-semibold font-sans mb-4">
                  Company
                </h3>
                <ul className="space-y-4 text-white  font-sans">
                  {companyArray.map((item) => (
                    <li key={item.name}>
                      <div
                        className="hover:text-primary-NavyBlue"
                        onClick={() => navigate(item.link)}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4  font-sans text-white">
                  Programs
                </h3>
                <ul className="space-y-4 text-white  font-sans">
                  {programsArray.map((item) => (
                    <li key={item.name}>
                      <div
                        onClick={() => navigate(item.link)}
                        className="hover:text-primary-NavyBlue"
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white  font-sans">
                  Resources / Participate
                </h3>
                <ul className="space-y-4 text-white  font-sans">
                  {resourcesArray.map((item) => (
                    <li key={item.name}>
                      <div
                        onClick={() => navigate(item.link)}
                        className="hover:text-primary-NavyBlue"
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Common to both */}
      <div className="px-6">
        <div className="border-t border-gray-400/30 py-6 text-center text-white text-sm font-sans">
          © {new Date().getFullYear()} Pixelify. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
