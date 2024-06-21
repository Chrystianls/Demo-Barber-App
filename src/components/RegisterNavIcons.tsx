import arrow from "../assets/icons/arrow-left.svg";
import Personal from "../assets/icons/Personal.svg";
import Upload from "../assets/icons/Photo.svg";
import Preference from "../assets/icons/Preferences.svg";
import Payment from "../assets/icons/Payment method.svg";
import Terms from "../assets/icons/Done.svg";
import { Link } from "react-router-dom";

type RegisterNavIconsProps = {
  indexStage: number;
  className?: string;
};

const RegisterNavIcons = ({ indexStage, className }: RegisterNavIconsProps) => {
  const navIcons = [Personal, Upload, Preference, Payment, Terms];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Link to={"/"}>
        <img
          src={arrow}
          width={24}
          height={24}
          className="absolute top-5 left-5"
        />
      </Link>
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 mb-6">
        Registrar
      </span>

      <div className="flex justify-between w-full px-[10px] mb-8">
        {navIcons.map((icon, index) => (
          <div
            key={icon}
            className={`p-3 rounded-full bg-neutral-100 ${
              index === indexStage ? "border border-dark-gray" : ""
            }`}
          >
            <img src={icon} height={24} width={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterNavIcons;
