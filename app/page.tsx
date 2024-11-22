import App from "@/app/components/App";
import {sql} from '@vercel/postgres';
import {PageRow, TemplateRow} from "@/app/types/types";

export default async function Home() {
  const [pageRows, templatesRows] = await Promise.all([
    sql<PageRow>`SELECT * FROM pages`,
    sql<TemplateRow>`SELECT * FROM templates`
  ]);

  const pages = pageRows.rows;
  const templates = templatesRows.rows;

  return (
    <main className="container mx-auto p-4">
      <App pages={pages} templates={templates} />
    </main>
  );
}