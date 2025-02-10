import React, { useEffect, useRef } from 'react'

interface ResizableIframeProps {
  html: string
  css: string
  js: string
}

export default function ResizableIframe({
  html,
  css,
  js,
}: ResizableIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Function to update the iframe height
  const updateHeight = () => {
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document
      if (iframeDocument) {
        iframeRef.current.style.height =
          iframeDocument.body.scrollHeight + 20 + 'px'
      }
    }
  }

  // Set up the mutation observer to handle dynamic content changes
  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document
      if (iframeDocument) {
        // Initial height update
        updateHeight()

        const observer = new MutationObserver(() => {
          updateHeight()
        })

        observer.observe(iframeDocument.body, {
          childList: true,
          subtree: true,
          attributes: true,
        })

        // Clean up the observer on unmount
        return () => observer.disconnect()
      }
    }
  }, [])

  return (
    <iframe
      ref={iframeRef}
      onLoad={updateHeight}
      srcDoc={`<style>${css}</style>${html}<script>${js}</script>`}
      className="w-full"
      title="Preview"
    />
  )
}
