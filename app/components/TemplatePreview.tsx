import React, {useEffect, useState} from 'react';
import {TemplateReplacerProps} from '../types/types';
import {replacePlaceholders} from '../utils/templateReplacer';

export default function TemplatePreview({ template, css, data }: TemplateReplacerProps) {
  const [replacedHtml, setReplacedHtml] = useState(template);

  useEffect(() => {
    const replaced = replacePlaceholders(template, data);
    setReplacedHtml(replaced);
  }, [template, data]);
  
  return (
    <div className="transform translate-x-0 translate-y-0">
    <style>{css}</style>
      <div dangerouslySetInnerHTML={{__html: replacedHtml }} />
    </div>
  );
}

