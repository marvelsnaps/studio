/**
 * antiSave - best-effort client-side deterrents to prevent right-click save,
 * dragging images, basic clipboard copy and common print/save keyboard shortcuts.
 * Note: This only deters casual users. It cannot prevent screenshots or determined users.
 */
export function enableAntiSave() {
  if (typeof window === 'undefined') return

  // Block right-click context menu
  const onContext = (e: Event) => {
    const evt = e as MouseEvent
    // allow contextmenu on inputs
    const target = evt.target as HTMLElement | null
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return
    e.preventDefault()
  }

  // Prevent dragging images
  const onDragStart = (e: Event) => e.preventDefault()

  // Disable copy on images
  const onCopy = (e: ClipboardEvent) => {
    const selection = window.getSelection && window.getSelection()
    if (!selection || selection.toString().trim() === '') return
    // prevent copying of selections that include images or image urls
    e.preventDefault()
  }

  // Intercept common save/print shortcuts
  const onKeyDown = (e: KeyboardEvent) => {
    // Block PrintScreen key, Ctrl/Cmd+S, Ctrl/Cmd+P, Ctrl/Cmd+Shift+S
    const isMod = e.ctrlKey || e.metaKey
    if (e.key === 'PrintScreen' || (isMod && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'p' || (e.shiftKey && e.key.toLowerCase() === 's')))) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  window.addEventListener('contextmenu', onContext, { passive: false })
  window.addEventListener('dragstart', onDragStart, { passive: false })
  window.addEventListener('copy', onCopy, { passive: false })
  window.addEventListener('keydown', onKeyDown, { passive: false })

  // Return a cleanup function
  return function disableAntiSave() {
    window.removeEventListener('contextmenu', onContext)
    window.removeEventListener('dragstart', onDragStart)
    window.removeEventListener('copy', onCopy)
    window.removeEventListener('keydown', onKeyDown)
  }
}

export default enableAntiSave
