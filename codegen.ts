// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://mastertheme.kinsta.cloud/graphql',
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/types/wordpress.d.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
