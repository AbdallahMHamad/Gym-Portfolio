import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';




export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // إعدادات ضغط صور الـ JPG/JFIF
      mozjpeg: { quality: 75 },
      // إعدادات ضغط صور الـ PNG (مثل اللوجو الخاص بك)
      optipng: { optimizationLevel: 5 },
      // التحويل لـ WebP لتقليل الحجم بأكثر من 600 KiB
      webp: { quality: 75 },
    }),
  ],
});