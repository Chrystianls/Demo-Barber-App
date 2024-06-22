import RegisterNavIcons from "@/components/RegisterNavIcons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <section>
      <RegisterNavIcons indexStage={4} linkBackward="/register/add-payment-method" />

      <div className="px-5">
        <h2 className="text-2xl text-dark-gray mb-8 text-center">
          Quase lá
        </h2> 

        <div className="text-[14px] text-light-gray space-y-5 mb-5">
          <p>Você está a um passo de concluir o registro. Para finalizar, você pode concordar com nossos <span className="text-dark-gray">Termos & condições.</span></p>

          <p>Publicamos os Termos e Condições da Empresa para que você saiba o que esperar ao usar nossos serviços.</p>

          <p>Ao marcar a caixa abaixo, você concorda com estes termos.</p> 
        </div>

        <label htmlFor="terms" className="flex items-center gap-2 text-xs text-dark-gray">
          <input type="radio" name="terms" id="terms" />     
          Termos & Condições
        </label>
      </div>

      <div className="fixed w-full px-5 bottom-5 left-0">
        <Link to={"/customer-dashboard"}>
          <Button variant={"default"} className="w-full">
            Registrar
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default TermsAndConditions;