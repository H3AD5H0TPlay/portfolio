import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* We will add the actual content here in the next steps */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Welcome to my space.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            This is a temporary placeholder text for the hero section. We will build an amazing intro here next.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
