// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    include: ['**/*.{test,spec}.{ts,js}'],
    reporters: ['verbose'],
  },
});
