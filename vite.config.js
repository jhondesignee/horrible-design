import { defineConfig } from "vite"

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]

export default defineConfig({
  base: `/${repositoryName}/` ?? "/",
  server: {
    port: 4000
  }
})