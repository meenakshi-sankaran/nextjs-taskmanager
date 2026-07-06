// ══════════════════════════════════════════════════════
// COMPONENT: TaskStats
// PURPOSE: Renders analytical displays and handles operational filter mutations.
// TYPE: Client Component — Emits filter change updates upward when toggles trigger.
// PROPS: total, active, completed, currentFilter, onFilterChange, onClear.
// ══════════════════════════════════════════════════════
'use client';

export default function TaskStats({ total, active, completed, currentFilter, onFilterChange, onClear }) {
  const navigationFilters = [
    { key: 'all', title: 'All Registers', count: total },
    { key: 'active', title: 'Active Run', count: active },
    { key: 'done', title: 'Resolved', count: completed }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
        <div className="bg-[#0b0f19] p-2 rounded-md border border-[#222f43]">
          <div className="font-bold text-gray-300">{total}</div>
          <div className="text-[8px] text-gray-600 uppercase mt-0.5">Gross</div>
        </div>
        <div className="bg-[#0b0f19] p-2 rounded-md border border-[#222f43]">
          <div className="font-bold text-amber-400">{active}</div>
          <div className="text-[8px] text-gray-600 uppercase mt-0.5">Active</div>
        </div>
        <div className="bg-[#0b0f19] p-2 rounded-md border border-[#222f43]">
          <div className="font-bold text-emerald-400">{completed}</div>
          <div className="text-[8px] text-gray-600 uppercase mt-0.5">Done</div>
        </div>
      </div>
      <div className="space-y-1">
        {navigationFilters.map((tab) => (
          <button
            key={tab.key} onClick={() => onFilterChange(tab.key)}
            className={`w-full flex items-center justify-between text-[11px] font-mono px-2.5 py-1.5 rounded transition-all cursor-pointer ${
              currentFilter === tab.key ? 'bg-indigo-950/60 text-indigo-400 border border-indigo-900' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span>{tab.title}</span>
            <span className="bg-gray-900 px-1.5 py-0.2 rounded text-[9px]">{tab.count}</span>
          </button>
        ))}
      </div>
      {/* CONDITIONAL RENDERING FLAG: Hides the clear action if there are no resolved entries */}
      {completed > 0 && (
        <button onClick={onClear} className="w-full bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 text-rose-400 text-[10px] font-mono py-1.5 rounded cursor-pointer transition-colors uppercase tracking-wider">
          Flush Resolved Log
        </button>
      )}
    </div>
  );
}
