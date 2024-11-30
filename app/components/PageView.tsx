import type {PagePreviewProps} from "@/app/types/types";
import {useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeView({hero, services}: PagePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>("css");

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2 border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === "css" ? "border-b-2 border-primary-dark text-primary-dark" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("css")}
        >
          CSS
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm ${
            activeTab === "html" ? "border-b-2 border-primary-dark text-primary-dark" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("html")}
        >
          HTML
        </button>
      </div>
      <div className="text-sm">
      {activeTab === "css" && (
        <SyntaxHighlighter language="css" style={atomOneDark}>
            {hero.css}
            {services.css}
        </SyntaxHighlighter>
      )}
      {activeTab === "html" && (
        <SyntaxHighlighter language="htmlbars" style={atomOneDark}>
          {hero.html}
          {services.html}
        </SyntaxHighlighter>
      )}
      </div>
    </div>
  );
}
