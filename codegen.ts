import { CodegenConfig } from "@graphql-codegen/cli";
import * as path from "path";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: path.join(__dirname, "/**/*.graphql/"),
  generates: {
    [path.join(__dirname, "./src/graphql/generated/graphql.ts")]: {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
