// ══════════════════════════════════════════════════════
// COMPONENT: TaskList
// PURPOSE: Receives processed arrays to iterate over structured card loops.
// TYPE: Client Component — Normal layout dynamic data visualizer.
// PROPS: dataSet (filtered array data), onToggle (status callback), onDelete (purge callback).
// ══════════════════════════════════════════════════════
'use client';

import TaskCard from './TaskCard';

export default function TaskList({ dataSet, onToggle, onDelete }) {
  // CONDITIONAL RENDERING PROCESSOR
  // Detects empty data arrays to safely handle empty system states cleanly.
  if (dataSet.length === 0) {
    return (
      <div className="p-12 text-center border-2 border-dashed border-[#222f43] m-4 rounded-xl">
        <p className="text-xs font-mono text-gray-500">System registers evaluate as empty. Queue safe.</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-[#222f43]">
      {dataSet.map((record) => (
        <TaskCard 
          key={record.id} id={record.id} title={record.title} 
          done={record.done} onToggle={onToggle} onDelete={onDelete} 
        />
      ))}
    </div>
  );
}
