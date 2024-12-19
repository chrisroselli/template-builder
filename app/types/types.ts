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

export interface TemplatePreviewProps {
  template: string
  header: string
  footer: string
  css: string
}

export interface PagePreviewProps {
  hero: {
    html: string
    css: string
  }
  services: {
    html: string
    css: string
  }
}
export interface CodeViewProps {
  css: string
  html: string
}

export interface TemplateReplacerProps {
  template: string
  combinedTemplateCss: string
  combinedHomepageHtml?: string
  combinedHomepageCss: string
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
