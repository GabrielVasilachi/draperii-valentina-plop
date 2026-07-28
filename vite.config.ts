import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

function removeProductPngSources(directory: string) {
  if (!existsSync(directory)) return;

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) removeProductPngSources(path);
    else if (entry.name.endsWith(".png")) rmSync(path);
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "exclude-product-png-sources",
      apply: "build",
      closeBundle() {
        removeProductPngSources(resolve(process.cwd(), "dist/images/products"));
      },
    },
  ],
});
