export interface TemplateRow {
  id: number
  name: string
  borders: string
  template_css: string
  label: string
}

export interface CompRow {
  id: number
  comp_type: string
  name: string
  html: string
  css: string
  js: string
  label: string
  status: boolean
  type: string
}

export interface Types {
  componentType: string
  id: string
  name: string
  code: string
  css?: string
}

export interface PagePreviewProps {
  hero: {
    html: string
    css: string
    js: string
  }
  services: {
    html: string
    css: string
    js: string
  }
  whyChoose: {
    html: string
    css: string
    js: string
  }
  reviews: {
    html: string
    css: string
    js: string
  }
  beforeAfter: {
    html: string
    css: string
    js: string
  }
  textBlock: {
    html: string
    css: string
    js: string
  }
  videoBlock: {
    html: string
    css: string
    js: string
  }
}
export interface CodeViewProps {
  css: string
  html: string
  js: string
}

export interface TemplatePreviewProps {
  template: string
  templateCss: string
  combinedTemplateCss: string
  combinedHomepageCss: string
  combinedHomepageJs: string
  data: Record<string, string>
}

export interface TemplateCodeViewProps {
  template: string
  templateCss: string
  combinedTemplateCss: string
  combinedHomepageHtml: string
  combinedHomepageCss: string
  combinedHomepageJs: string
  data: Record<string, string>
}

export interface ComponentSelectionProps {
  title?: string
  selections: {
    label: string
    value: string
    onChange: (value: string) => void
    options: { id: number; label: string; name: string }[]
  }[]
}
