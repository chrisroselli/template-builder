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