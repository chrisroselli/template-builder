import type {PagePreviewProps, TemplatePreviewProps} from '../types/types';

export function TemplatePreview({ header, footer, css }: TemplatePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: header }} />
      <div dangerouslySetInnerHTML={{ __html: footer }} />
    </div>
  );
}

export function PagePreview({ feature, cta, css }: PagePreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: feature }} />
      <div dangerouslySetInnerHTML={{ __html: cta }} />
    </div>
  );
}