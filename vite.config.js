import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/To-Do-List-App/", // 👈 Add this line (must match your repo name!)
});
