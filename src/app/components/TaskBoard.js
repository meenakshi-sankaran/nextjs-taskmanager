// ══════════════════════════════════════════════════════
// COMPONENT: TaskBoard
// PURPOSE: The core computational 'brain'. Coordinates global data states.
// TYPE: Client Component ('use client') — Mandated by interactive state hooks.
// PROPS: Implemented as a root level orchestrator; consumes no outer props.
// ══════════════════════════════════════════════════════
'use client';

import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {
  // ── LAZY INITIALIZER VARIABLE DECLARATION ──
  // We use a function initializer so the browser disk is only queried on the initial render loop.
  // The 'typeof window' check is absolutely vital for Next.js to prevent Server-Side Rendering (SSR) 
  // failures, since local storage properties do not exist on the node server framework background.
  const [tasks, setTasks] = useState(() => {
    if (typeof window === 'undefined') return [];
    const storedLogs = localStorage.getItem('taskops_telemetry');
    return storedLogs ? JSON.parse(storedLogs) : [];
  });

  // Filter state tracking requires independent memory allocations because it changes on isolated interactions.
  const [activeFilter, setActiveFilter] = useState('all');

  // ── DATA SYNCHRONIZATION SIDE EFFECT ──
  // This hook synchronizes our memory array state out to the browser storage system.
  // The dependency array tracks [tasks] to avoid writing loops if unrelated UI updates trigger.
  useEffect(() => {
    localStorage.setItem('taskops_telemetry', JSON.stringify(tasks));
  }, [tasks]);

  // ── DERIVED VALUE MANAGEMENT ──
  // These tallies are calculated dynamically on every render frame from the core tasks array.
  // We explicitly avoid storing these counts in a separate state variable to eliminate dangerous state out-of-sync bugs.
  const totalRecords = tasks.length;
  const completedRecords = tasks.filter(item => item.done).length;
  const pendingRecords = totalRecords - completedRecords;

  // Evaluates filter criteria on every state change to assemble matching subsets dynamically.
  const processedTasks = tasks.filter(item => {
    if (activeFilter === 'done') return item.done;
    if (activeFilter === 'active') return !item.done;
    return true;
  });

  // ── IMMUTABLE STATE MUTATION HANDLERS ──
  // Direct state mutations are forbidden in React. We utilize spread operators and array filters to create 
  // brand new array memory references, forcing React to detect changes and trigger UI updates accurately.
  function processNewTask(textInput) {
    setTasks([...tasks, { id: crypto.randomUUID(), title: textInput, done: false }]);
  }

  function toggleRecordStatus(targetId) {
    setTasks(tasks.map(item => item.id === targetId ? { ...item, done: !item.done } : item));
  }

  function purgeSingleRecord(targetId) {
    setTasks(tasks.filter(item => item.id !== targetId));
  }

  function flushAllCompleted() {
    setTasks(tasks.filter(item => !item.done));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
      <div className="lg:col-span-1 space-y-4 bg-[#131a26] p-4 rounded-xl border border-[#222f43] shadow-2xl">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Control Interface</h2>
        <AddTaskForm onAdd={processNewTask} />
        <div className="pt-4 border-t border-[#222f43]">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">System Metrics</h2>
          <TaskStats 
            total={totalRecords} active={pendingRecords} completed={completedRecords}
            currentFilter={activeFilter} onFilterChange={setActiveFilter} onClear={flushAllCompleted}
          />
        </div>
      </div>
      <div className="lg:col-span-3 bg-[#131a26] rounded-xl border border-[#222f43] shadow-2xl overflow-hidden">
        <TaskList dataSet={processedTasks} onToggle={toggleRecordStatus} onDelete={purgeSingleRecord} />
      </div>
    </div>
  );
}
