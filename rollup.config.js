import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import clear from "rollup-plugin-clear";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default async function config() {
  return {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      vue(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
      clear({
        targets: ["./dist"],
      }),
      nodeResolve(),
    ],
  };
}
