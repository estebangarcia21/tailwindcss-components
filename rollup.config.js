import typescript from "rollup-plugin-typescript2"
import pkg from "./package.json"

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      strict: false
    }
  ],
  plugins: [typescript()],
  external: ["react", "react-dom"]
}
