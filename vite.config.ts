import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add this if you're having JSON import issues
  json: {
    stringify: false
  }
});