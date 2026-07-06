# TaskOps Core — High-Density Productivity Terminal

An enterprise-grade, density-optimized task manager dashboard featuring advanced data filtering, live tracking telemetry, and state persistence using Next.js 16, React 19, and Tailwind CSS v4.

## Visual Design Choices
- **Theme:** Professional High-Density Terminal.
- **Palette & Spacing:** Utilizes a dark obsidian background (`#0b0f19`) paired with compact monospace typography, slim borders, and explicit high-contrast operational status chips (Amber for Pending, Emerald for Resolved). Spacing density is optimized for utility-first desktop terminal viewports.
- 
## AI Usage Log

- **Tool Used:** Gemini AI
- **What I asked for:** "Provide a clean, professional dark terminal visual design template for a Next.js React task manager using Tailwind CSS."
- **What it produced:** Suggested a dark obsidian background framework (`#0b0f19`) paired with high-contrast amber and emerald tracking status badges.
- **What I changed/learned:** I applied these specific utility styling classes directly to my custom component nodes. I learned how React handles conditional rendering loops to swap utility styling classes dynamically based on whether a task state evaluates to true or false.

## How to Run Locally
1. Install node dependencies:
   ```bash
   npm install
   
