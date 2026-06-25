export default function MyStory() {
  return (
    <section id="my-story" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            My Story
          </h2>
          <div className="h-px bg-gray-300 dark:bg-white/10 flex-1"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-10 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
          
          <p>
            I was born and raised in the quiet, peaceful suburbs of Nagykanizsa. Growing up in such a calm environment instilled in me a deep appreciation for order and structure. I was the kind of kid who found comfort in rules—if there was a system in place, I followed it. Little did I know that this innate respect for logic and structured systems would translate beautifully into the world of programming, where code is the ultimate expression of order.
          </p>
          
          <p>
            My journey into coding started in the 5th grade, driven by a simple video game problem. I needed to calculate permutations from 1 to 8, a mathematical concept I hadn't even learned yet. My cousin wrote a small Python script that instantly generated all the possibilities into a file. Seeing that process—typing a command and watching the machine effortlessly solve a complex problem—was a revelation. I realized the profound power of software: <span className="text-gray-900 dark:text-white font-bold">you write it, and it becomes reality.</span> Python became my first language, and I've been in love with development ever since.
          </p>

          <blockquote className="border-l-4 border-indigo-500 pl-6 my-12 italic text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
            "You write it, and it becomes reality."
          </blockquote>

          <p>
            I pursued my passion formally at the University of Pécs (PTE-TTK), graduating with a BSc in Computer Science, specializing in Software Engineering. My academic journey, culminating in my thesis on <em>"The Hausdorff Metric and Fractals,"</em> reinforced my deep respect for strict mathematical formulas and precision. In my work, I believe that every calculation must be flawless down to the last decimal.
          </p>

          <p>
            Outside of formal academics, my coding is deeply intertwined with my hobbies. I am an avid gamer and a dedicated language learner. These passions are the primary fuel for my personal projects. I code to solve my own problems and entertain myself—whether it's building "smart assistants" to calculate game odds, optimal routes, and team compositions, or developing my own interactive language learning applications and zen games. 
          </p>

          <blockquote className="border-l-4 border-purple-500 pl-6 my-12 italic text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
            "Maximize output through automation: the user provides the minimum, and the machine shoulders the rest."
          </blockquote>

          <p>
            My core engineering philosophy is simple: maximize output through automation. A user should provide the absolute minimum, and the machine should handle the heavy lifting. I build ethical, helpful tools that bring order to complexity, designed to make life easier for myself and others.
          </p>
          
        </div>
      </div>
    </section>
  );
}
