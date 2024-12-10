import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const basePath = "/arbeid/dagpenger/brukerdialog/";

export default defineConfig({
  base: basePath,
  plugins: [
    remix({
      basename: basePath,
      future: {
        v3_fetcherPersist: false,
        v3_relativeSplatPath: false,
        v3_throwAbortReason: false,
        v3_singleFetch: false,
        v3_lazyRouteDiscovery: false,
      },
    }),
    tsconfigPaths(),
  ],
});
