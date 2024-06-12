import chevromDown from "../assets/icons/chevrom-down.svg";
import { Calendar } from "./ui/calendar";

const BarberCalendar = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[17px] text-dark-gray leading-10">
          Calendário
        </span>
        <span className="flex items-center gap-2 text-sm">
          Mês <img src={chevromDown} width={24} height={24} />
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
    </div>
  );
};

export default BarberCalendar;
