const fallback = () => Math.random().toString(16).slice(2)

export function uuid() {
  const crypto = globalThis.crypto

  if (!crypto?.randomUUID) return fallback()

  // `isSecureContext` is false only when a browser serves the page over plain HTTP, where `randomUUID` is unavailable.
  if (globalThis.isSecureContext === false) return fallback()

  try {
    return crypto.randomUUID()
  } catch {
    return fallback()
  }
}