import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Remove any <a> elements that appear in the document body.
if (typeof document !== 'undefined') {
  const removeAnchorsFromNode = (node: Node) => {
    if (!(node instanceof Element)) return
    // Remove any anchors contained in this node
    node.querySelectorAll('a').forEach(a => a.remove())
    // If the node itself is an anchor, remove it
    if (node.tagName === 'A') node.remove()
  }

  // Remove anchors already present in body
  document.body.querySelectorAll('a').forEach(a => a.remove())

  // Observe additions to the body and remove any anchors that get added
  const mo = new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const n of Array.from(m.addedNodes)) {
        removeAnchorsFromNode(n)
      }
    }
  })

  mo.observe(document.body, { childList: true, subtree: true })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
