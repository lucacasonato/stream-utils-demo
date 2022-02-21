import { build, emptyDir } from "https://deno.land/x/dnt@0.20.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
    custom: [
      {
        module: "stream/web",
        globalNames: ["TransformStream", "ReadableStream", "WritableStream"],
      },
    ],
  },
  package: {
    name: "stream-utils-demo",
    version: Deno.args[0],
    description: "These are some nice stream utilities.",
    license: "MIT",
    devDependencies: {
      "@types/node": "^17",
    },
  },
});
