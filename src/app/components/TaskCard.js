// ══════════════════════════════════════════════════════
// COMPONENT: TaskCard
// PURPOSE: Builds high-density rows highlighting tracking identifiers and status metrics.
// TYPE: Client Component — Listens to click prompts and communicates updates upstream.
// PROPS: id, title, done, onToggle, onDelete.
// ══════════════════════════════════════════════════════
'use client';

export default function TaskCard({ id, title, done, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-900/30 transition-colors">
      <div className="flex items-center space-x-3 min-w-0 flex-1">
        <input 
          type="checkbox" checked={done} onChange={() => onToggle(id)}
          className="w-3.5 h-3.5 rounded text-indigo-600 bg-[#0b0f19] border-[#222f43] cursor-pointer"
        />
        {/* CONDITIONAL STYLING OPERATOR: Flips text parameters depending on task status */}
        <span className={`text-xs font-mono truncate ${done ? 'line-through text-gray-500' : 'text-gray-200'}`}>
          {title}
        </span>
      </div>
      <div className="flex items-center space-x-3 shrink-0">
        <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
          done ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900/60' : 'bg-amber-950/40 text-amber-400 border-amber-900/60'
        }`}>
          {done ? 'Resolved' : 'Pending'}
        </span>
        <button onClick={() => onDelete(id)} className="text-gray-500 hover:text-rose-400 text-xs cursor-pointer transition-colors p-1">
          [Del]
        </button>
      </div>
    </div>
  );
}
