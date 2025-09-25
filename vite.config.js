import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: "public/js", // folder where your frontend files live
    build: {
        outDir: path.resolve(__dirname, "public/src/dist"), // output to public folder
        emptyOutDir: true
    },
    server: {
        port: 3001 // dev server port (can be anything)
    }
});
