export default function ProjectsUI() {
  return (
    <div className="w-full h-screen sticky top-0 flex flex-col justify-end pb-20 px-10 pointer-events-none">
      <div className="glass p-6 rounded-xl max-w-md pointer-events-auto">
        <h2 className="text-3xl font-bold mb-2">Selected <span className="text-accent">Projects</span></h2>
        <p className="text-gray-400 text-sm">
          Scroll to explore the 3D gallery. Hover over the cards and interact with them. 
          My highlighted project is KitsuKana, a full-stack Japanese learning web app built with Next.js and Supabase.
        </p>
      </div>
    </div>
  )
}
