import img from "../../src/assets/images/Barber_first_page.jpg";
import logo from "../../src/assets/icons/Logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen flex">
      <img
        src={img}
        alt="Barbeiro."
        className="h-2/4 absolute w-full min-h-[491px] -z-10"
      />

      <div className="flex flex-col items-center px-5 self-end mb-16 w-full">
        <img src={logo} alt="Logo." height={62} width={68} className="mb-8" />

        <h1 className="mb-4 font-bold font-SF-pro-bold text-[34px] leading-10 tracking-tight text-center text-dark-gray">
          Agende seu corte<br></br> em segundos
        </h1>

        <p className="text-center mb-14 text-base leading-6 text-light-gray">
          Marque seu próximo corte de cabelo em apenas alguns segundos. Fácil de
          reservar e gerenciar seus compromissos.
        </p>

        <Link to={"/login"} className="w-full">
          <Button className="w-full mb-4">Entrar</Button>
        </Link>
        <Link to={"/register"} className="w-full">
          <Button className="w-full" variant={"outline"}>
            Registrar
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
