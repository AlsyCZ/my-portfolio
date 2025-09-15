export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">Kontakt</h2>
      <p className="text-2xl md:text-2xl font-semibold mb-4">Můžete mě najít zde:</p>
      <div className="space-x-6 mt-4">
        <a href="https://www.linkedin.com/in/aleš-mrázek-3587a824a" target="_blank" className="text-blue-400 text-xl md:text-2xl font-bold hover:underline">LinkedIn</a>
        <a href="https://github.com/AlsyCZ" target="_blank" className="text-gray-400 text-xl md:text-2xl font-bold hover:underline">GitHub</a>
        <a href="mailto:amrazemk@gmail.com" className="text-red-400 text-xl md:text-2xl font-bold hover:underline">E-mail</a>
      </div>
    </section>
  )
}