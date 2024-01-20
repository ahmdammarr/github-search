import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
 schema: './src/app/graphql/schema.docs.graphql',
  ignoreNoDocuments: true, 
  generates: {
    './src/app/graphql/types/': {
      preset: 'client'
    }
  }
}
 
export default config