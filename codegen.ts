
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema.graphql",
  documents: ["src/**/*.gql"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
      config: {
        operationResultSuffix: "Result",
      },
    },
  }
};

export default config;
