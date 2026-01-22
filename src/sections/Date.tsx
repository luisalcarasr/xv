export const Date = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">

      <div className="px-20 pb-12">
        <div className="border border-stone-700 rounded-full w-full aspect-square flex flex-col justify-center">
          <div className="flex justify-center font-cinzel text-8xl w-fit mx-auto">
            <span>D</span>
            <span className="border-r border-stone-700 mx-4"></span>
            <span>M</span>
          </div>
        </div>
      </div>
      <div className="font-cinzel text-center">
        <div className="text-2xl">7 de febrero de 2026</div>
        <div className="text-lg mt-2">
          <span className="font-bold">Misa:</span>{" "}
          <span className="font-normal">4:00 PM</span>
        </div>
        <div className="text-lg">
          <span className="font-bold">Salón:</span>{" "}
          <span className="font-normal">6:30 PM</span>
        </div>
      </div>
    </section>
  );
};

// 864213053474601
