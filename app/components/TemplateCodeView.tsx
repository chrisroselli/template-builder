import React, { useEffect, useState } from 'react'
import { TemplateReplacerProps } from '../types/types'
import { replacePlaceholders } from '@/app/utils/templateReplacer'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Download } from 'lucide-react'

export default function TemplateCodeView({
  template,
  data,
  combinedTemplateCss,
  combinedHomepageCss,
}: TemplateReplacerProps) {
  const [replacedHtml, setReplacedHtml] = useState(template)
  const [activeTab, setActiveTab] = useState<string>('borders')
  console.log(data)
  useEffect(() => {
    const replaced = replacePlaceholders(template, data)
    setReplacedHtml(replaced)
  }, [template, data])

  const copyBtn = () => {
    navigator.clipboard.writeText(
      activeTab === 'css' ? combinedTemplateCss : replacedHtml,
    )
  }

  const downloadBtn = () => {
    const blob = new Blob(
      [activeTab === 'css' ? combinedTemplateCss : replacedHtml],
      { type: 'text/plain' },
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = activeTab === 'css' ? 'styles.css' : 'markup.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2 border-b border-gray-200">
        <div className="flex justify-end space-x-4 mb-2">
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'borders'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('borders')}
          >
            Borders
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'css'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('css')}
          >
            Template CSS
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'homepage-css'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('homepage-css')}
          >
            Homepage CSS
          </button>
        </div>
        <div className="flex justify-end space-x-4 mb-2">
          <button
            onClick={copyBtn}
            className="flex items-center px-3 py-1 bg-primary-dark text-white rounded-md hover:bg-primary"
          >
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </button>
          <button
            onClick={downloadBtn}
            className="flex items-center px-3 py-1 bg-primary-dark text-white rounded-md hover:bg-primary"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </button>
        </div>
      </div>
      <div className="text-sm">
        {activeTab === 'borders' && (
          <SyntaxHighlighter
            className="rounded-xl text-sm"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {replacedHtml}
          </SyntaxHighlighter>
        )}
        {activeTab === 'css' && (
          <SyntaxHighlighter
            className="rounded-xl text-sm"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedTemplateCss}
          </SyntaxHighlighter>
        )}
        {activeTab === 'homepage-css' && (
          <SyntaxHighlighter
            className="rounded-xl text-sm"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedHomepageCss}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
