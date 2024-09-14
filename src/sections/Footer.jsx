import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div
        className="flex justify-between items-start gap-20 
      flex-wrap
      max-lg:flex-col text-white"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike" width={150} height={46} />
          </a>
          <p className="font-montserrat  text-base leading-7 mt-4 sm:max-w-sm lg:max-w-lg">
            Get shoes ready at new term at your nearest Nike store. Find your
            perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="justify-center items-center flex w-12 h-12
              bg-white rounded-full"
              >
                <img src={icon.src} alt="" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-1 justify-between lg:gap-10 gap-20 
          flex-wrap "
        >
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="font-montserrat font-2xl 
                leading-normal font-medium mb-6"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base 
                    leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href="mailto:yashbhingarde9@gmail.com">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between mt-24 max-sm:flex-col 
            max-sm:items-center "
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            height={20}
            width={20}
            className="rounded-full m-0"
            alt=""
          />
          <p className="text-white">Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer text-white">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
