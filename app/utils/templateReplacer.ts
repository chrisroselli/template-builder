export function replacePlaceholders(
  template: string,
  data: Record<string, string>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data.hasOwnProperty(key) ? (data[key] ?? '') : match
  })
}
