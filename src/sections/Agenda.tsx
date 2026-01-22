import { ReactElement } from "react";
import { BsCake } from "react-icons/bs";
import { GiForkKnifeSpoon, GiRedCarpet, GiMusicalNotes, GiQueenCrown, GiGlassCelebration } from "react-icons/gi";
import { FaChurch } from "react-icons/fa";
import { LiaHatCowboySideSolid } from "react-icons/lia";

type AgendaItemProps = {
  icon: ReactElement;
  time: string;
  title: string;
};

const AgendaItem = ({ icon, time, title }: AgendaItemProps) => {
  return (
    <div className="flex justify-center text-xl font-ebgaramond">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-3">
          <div className="flex justify-center">{icon}</div>
          <div className="text-center">
            <div className="text-xl">{title}</div>
            <div className="text-base text-gray-600">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Agenda = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Itinerario</h3>
        <p className="font-ebgaramond text-lg">
          Con gusto te compartimos el programa de la celebración para que no
          te pierdas ningún momento especial:
        </p>
        <AgendaItem icon={<FaChurch size={64} />} time="4:00 PM" title="Ceremonia Religiosa" />
        <AgendaItem icon={<GiRedCarpet size={64} />} time="6:30 PM" title="Recepción" />
        <AgendaItem icon={<GiQueenCrown size={64} />} time="7:00 PM" title="Recibimiento de la Quinceañera" />
        <AgendaItem icon={<GiGlassCelebration size={64} />} time="7:30 PM" title="Vals y Brindis" />
        <AgendaItem icon={<GiForkKnifeSpoon size={64} />} time="8:45 PM" title="Cena" />
        <AgendaItem icon={<BsCake size={64} />} time="9:30 PM" title="Pastel" />
        {/* Opción activa: notas musicales (Game Icons) */}
        <AgendaItem icon={<GiMusicalNotes size={64} />} time="9:45 PM" title="Se abre la pista de baile" />
        {/* Alternativas:
        <AgendaItem icon={<FaMusic size={64} />} time="9:45 PM" title="Se abre pista de baile" />
        <AgendaItem icon={<IoMdMusicalNotes size={64} />} time="9:45 PM" title="Se abre pista de baile" />
        */}
        <AgendaItem icon={<LiaHatCowboySideSolid size={64} />} time="10:00 PM" title="Banda" />
      </div>
      <div className="text-center mt-16 font-cinzel text-2xl">
        <p className="">Confirma tu asistencia</p>
      </div>
    </section>
  );
};
