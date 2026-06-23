import { Mail, Globe, Briefcase } from 'lucide-react'

export default function ContactUI() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="glass p-8 md:p-12 rounded-2xl w-full max-w-lg pointer-events-auto border-t-4 border-t-accent shadow-[0_0_50px_rgba(168,85,247,0.15)]">
        <h2 className="text-4xl font-bold mb-6 text-center">Let's <span className="text-accent">Connect</span></h2>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea 
              className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:border-accent transition-colors"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent/80 transition-colors mt-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-6">
          <a href="https://github.com/H3AD5H0TPlay" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
            <Globe size={24} />
          </a>
          <a href="https://linkedin.com/in/varpeter" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0ea5e9] hover:-translate-y-1 transition-all">
            <Briefcase size={24} />
          </a>
          <a href="mailto:vargapeter.workmail@gmail.com" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
