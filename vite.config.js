import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({command, mode}) => {
    const isServe = command === 'serve';
    const buildServe = {
        // For preview build
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'example/index.html'),
            },
        }
    }
    const buildLib = {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@react-fps',
            fileName: '@react-fps'
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
    return {
        plugins: [
            react(),
            dts({insertTypesEntry: true}),
        ],
        build: isServe ? buildServe : buildLib
    }
})