import { projectBuilder } from "@ethang/project-builder/project-builder.js";

await projectBuilder("markdown-generator", "main", {
  isLibrary: true,
  publishDirectory: "dist",
  scripts: ["UPDATE", "DEDUPE", "LINT"],
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
