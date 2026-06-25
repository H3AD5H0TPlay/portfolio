import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyStory from './components/MyStory';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <MyStory />
      </main>
    </div>
  );
}

export default App;
