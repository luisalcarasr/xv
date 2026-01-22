export const Location = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="font-ballet text-4xl text-center">Ubicación</h3>
        <p className="font-ebgaramond text-lg">
          Con la bendición de Dios y rodeada del amor de mi familia, quisiera
          que me acompañe en la celebración de mis quince años. Será un honor
          contar con su presencia.
        </p>
        <div className="grid gap-6">
          <div className="font-ebgaramond text-lg">
            <h4 className="font-bold">Parroquia Santa María Asunta (Misa)</h4>
            <p>Villas de Ntra. Sra. de la Asunción, 20126 Aguascalientes, Ags.</p>
            <div>
              <a
                className="flex justify-center cursor-pointer mt-2"
                href="https://maps.app.goo.gl/8AHD8j8LHXm93rrv9"
              >
                <div className="bg-orange-100 p-2 w-full text-center rounded text-xl font-ebgaramond">
                  Ver en Google Maps
                </div>
              </a>
            </div>
          </div>

          <div className="font-ebgaramond text-lg">
            <h4 className="font-bold">Jardín Los Robles Eventos (Salón)</h4>
            <p>Roble 225, Jardines de la Cruz, 20250 Aguascalientes, Ags.</p>
            <div>
              <a
                className="flex justify-center cursor-pointer mt-2"
                href="https://maps.app.goo.gl/mg4CwjxpubaTDRsz8"
              >
                <div className="bg-orange-100 p-2 w-full text-center rounded text-xl font-ebgaramond">
                  Ver en Google Maps
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
