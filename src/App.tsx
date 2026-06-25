import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <main className="w-full">
        <Hero />
        <MyStory />
        <Resume />
      </main>
    </div>
  );
}

export default App;
