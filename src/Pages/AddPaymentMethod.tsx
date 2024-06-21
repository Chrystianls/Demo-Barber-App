import RegisterNavIcons from "@/components/RegisterNavIcons";
import { Plus } from "lucide-react";
import masterCard from "../assets/icons/Mastercard svg.svg"
import paypal from "../assets/icons/PayPal svg.svg"
import google from "../assets/icons/Google svg.svg"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AddPaymentMethod = () => {
  return (
    <section>
      <RegisterNavIcons indexStage={3} />

      <div className="px-5">
      <h2 className="text-2xl text-dark-gray mb-8 text-center">
        Adicionar método de pagamento
      </h2> 

      <div>
        <div className="flex justify-between items-center p-[18px] rounded-[5px] border border-[#dddddd] mb-5">
          <div className="flex gap-[10px] items-center">
            <img src={masterCard} />
            <span className="text-[15px] text-light-gray">Credit Card</span>
          </div>
          <Plus width={18} height={18} color="#191a1a" />
        </div>

        <div className="flex justify-between items-center p-[18px] rounded-[5px] border border-[#dddddd] mb-5">
          <div className="flex gap-[10px] items-center">
            <img src={paypal} />
            <span className="text-[15px] text-light-gray">Paypal</span>
          </div>
          <Plus width={18} height={18} color="#191a1a" />
        </div>

        <div className="flex justify-between items-center p-[18px] rounded-[5px] border border-[#dddddd] mb-5">
          <div className="flex gap-[10px] items-center">
            <img src={google} />
            <span className="text-[15px] text-light-gray">Google pay</span>
          </div>
          <Plus width={18} height={18} color="#191a1a" />
        </div>
      </div>

      <div className="fixed w-full px-5 bottom-5 left-0">
          <Link to={"/register/terms-conditions"}>
            <Button variant={"outline"} className="w-full">
              Próximo
            </Button>
          </Link>
      </div>
      </div>
    </section>
  )
}

export default AddPaymentMethod;