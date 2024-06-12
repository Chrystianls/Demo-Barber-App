import NextClient from "@/components/NextClient";
import BarberNavBar from "@/components/BarberNavBar";
import BarberCalendar from "@/components/BarberCalendar";

const BarberDashboard = () => {
  return (
    <section className="flex flex-col mb-40">
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 pb-5 border-b border-[#ddd] text-center mb-5">
        Painel
      </span>

      <div className="px-5">
        <NextClient />

        <BarberCalendar />

        <BarberNavBar />
      </div>
    </section>
  );
};

export default BarberDashboard;
