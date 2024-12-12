import type {PagePreviewProps, TemplatePreviewProps} from "@/app/types/types";

export function TemplatePreview({template, header, footer}: TemplatePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div dangerouslySetInnerHTML={{__html: template}}/>
      <div dangerouslySetInnerHTML={{__html: header}}/>
      <div dangerouslySetInnerHTML={{__html: footer}}/>
    </div>
  );
}

export function PagePreview({hero, services}: PagePreviewProps) {

  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{hero.css}{services.css}</style>
      <div dangerouslySetInnerHTML={{__html: hero.html}}/>
      <div dangerouslySetInnerHTML={{__html: services.html}}/>
    </div>
  );
}