import router from '../assets/router.png'
import pc from '../assets/pc.png'
import work from '../assets/work.png'
export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 pt-4 pb-12 px-4 w-full">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide text-center drop-shadow-lg">Moje projekty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">HardwareHub</h3>
              <p className="text-gray-600 mb-4">Můj první větší projekt, jednalo se zde o práci pro ukončení 3. ročníku střední školy. Projekt obsahoval hlavně hodně práce z databázemi. Poprvé jsem zde také navrhoval složitější design frontendu.</p>
            </div>
            <a href="https://github.com/AlsyCZ/projekt" target="_blank" className="text-blue-500 font-semibold hover:underline">Zobrazit GitHub repositář</a>
          </div>
        </div>
        {/* Projekt 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Web pro správu síťových zařízení</h3>
              <p className="text-gray-600 mb-4">Tento projekt jsem měl jako maturitní projektovou práci na střední škole. Jednalo se o projekt kde bylo cílem si vyzkoušet práci s Mikrotik routery a API RouterOS.</p>
            </div>
            <a href="https://github.com/AlsyCZ/Web-for-managing-network-devices" target="_blank" className="text-blue-500 font-semibold hover:underline">Zobrazit GitHub repositář</a>
          </div>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide text-center drop-shadow-lg">Moje zkušenosti</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Zkušenost 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6">
          <img src={router} alt="Mikrotik" className="w-34 h-34 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Správa a konfigurace sítí</h3>
          <p className="text-gray-600 text-center">V rámci projektu s Mikrotik routery jsem se více sblížil se síťařinou. Vylepšil jsem si doma internet pomocí Powerline. Zjistil co je to AP, DHCP, jak nastavit VPN. Nastavil jsem si také svojí NASku.</p>
        </div>
        {/* Zkušenost 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6">
          <img src={pc} alt="Hardware" className="w-34 h-34 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Práce s Hardwarem</h3>
          <p className="text-gray-600 text-center">Odjakživa mám rád počítačový hardware. Opravil jsem i postavil několik počítačů. Pomáhal vybírat komponenty do sestav. Vyčistil několik notebooků. A zpousty dalšího.</p>
        </div>
        {/* Zkušenost 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6">
          <img src={work} alt="Mobilní elektronika" className="w-34 h-34 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Servis mobilní elektroniky</h3>
          <p className="text-gray-600 text-center">Rád také pracuji s mobilními telefony. Opravil jsem již několik telefonů (iPhony i Androidy) a několik jich také prodal pro zpětný výdělek.</p>
        </div>
      </div>
    </section>
  )
}