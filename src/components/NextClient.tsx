import user from "../assets/icons/user.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import clock from "../assets/icons/clock.svg";

const NextClient = () => {
  return (
    <div>
      <span className="text-[17px] leading-10 text-dark-gray mb-2">
        Próximo Cliente
      </span>

      <div className="py-[18px] border border-[#ddd] rounded-[5px] mb-5">
        <div className="flex justify-evenly pb-[18px] relative mb-[18px]">
          <div className="flex flex-col justify-center items-center">
            <img src={user} height={18} width={18} className="mb-2" />
            <span className="text-[15px] text-light-gray">John D.</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={calendarIcon} height={18} width={18} className="mb-2" />
            <span className="text-[15px] text-light-gray">Sex, Ago 12</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={clock} height={18} width={18} className="mb-2" />
            <span className="text-[15px] text-light-gray">1 PM</span>
          </div>
          <span className="h-px bg-[#ddd] w-[85%] absolute bottom-0"></span>
        </div>

        <div className="flex justify-evenly items-center">
          <span className="text-sm text-dark-gray">Reagendar</span>
          <span className="text-sm text-dark-gray border-l border-[#ddd] pl-3">
            Adicionar serviço
          </span>
          <span className="text-sm text-dark-gray border-l border-[#ddd] pl-3">
            Adicionar nota
          </span>
        </div>
      </div>
    </div>
  );
};

export default NextClient;
