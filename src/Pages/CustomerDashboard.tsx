import BarberNavBar from "@/components/BarberNavBar";
import NextClient from "@/components/NextClient";
import { Calendar } from "@/components/ui/calendar";
import chevromDown from "../assets/icons/chevrom-down.svg";

const CustomerDashboard = () => {
  return (
    <section className="flex flex-col mb-40">
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 pb-5 border-b border-[#ddd] text-center mb-5">
        Painel
      </span>

      <div className="px-5">
        <NextClient />

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
              <span className="text-[10px] text-light-gray">Próxima visita(s)</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="block w-2 h-2 rounded-full bg-[#ddd]"></span>
              <span className="text-[10px] text-light-gray">Indisponível</span>
            </div>
          </div>
        </div>

        <BarberNavBar />
      </div>
    </section>
  )
}

export default CustomerDashboard;