import {defineConfig} from "vite";

import {unstable_vitePlugin as remix} from "@remix-run/dev";
import million from "million/compiler";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [million.vite({auto: true}), remix(), tsconfigPaths()],
});