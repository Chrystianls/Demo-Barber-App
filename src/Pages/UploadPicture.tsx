import RegisterNavIcons from "@/components/RegisterNavIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideCirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

const UploadPicture = () => {
  return (
    <section className="px-5">
      <RegisterNavIcons indexStage={1} linkBackward="/register/personal-info" className="mb-8" />

      <h2 className="text-2xl text-dark-gray mb-8 text-center">
        Informações Pessoais
      </h2>

      <div className="relative flex items-center justify-center">
        <Input
          type="file"
          className="bg-[#f4f4f4] border-none file:hidden text-transparent"
        />
        <div className="flex items-center gap-[5px] pointer-events-none absolute">
          <LucideCirclePlus height={17} width={17} />
          <span>Escolha uma Foto</span>
        </div>
      </div>

      <div className="fixed w-full px-5 bottom-5 left-0">
        <Link to={"/register/preference-availability"}>
          <Button variant={"outline"} className="w-full">
            Próximo
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UploadPicture;
