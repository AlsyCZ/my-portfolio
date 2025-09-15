export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
      <p>Můžete mě najít zde:</p>
      <div className="space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/tvoje-jmeno" target="_blank" className="text-blue-400">LinkedIn</a>
        <a href="https://github.com/AlsyCZ" target="_blank" className="text-gray-400">GitHub</a>
        <a href="mailto:amrazemk@gmail.com" className="text-red-400">E-mail</a>
      </div>
    </section>
  )
}