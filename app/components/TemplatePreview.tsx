import React, {useEffect, useState} from 'react';
import {TemplateReplacerProps} from '../types/types';
import {replacePlaceholders} from '../utils/templateReplacer';

export default function TemplatePreview({ template, data }: TemplateReplacerProps) {
  const [replacedHtml, setReplacedHtml] = useState(template);

  useEffect(() => {
    const replaced = replacePlaceholders(template, data);
    setReplacedHtml(replaced);
  }, [template, data]);
  
  return <div dangerouslySetInnerHTML={{ __html: replacedHtml }} />;
}

