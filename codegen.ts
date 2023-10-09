import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://mdportal.mydevenv.co/graphql',
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/types/wordpress.d.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
