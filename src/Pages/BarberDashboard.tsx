import user from "../assets/icons/user.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import clock from "../assets/icons/clock.svg";
import chevromDown from "../assets/icons/chevrom-down.svg";
import { Calendar } from "../components/ui/calendar";
import BarberNavBar from "@/components/BarberNavBar";

const BarberDashboard = () => {
  return (
    <section className="flex flex-col mb-36">
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 pb-5 border-b border-[#ddd] text-center mb-5">
        Painel
      </span>

      <div className="px-5">
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
              <span className="text-[15px] text-light-gray">1 PM </span>
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

        <div className="flex justify-between items-center mb-2">
          <span className="text-[17px] text-dark-gray leading-10">
            Calendar
          </span>
          <span className="flex items-center gap-2 text-sm">
            Month <img src={chevromDown} width={24} height={24} />
          </span>
        </div>

        <div className="flex justify-center mb-[22px]">
          <Calendar mode="single" className="rounded-md border max-w-fit" />
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center justify-end gap-2">
            <span className="block w-2 h-2 rounded-full bg-dark-gray"></span>
            <span className="text-[10px] text-dark-gray">Data Atual</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="block w-2 h-2 rounded-full border border-light-gray"></span>
            <span className="text-[10px] text-light-gray">Próximo Cliente</span>
          </div>
        </div>

        <BarberNavBar />
      </div>
    </section>
  );
};

export default BarberDashboard;
