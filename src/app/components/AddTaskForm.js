// ══════════════════════════════════════════════════════
// COMPONENT: AddTaskForm
// PURPOSE: Manages input strings within a controlled form layer.
// TYPE: Client Component — Listens to typing inputs and forms event dispatches.
// PROPS: onAdd — Upward state lift callback triggering state mutations in the parent.
// ══════════════════════════════════════════════════════
'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  // Local state isolates text typing tracking entirely inside this form component.
  const [typedTitle, setTypedTitle] = useState('');

  function handleFormIntercept(e) {
    // Blocks HTML form submissions from forcing full page reloads and losing application memory.
    e.preventDefault();
    if (!typedTitle.trim()) return; // Validates string spaces to block entry generation errors.
    onAdd(typedTitle.trim());
    setTypedTitle('');
  }

  return (
    <form onSubmit={handleFormIntercept} className="space-y-2">
      <input 
        type="text" value={typedTitle} onChange={(e) => setTypedTitle(e.target.value)}
        placeholder="Input system allocation entry..."
        className="w-full bg-[#0b0f19] border border-[#222f43] rounded-lg px-3 py-2 text-xs font-mono text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
      />
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono py-2 rounded-lg cursor-pointer transition-colors uppercase tracking-wider">
        Execute Provision
      </button>
    </form>
  );
}
