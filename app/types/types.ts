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

export interface HomepagePreviewProps {
  feature: string;
  cta: string;
  css: string;
}