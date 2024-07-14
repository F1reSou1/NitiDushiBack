//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  esbuild: {
    options: {
      platform: "node",
      target: "esnext",
      logLevel: "debug",
      sourcemap: "inline",
      treeShaking: true,
    },
  },
});
