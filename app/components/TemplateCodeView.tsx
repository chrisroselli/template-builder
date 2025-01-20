import React, { useEffect, useState } from 'react'
import { TemplateCodeViewProps } from '../types/types'
import { replacePlaceholders } from '@/app/utils/templateReplacer'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyBtn from '@/app/components/CopyBtn'

export default function TemplateCodeView({
  template,
  data,
  combinedTemplateCss,
  combinedHomepageHtml,
  combinedHomepageCss,
  combinedHomepageJs,
}: TemplateCodeViewProps) {
  const [replacedHtml, setReplacedHtml] = useState(template)
  const [activeTab, setActiveTab] = useState<string>('borders')

  useEffect(() => {
    const replaced = replacePlaceholders(template, data)
    setReplacedHtml(replaced)
  }, [template, data])

  const copyBtn = () => {
    navigator.clipboard.writeText(
      activeTab === 'css'
        ? combinedTemplateCss
        : activeTab === 'homepage-css'
          ? `<style>\n${combinedHomepageCss}\n</style>`
          : activeTab === 'homepage-html'
            ? combinedHomepageHtml
            : templatePHP,
    )
  }

  const templatePHP = replacedHtml.replace(
    '{{combinedHomepageHtml}}',
    '[[content]]',
  )

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
              activeTab === 'homepage-html'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('homepage-html')}
          >
            Homepage HTML
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
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'homepage-js'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('homepage-js')}
          >
            Homepage JS
          </button>
        </div>
        <div className="flex justify-end space-x-4 mb-2">
          <CopyBtn
            copyBtn={copyBtn}
            tabs={
              activeTab === 'css'
                ? 'Template CSS'
                : activeTab === 'homepage-css'
                  ? 'Homepage CSS'
                  : activeTab === 'homepage-html'
                    ? 'Homepage HTML'
                    : activeTab === 'homepage-js'
                      ? 'Homepage JS'
                      : 'Borders'
            }
          />
        </div>
      </div>
      <div className="text-sm">
        {activeTab === 'borders' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {templatePHP}
          </SyntaxHighlighter>
        )}
        {activeTab === 'css' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedTemplateCss}
          </SyntaxHighlighter>
        )}
        {activeTab === 'homepage-html' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {`<div id="homepage">\n${combinedHomepageHtml}\n</div>`}
          </SyntaxHighlighter>
        )}
        {activeTab === 'homepage-css' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {`<style>\n${combinedHomepageCss}\n</style>`}
          </SyntaxHighlighter>
        )}
        {activeTab === 'homepage-js' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {`<script>\n${combinedHomepageJs}\n</script>`}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
