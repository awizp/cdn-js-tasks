import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tasks: resolve(__dirname, '/components/task-list/index.html'),
                task1: resolve(__dirname, '/components/task1/index.html'),
                task2: resolve(__dirname, '/components/task2/index.html'),
                task3: resolve(__dirname, '/components/task3/index.html'),
                task4: resolve(__dirname, '/components/task4/index.html'),
                task5: resolve(__dirname, '/components/task5/index.html'),
                task6: resolve(__dirname, '/components/task6/index.html'),
                task7: resolve(__dirname, '/components/task7/index.html'),
                task8: resolve(__dirname, '/components/task8/index.html'),
                task9: resolve(__dirname, '/components/task9/index.html'),
                task10: resolve(__dirname, '/components/task10/index.html'),
                task11: resolve(__dirname, '/components/task11/index.html'),
                task12: resolve(__dirname, '/components/task12/index.html'),
                task13: resolve(__dirname, '/components/task13/index.html'),
                task14: resolve(__dirname, '/components/task14/index.html'),
                task15: resolve(__dirname, '/components/task15/index.html'),
                task16: resolve(__dirname, '/components/task16/index.html'),
                task17: resolve(__dirname, '/components/task17/index.html'),
                task18: resolve(__dirname, '/components/task18/index.html'),
                task19: resolve(__dirname, '/components/task19/index.html'),
                task20: resolve(__dirname, '/components/task20/index.html'),
            }
        }
    }
});