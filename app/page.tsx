import App from '@/app/App'
import { sql } from '@vercel/postgres'
import { CompRow, TemplateRow } from '@/app/types/types'
// TODO: Add suspense
// TODO: Locate storage set up
// TODO: Create local storage hook
export default async function Home() {
  const [compRows, templatesRows] = await Promise.all([
    sql<CompRow>`SELECT * FROM components`,
    sql<TemplateRow>`SELECT * FROM templates`,
  ])

  const templates = templatesRows.rows
  const comps = compRows.rows

  return (
    <main className="container mx-auto p-4 rounded-xl">
      <App templates={templates} comps={comps} />
    </main>
  )
}
