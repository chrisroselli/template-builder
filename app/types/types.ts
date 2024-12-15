export interface TemplateRow {
  id: number;
  name: string;
  borders: string;
  template_css: string;
  label: string;
}

export interface TemplateCompRow {
  id: number;
  comp_type: string;
  name: string;
  html: string;
  css: string;
  label: string;
}
export interface PageCompRow {
  id: number;
  comp_type: string;
  name: string;
  html: string;
  css: string;
  label: string;
  status: boolean;
}

export interface Types {
  componentType: string;
  id: string;
  name: string;
  code: string;
  css?: string;
}

export interface TemplateSection {
  headers: Types[];
  features: Types[];
  footers: Types[];
  ctas: Types[];
}

export interface TemplatePreviewProps {
  template: string;
  header: string;
  footer: string;
  css: string;
}

export interface PagePreviewProps {
  hero: {
    html: string;
    css: string;
  }
  services: {
    html: string;
    css: string;
  }
}
export interface CodeViewProps {
  css: string,
  html: string
}

export interface TemplateReplacerProps {
  template: string;
  data: Record<string, string>;
}