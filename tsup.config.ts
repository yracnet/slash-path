import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    outDir: "dist",
    external: [
      "path"
    ],
    dts: {
      resolve: true,
    },
    clean: true,
    sourcemap: false,
  },
]);
