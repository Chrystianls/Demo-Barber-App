type ScheduleClientsProps = {
  name: string;
  services: string;
  description: string;
}

const scheduleClients: ScheduleClientsProps[] = [
  {
    name: "Pedro",
    services: "Corte de Cabelo & Barba",
    description: "12 AM - 1 PM com Jorge"
  },
  {
    name: "João",
    services: "Corte de Cabelo",
    description: "1 PM - 1:45 PM com Carlos"
  },
  {
    name: "Lucas",
    services: "Corte de Cabelo & Barba",
    description: "2 PM - 3:10 PM com Jorge"
  },
  {
    name: "Rafael",
    services: "Corte de Cabelo (VIP)",
    description: "3:20 PM - 4 PM com Carlos"
  },
  {
    name: "Bruno",
    services: "Corte de Cabelo & Barba (VIP)",
    description: "4:15 PM - 5:15 PM com Jorge"
  },
  {
    name: "Gustavo",
    services: "Corte de Cabelo & Barba",
    description: "5:20 PM - 6:20 PM com Jorge"
  },
  {
    name: "Fernando",
    services: "Corte de Cabelo (VIP)",
    description: "6:25 PM - 7:00 PM com Carlos"
  },
  {
    name: "Rodrigo",
    services: "Corte de Cabelo & Barba (VIP)",
    description: "7:15 PM - 8:15 PM com Jorge"
  },
];


export {
  scheduleClients
}