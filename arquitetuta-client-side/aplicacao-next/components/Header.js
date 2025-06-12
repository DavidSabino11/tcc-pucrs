export default function Header() {
  return (
    <header className="bg-black dark:bg-green-400 p-4 shadow-md text-white dark:text-black">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Aplicação Next.js</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline hover:text-gray-300 dark:hover:text-gray-800 transition">Início</a>
        </nav>
      </div>
    </header>
  );
}
