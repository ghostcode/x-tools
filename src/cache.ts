const cached = {}

function cache(key: string, fn: Function): any {
  if (typeof key !== 'string') {
    throw new Error('Key must be a string.')
  }
  if (cached[key]) {
    return cached[key]
  }
  const val = fn()
  cached[key] = val
  return val
}