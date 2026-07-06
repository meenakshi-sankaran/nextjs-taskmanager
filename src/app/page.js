// ══════════════════════════════════════════════════════
// COMPONENT: Home Page
// PURPOSE: Acts as the primary page entry shell hosting the application ecosystem.
// TYPE: Server Component — Static parent framework layer.
// PROPS: Accepts no direct incoming props.
// ══════════════════════════════════════════════════════
import TaskBoard from "../components/TaskBoard";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4 max-w-5xl mx-auto">
      <header className="mb-8 border-b border-[#222f43] pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-wider uppercase">
            TaskOps Core v2.0
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            System Workspace Terminal Entry Triage Panel.
          </p>
        </div>
        <span className="text-[10px] font-mono text-cyan-500 bg-cyan-950/40 border border-cyan-900/60 px-2 py-0.5 rounded-md uppercase tracking-widest">
          Online Status: Active
        </span>
      </header>
      <TaskBoard />
    </main>
  );
}