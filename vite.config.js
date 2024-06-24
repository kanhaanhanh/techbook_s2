import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    build: {
    outDir: 'public/dist', // Adjusted output directory to match Laravel's public directory
    manifest: true, // Generate manifest.json for Laravel Mix compatibility
  },
});
