export default function Hero() {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-start bg-gray-100">
      {/* Pozadí s obrázkem, overlay a texty */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] flex items-center justify-center">
        <img
          src="/src/assets/bacn.jpg"
          alt="Pozadí Hero"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center opacity-100 transition-all duration-300"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg px-4 text-center">
            Vítejte v mém portfoliu!
          </h2>
        </div>
      </div>
      {/* Sekce O mě pod obrázkem */}
      <div className="flex flex-col justify-center items-center w-full py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-wide text-center drop-shadow-lg">O mě</h1>
        <p className="text-2xl md:text-3xl text-center leading-relaxed font-medium max-w-5xl text-gray-900">
          Jmenuji se Aleš Mrázek, studuji Aplikovanou informatiku na vysoké škole UJEP v Ústí nad Labem, baví mě mobilní i počítačový hardware, sítě a programování.<br className="hidden md:block" />
           Ve svém volném čase se taky věnuji cvičení a hře na elektrickou či akustickou kytaru.<br className="hidden md:block" />
          Toto je moje osobní stránka (moje portfolio), kde najdete mé projekty, zkušenosti a můj kontakt.
        </p>
      </div>
    </section>
  )
}
