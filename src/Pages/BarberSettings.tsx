import barber from "../assets/images/Barber_photo.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  Clock,
  DollarSign,
  EllipsisVertical,
  LucideCalendarDays,
  PencilIcon,
  ScissorsIcon,
} from "lucide-react";
import client from "../assets/images/client.jpg";
import category from "../assets/icons/category.svg";
import message from "../assets/icons/message.svg";
import settings from "../assets/icons/setting-2.svg";
import { Link } from "react-router-dom";

const BarberSettings = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-20 overflow-hidden">
      <span className="font-SF-pro-bold text-[17px] mt-3 leading-10 pb-5 border-b border-[#ddd] text-center mb-5 w-full">
        Ajustes
      </span>

      <div className="flex flex-col items-center gap-[10px] mb-5">
        <img src={barber} width={80} height={80} />
        <h2 className="font-SF-pro-medium text-xl leading-8">Paulo Henrique</h2>
      </div>

      <Tabs defaultValue="barber" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-transparent">
          <TabsTrigger value="barber">Barbeiro</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
        </TabsList>
        <TabsContent value="barber">
          <Card>
            <CardContent className="space-y-5 pt-4">
              <div className="flex items-center justify-between p-5 rounded-[5px] border border-[#dddddd]">
                <div className="flex items-center gap-[10px]">
                  <Clock height={24} width={24} color="#191A1A" />
                  <span className="text-[15px] text-light-gray">
                    8 AM - 9 PM
                  </span>
                </div>
                <PencilIcon height={24} width={24} color="#888888" />
              </div>

              <div className="flex items-center justify-between p-5 rounded-[5px] border border-[#dddddd]">
                <div className="flex items-center gap-[10px]">
                  <LucideCalendarDays height={24} width={24} color="#191A1A" />
                  <span className="text-[15px] text-light-gray">
                    Segunda - Sexta
                  </span>
                </div>
                <PencilIcon height={24} width={24} color="#888888" />
              </div>

              <div className="flex items-center justify-between p-5 rounded-[5px] border border-[#dddddd]">
                <div className="flex items-center gap-[10px]">
                  <ScissorsIcon height={24} width={24} color="#191A1A" />
                  <span className="text-[15px] text-light-gray">
                    Corte, Lavagem, Barba.
                  </span>
                </div>
                <PencilIcon height={24} width={24} color="#888888" />
              </div>

              <div className="p-5 rounded-[5px] border border-[#dddddd] space-y-5">
                <div className="flex items-center justify-between border-b border-[#dddddd] pb-5">
                  <div className="flex items-center gap-[10px]">
                    <DollarSign height={24} width={24} color="#191A1A" />
                    <span className="text-[15px] text-light-gray">
                      Corte de Cabelo
                    </span>
                  </div>
                  <span className="text-[15px] text-light-gray border-l border-[#dddddd] pl-5">
                    $30
                  </span>
                  <PencilIcon height={24} width={24} color="#888888" />
                </div>

                <div className="flex items-center justify-between border-b border-[#dddddd] pb-5">
                  <div className="flex items-center gap-[10px]">
                    <DollarSign height={24} width={24} color="#191A1A" />
                    <span className="text-[15px] text-light-gray">
                      Corte de Cabelo
                    </span>
                  </div>
                  <span className="text-[15px] text-light-gray border-l border-[#dddddd] pl-5">
                    $30
                  </span>
                  <PencilIcon height={24} width={24} color="#888888" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <DollarSign height={24} width={24} color="#191A1A" />
                    <span className="text-[15px] text-light-gray">
                      Corte de Cabelo
                    </span>
                  </div>
                  <span className="text-[15px] text-light-gray border-l border-[#dddddd] pl-5">
                    $30
                  </span>
                  <PencilIcon height={24} width={24} color="#888888" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="clients">
          <Card>
            <CardContent className="flex flex-col space-y-2 mt-4">
              <span className="flex items-center gap-2 text-sm self-end mb-2">
                Todos <ChevronDown width={24} height={24} color="#191A1A" />
              </span>

              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 border border-[#dddddd] rounded-[5px]">
                  <span className="flex items-center gap-[10px] text-sm text-dark-gray">
                    <img src={client} width={24} height={24} />
                    Dan ( Novo )
                  </span>
                  <EllipsisVertical height={24} width={24} />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 border border-[#dddddd] rounded-[5px]">
                  <span className="flex items-center gap-[10px] text-sm text-dark-gray">
                    <img src={client} width={24} height={24} />
                    João Pedro ( Top )
                  </span>
                  <EllipsisVertical height={24} width={24} />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 border border-[#dddddd] rounded-[5px]">
                  <span className="flex items-center gap-[10px] text-sm text-dark-gray">
                    <img src={client} width={24} height={24} />
                    Jhonatan Santos ( Essa semana )
                  </span>
                  <EllipsisVertical height={24} width={24} />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 border border-[#dddddd] rounded-[5px]">
                  <span className="flex items-center gap-[10px] text-sm text-dark-gray">
                    <img src={client} width={24} height={24} />
                    Pedro Lucas ( Novo )
                  </span>
                  <EllipsisVertical height={24} width={24} />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center p-5 border border-[#dddddd] rounded-[5px]">
                  <span className="flex items-center gap-[10px] text-sm text-dark-gray">
                    <img src={client} width={24} height={24} />
                    Moacir Ramalho ( Essa semana )
                  </span>
                  <EllipsisVertical height={24} width={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col z-10 fixed bottom-0 left-0 w-full">
        <div className="flex justify-evenly border-t border-[#ddd] py-[10px] bg-white">
          <Link
            to={"/barber-dashboard"}
            className="flex flex-col items-center gap-y-[6px]"
          >
            <img src={category} width={24} height={24} />
            <span className="text-xs text-dark-gray">Painel</span>
          </Link>
          <div className="flex flex-col items-center gap-y-[6px]">
            <img src={message} width={24} height={24} />
            <span className="text-xs text-light-gray">Mensagens</span>
          </div>
          <Link
            to={"/barber-settings"}
            className="flex flex-col items-center gap-y-[6px]"
          >
            <img src={settings} width={24} height={24} />
            <span className="text-xs text-light-gray">Ajustes</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BarberSettings;
