export interface ExampleData {
  name: string;
  age: number;
  skills: string[];
}

export interface ExampleRow {
  id: number;
  data: ExampleData;
}