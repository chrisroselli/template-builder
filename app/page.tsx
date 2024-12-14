import App from "@/app/App";
import {sql} from '@vercel/postgres';
import {PageCompRow, TemplateCompRow, TemplateRow} from "@/app/types/types";

export default async function Home() {
  const [pageCompRows, templateCompRows, templatesRows] = await Promise.all([
    sql<PageCompRow>`SELECT * FROM page_components`,
    sql<TemplateCompRow>`SELECT * FROM template_components`,
    sql<TemplateRow>`SELECT * FROM templates`
  ]);

  const templates = templatesRows.rows;
  const templateComps = templateCompRows.rows;
  const pageComps = pageCompRows.rows;

  return (
    <main className="container mx-auto p-4">
      <App templates={templates} templateComps={templateComps} pageComps={pageComps}  />
    </main>
  );
}