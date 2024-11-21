import type {PagePreviewProps, TemplatePreviewProps} from "@/app/types/types";

export function TemplatePreview({header, footer, css}: TemplatePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{__html: header}}/>
      <div dangerouslySetInnerHTML={{__html: footer}}/>
    </div>
  );
}


export function PagePreview({hero, services, css}: PagePreviewProps) {

  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{__html: hero}}/>
      <div dangerouslySetInnerHTML={{__html: services}}/>
    </div>
  );
}