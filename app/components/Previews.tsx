import type {PagePreviewProps} from "@/app/types/types";

export function PagePreview({hero, services}: PagePreviewProps) {

  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{hero.css}{services.css}</style>
      <div dangerouslySetInnerHTML={{__html: hero.html}}/>
      <div dangerouslySetInnerHTML={{__html: services.html}}/>
    </div>
  );
}