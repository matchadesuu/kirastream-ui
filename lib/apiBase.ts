// Base URL for the separate backend API.
// Set NEXT_PUBLIC_API_BASE_URL in your environment (see .env.example).
// Falls back to same-origin ('') when unset, so apiUrl('/api/x') === '/api/x'.
export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/, '')

export function apiUrl(path: string): string {
  return `${API_BASE}${path}`
}
