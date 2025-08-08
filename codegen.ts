
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema.graphql",
  documents: ["src/**/*.tsx", "src/**/*.gql"],
  generates: {
    "generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
