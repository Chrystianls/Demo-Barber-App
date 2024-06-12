import { Plus } from "lucide-react";
import category from "../assets/icons/category.svg";
import message from "../assets/icons/message.svg";
import settings from "../assets/icons/setting-2.svg";

const BarberNavBar = () => {
  return (
    <div className="flex flex-col z-10 fixed bottom-0 left-0 w-full">
      <div
        className="p-4 bg-dark-gray rounded-full max-w-fit mb-5 self-end mr-5
  "
      >
        <Plus height={24} width={24} color="white" />
      </div>

      <div className="flex justify-evenly border-t border-[#ddd] py-[10px] bg-white">
        <div className="flex flex-col items-center gap-y-[6px]">
          <img src={category} width={24} height={24} />
          <span className="text-xs text-dark-gray">Painel</span>
        </div>
        <div className="flex flex-col items-center gap-y-[6px]">
          <img src={message} width={24} height={24} />
          <span className="text-xs text-light-gray">Mensagens</span>
        </div>
        <div className="flex flex-col items-center gap-y-[6px]">
          <img src={settings} width={24} height={24} />
          <span className="text-xs text-light-gray">Ajustes</span>
        </div>
      </div>
    </div>
  );
};

export default BarberNavBar;
