export interface EleventyPage {
  date: Date
  filePathStem: string
  fileSlug: string
  inputPath: string
  outputFileExtension: string
  outputPath: string
  rawInput: string
  templateSyntax: string
  url: string
}

export type ViewProps = {
  content?: string
  title?: string
  description?: string
  scripts?: string
  page?: EleventyPage
}
