export default function SkillsUI() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-20 pointer-events-none mix-blend-difference z-10">
      <div className="p-6 text-center pointer-events-auto">
        <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Core <span className="text-primary">Stack</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl font-mono">
          &gt; Advanced Linux (Arch) &amp; terminal-centric workflows.<br/>
          &gt; Specialized in custom GLSL shaders and React Three Fiber.<br/>
          &gt; Scalable backends with Python, Node.js &amp; Supabase.
        </p>
      </div>
    </div>
  )
}
