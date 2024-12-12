import React, {useEffect, useState} from 'react';
import {replacePlaceholders} from '../utils/templateReplacer';
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

interface TemplateReplacerProps {
  template: string;
  data: Record<string, string>;
}

export function TemplateReplacer({ template, data }: TemplateReplacerProps) {
  const [replacedHtml, setReplacedHtml] = useState(template);

  useEffect(() => {
    const replaced = replacePlaceholders(template, data);
    setReplacedHtml(replaced);
  }, [template, data]);
  
  return <div dangerouslySetInnerHTML={{ __html: replacedHtml }} />;
}

export function TemplateReplacerView({ template, data }: TemplateReplacerProps) {
  const [replacedHtml, setReplacedHtml] = useState(template);
  const [activeTab, setActiveTab] = useState<string>("borders");

  useEffect(() => {
    const replaced = replacePlaceholders(template, data);
    setReplacedHtml(replaced);
  }, [template, data]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2 border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === "borders" ? "border-b-2 border-primary-dark text-primary-dark" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("borders")}
        >
          Borders
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === "css" ? "border-b-2 border-primary-dark text-primary-dark" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("css")}
        >
          Template CSS
        </button>
      </div>
      <div className="text-sm">
        {activeTab === "borders" && (
          <SyntaxHighlighter className="rounded-xl text-sm" language="htmlbars" style={atomOneDark}>{replacedHtml}</SyntaxHighlighter>
        )}
        {activeTab === "css" && (
          <SyntaxHighlighter className="rounded-xl text-sm" language="htmlbars" style={atomOneDark}>{replacedHtml}</SyntaxHighlighter>
        )}
      </div>
    </div>
      )
      ;
      }