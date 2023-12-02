import {defineConfig} from "vite";

import preact from "@preact/preset-vite";
import million from "million/compiler";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [million.vite({mode: 'preact', auto: true}), preact(), tsconfigPaths()],

  publicDir: "node_modules/@brewen-dev/assets/lib",
});
