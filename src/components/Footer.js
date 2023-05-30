import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  const smIcons = [
    <BsTwitter />,
    <BsFacebook />,
    <BsInstagram />,
    <BsGithub />,
  ];
  return (
    <div
      className="
    flex items-center justify-center bg-white 
    sticky bottom-0 h-20 w-full border-t-2 shadow-md
    shadow-gray-300 gap-8"
    >
      {smIcons.map((icon, index) => (
        <div key={index} className="text-[28px] text-gray-600 hover:text-[#FF385C] duration-100 ease-in-out">
          <a href="https://github.com/Guccifer808/airbnb">{icon}</a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
