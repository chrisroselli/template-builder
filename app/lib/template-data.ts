import {
  gsBeforeBorders,
  gsBorders,
  gsTemplateCSS,
  gsInlineCSS,
  gsIndexFile,
  defaultHeader,
  defaultFooter,
  staticHero
} from "@/app/api/php/phpFiles";

import {
  nlBorders,
  nlTemplateCSS,

} from "@/app/api/a-new-leaf";

export const templates = [{
  id: "gs",
  name: "Gutter Shutter",
  beforeBordersFile: gsBeforeBorders,
  bordersFile: gsBorders,
  templateCSS: gsTemplateCSS,
  inlineCSS: gsInlineCSS,
  indexFile: gsIndexFile
},
{
  id: "nl",
  name: "A New Leaf",
  beforeBordersFile: "",
  bordersFile: nlBorders,
  templateCSS: nlTemplateCSS,
  inlineCSS: "",
  indexFile: ""
}];

export const componentOptions = [
  {
    id: "header",
    name: "Header",
    placeholder: "{{header}}",
    options: [
      { id: "default", name: "Default Header", code: defaultHeader },
      { id: "slim", name: "Slim", code: "" },
      { id: "bold", name: "Bold", code: "" },
    ]
  },
  {
    id: "hero",
    name: "Hero",
    placeholder: "{{hero}}",
    options: [
      { id: "static", name: "Static Hero", code: staticHero },
      { id: "slider", name: "Slider", code: "" },
      { id: "form", name: "Form", code: "" },
    ]
  },
  {
    id: "services",
    name: "Services section",
    placeholder: "{{services}}",
    options: [
      { id: "two", name: "Two Columns", code: "" },
      { id: "three", name: "Three Columns", code: "" },
      { id: "four", name: "Four Columns", code: "" },
    ]
  },
  {
    id: "reviews",
    name: "Reviews section",
    placeholder: "{{reviews}}",
    options: [
      { id: "vertSlider", name: "Vertical Slider", code: "" },
      { id: "horizSlider", name: "Horizontal Slider", code: "" }
    ]
  },
  {
    id: "footer",
    name: "Footer",
    placeholder: "{{footer}}",
    options: [
      { id: "default", name: "Default Footer", code: defaultFooter },
      { id: "slim", name: "Slim", code: "" }
    ]
  }
];