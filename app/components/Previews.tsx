import type {PagePreviewProps, TemplatePreviewProps} from '../types/types';

export function TemplatePreview({header, footer, css}: TemplatePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{__html: header}}/>
      <div dangerouslySetInnerHTML={{__html: footer}}/>
    </div>
  );
}

interface PagePreviewProps {hero?: string}

interface PagePreviewProps {cta?: string}

export function PagePreview({cta, css, hero}: PagePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{__html: hero}}/>
      <div dangerouslySetInnerHTML={{__html: cta}}/>
    </div>
  );
}