import { Input } from "@/components/ui/input";
import logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <section className="flex flex-col items-center px-5 h-screen relative">
      <img src={logo} className="mb-5 mt-24" height={62} width={68} />
      <h1 className="font-SF-pro-bold text-[34px] tracking-tight mb-20">
        Bem vindo de novo.
      </h1>

      <Input placeholder="Nome ou telefone" className="mb-5" />
      <Input placeholder="Preencha sua senha" className="mb-5" />
      <Link
        to={"/recovery-password"}
        className="text-xs text-light-gray block mb-8 self-end"
      >
        Esqueci minha senha?
      </Link>

      <Button className="w-full ">Entrar</Button>

      <p className="text-sm text-light-gray absolute bottom-6">
        Não tem uma conta?{" "}
        <Link to={"/register"} className="text-dark-gray py-2">
          Registre-se agora
        </Link>
      </p>
    </section>
  );
};

export default Login;
