import type {PagePreviewProps} from "@/app/types/types";

export default function PagePreview({hero, services}: PagePreviewProps) {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-5 overflow-hidden">
      <style>{hero.css}{services.css}</style>
      <div dangerouslySetInnerHTML={{__html: hero.html}}/>
      <div dangerouslySetInnerHTML={{__html: services.html}}/>
    </div>
  );
}