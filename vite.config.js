  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import viteImagemin from 'vite-plugin-imagemin';

  export default defineConfig({
    plugins: [
      react(),
      viteImagemin({
        mozjpeg: { quality: 75 },
        optipng: { optimizationLevel: 5 },
        webp: { quality: 75 },
      }),
    ],
    build: {
      cssMinify: true,
      minify: 'terser',
      cssCodeSplit: true, // يضمن تحميل ملفات الـ CSS الخاصة بكل صفحة فقط
      assetsInlineLimit: 4096, // الصور الأصغر من 4kb تتحول لـ Base64 لتقليل طلبات الشبكة
      terserOptions: {
        compress: {
          drop_console: true,  // يحذف console.log من الـ production
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          }
        }
      }
    }
  });