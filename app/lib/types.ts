export interface Template {
  id: string;
  name: string;
  beforeBordersFile: string;
  bordersFile: string;
  templateCSS: string;
  inlineCSS: string;
  indexFile: string;
}

export interface ComponentOption {
  id: string;
  name: string;
  code: string;
}

export interface Component {
  id: string;
  name: string;
  options: ComponentOption[];
  placeholder: string;
}

export interface SelectedComponent {
  id: string;
  option: string;
}