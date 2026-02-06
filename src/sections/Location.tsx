export const Location = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Ubicación</h3>
        <p className="font-ebgaramond text-lg">
          Hay momentos que marcan el inicio de una nueva etapa y merecen ser celebrados con quienes forman parte de nuestra historia.
          Será un honor contar con su presencia para acompañarme en la celebración de mis XV años, una velada llena de significado y gratitud.
        </p>
        <div className="grid gap-6">
          <div className="font-ebgaramond text-lg">
            <h4 className="font-bold">Parroquia Santa María Asunta (Misa)</h4>
            <p>Villas de Ntra. Sra. de la Asunción, 20126 Aguascalientes, Ags.</p>
            <div>
              <button
                className="flex justify-center cursor-pointer mt-4 w-full"
                onClick={() => window.open("https://maps.app.goo.gl/8AHD8j8LHXm93rrv9")}
              >
                <div className="bg-orange-100 p-2 w-full text-center rounded text-xl font-ebgaramond">
                  Ver en Google Maps
                </div>
              </button>
            </div>
          </div>

          <div className="font-ebgaramond text-lg">
            <h4 className="font-bold">Jardín Los Robles Eventos (Salón)</h4>
            <p>Roble 225, Jardines de la Cruz, 20250 Aguascalientes, Ags.</p>
            <div>
              <button
                className="flex justify-center cursor-pointer mt-4 w-full"
                onClick={() => window.open("https://maps.app.goo.gl/mg4CwjxpubaTDRsz8")}
              >
                <div className="bg-orange-100 p-2 w-full text-center rounded text-xl font-ebgaramond">
                  Ver en Google Maps
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
