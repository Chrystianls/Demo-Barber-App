import arrow from "../assets/icons/arrow-left.svg";
import Personal from "../assets/icons/Personal.svg";
import Photo from "../assets/icons/Photo.svg";
import Preferences from "../assets/icons/Preferences.svg";
import Payment from "../assets/icons/Payment method.svg";
import Done from "../assets/icons/Done.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex flex-col items-center px-5">
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
        <div className="p-3 rounded-full bg-neutral-100 border border-dark-gray">
          <img src={Personal} height={24} width={24} />
        </div>
        <div className="p-3 rounded-full bg-neutral-100">
          <img src={Photo} height={24} width={24} />
        </div>
        <div className="p-3 rounded-full bg-neutral-100">
          <img src={Preferences} height={24} width={24} />
        </div>
        <div className="p-3 rounded-full bg-neutral-100">
          <img src={Payment} height={24} width={24} />
        </div>
        <div className="p-3 rounded-full bg-neutral-100">
          <img src={Done} height={24} width={24} />
        </div>
      </div>

      <h2 className="text-2xl text-dark-gray mb-8">Informações Pessoais</h2>

      <div className="flex flex-col gap-5 w-full">
        <Input placeholder="Nome completo" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Número de Telefone" />
        <Input placeholder="Endereço" />
      </div>

      <Link
        to={"register/profile-photo"}
        className="w-full absolute bottom-5 px-5"
      >
        <Button variant={"outline"} className="w-full">
          Próximo
        </Button>
      </Link>
    </section>
  );
};

export default Register;
