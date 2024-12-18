import { ComponentSelectionProps } from '@/app/types/types'

export default function ComponentSelection({
  title,
  selections,
}: ComponentSelectionProps) {
  return (
    <>
      <div className="text-lg font-semibold mb-4">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {selections.map(({ label, value, onChange, options }) => (
          <div key={label}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {label}
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              onChange={(e) => onChange(e.target.value)}
              value={value}
            >
              <option value="">Select {label}</option>
              {options.map((d) => (
                <option key={d.id} value={d.label}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </>
  )
}
