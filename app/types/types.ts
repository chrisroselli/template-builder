export interface PageData {
  id: string;
  name: string;
  html: string;
  css: string;
}

export interface PageRow {
  id: number;
  comp_type: string;
  data: PageData;
}

export interface TemplateRow {
  id: number;
  name: string;
  borders: string;
  template_css: string;
  comp_type: string;
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
  hero: string;
  services: string;
  css: string;
}