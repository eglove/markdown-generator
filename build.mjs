import { projectBuilder } from "@ethang/project-builder/src/project-builder.ts";

await projectBuilder("markdown-generator", "main", {
  isLibrary: true,
  publishDirectory: "dist",
  scripts: ["UPDATE", "DEDUPE"],
  tsConfigOverrides: {
    compilerOptions: {
      emitDeclarationOnly: true,
    },
    include: ["src"],
  },
  tsupOptions: {
    bundle: true,
    entry: ["src"],
    format: ["cjs", "esm"],
    minify: true,
    outDir: "dist",
  },
});
