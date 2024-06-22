import RegisterNavIcons from "@/components/RegisterNavIcons";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const PreferenceAvailability = () => {
  return (
    <section>
      <RegisterNavIcons indexStage={2} linkBackward="/register/upload-picture" />

      <div className="px-5">
      <h2 className="text-2xl text-dark-gray mb-8 text-center">
        Preferências e Viabilidade
      </h2> 

      <div>
        <div className="flex justify-between items-center p-[18px] rounded-[5px] border border-[#dddddd] mb-5">
          <span className="text-[15px] text-light-gray">Barbeiro Preferido</span>
          <ChevronDown width={18} height={18} color="#888888" />
        </div>

        <div className="flex justify-between items-center p-[18px] rounded-[5px] border border-[#dddddd]">
          <span className="text-[15px] text-light-gray">Sua disponibilidade</span>
          <ChevronDown width={18} height={18} color="#888888" />
        </div>
      </div>

      <div className="fixed w-full px-5 bottom-5 left-0">
        <Link to={"/register/add-payment-method"}>
          <Button variant={"outline"} className="w-full">
            Próximo
          </Button>
        </Link>
      </div>
      </div>
    </section>
  );
}; 

export default PreferenceAvailability;
