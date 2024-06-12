import chevromDown from "../assets/icons/chevrom-down.svg";
import BarberNavBar from "@/components/BarberNavBar";
import NextClient from "@/components/NextClient";
import { scheduleClients } from "../constants/index.js";

const BarberScheduleDashboard = () => {
  const time = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="flex flex-col mb-40">
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 pb-5 border-b border-[#ddd] text-center mb-5">
        Painel
      </span>

      <div className="px-5">
        <NextClient />

        <div className="flex justify-between items-center mb-2">
          <span className="text-[17px] text-dark-gray leading-10">
            Calendário
          </span>
          <span className="flex items-center gap-2 text-sm">
            Ver agenda <img src={chevromDown} width={24} height={24} />
          </span>
        </div>

        <div className="border border-[#ddd] flex rounded-[5px]">
          <div className="flex flex-col justify-evenly items-center px-5 border-r border-[#ddd]">
            {time.map((time, index) => (
              <span
                key={index}
                className="text-sm text-light-gray"
              >{`${time}PM`}</span>
            ))}
          </div>
          <div>
            {scheduleClients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 p-5 border-b border[#ddd] py-5 pl-5"
              >
                <span className="text-sm text-dark-gray">{client.name}</span>
                <span className="text-sm text-light-gray">
                  {client.services}
                </span>
                <p className="text-sm text-light-gray">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        <BarberNavBar />
      </div>
    </section>
  );
};

export default BarberScheduleDashboard;
