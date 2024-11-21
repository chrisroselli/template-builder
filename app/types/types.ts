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

export interface Types {
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
  header: string;
  footer: string;
  css: string;
}

export interface PagePreviewProps {
  hero: PageData;
  services: PageData;
  css: string;
}

export interface Template {
  id: string;
  name: string;
  before_borders: string;
  borders: string;
  template_css: string;
  inline_css: string;
  index_file: string;
  components: string;
}