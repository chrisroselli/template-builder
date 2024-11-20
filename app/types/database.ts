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