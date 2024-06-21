import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RegisterNavIcons from "@/components/RegisterNavIcons";

const Register = () => {
  return (
    <section className="px-5">
      <RegisterNavIcons indexStage={0} />

      <div className="flex flex-col items-center">
        <h2 className="text-2xl text-dark-gray mb-8">Informações Pessoais</h2>

        <div className="flex flex-col gap-5 w-full">
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Número de Telefone" />
          <Input placeholder="Endereço" />
        </div>

        <Link
          to={"/register/upload-picture"}
          className="w-full absolute bottom-5 px-5"
        >
          <Button variant={"outline"} className="w-full">
            Próximo
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
