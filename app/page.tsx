import App from "@/app/components/App";
import {sql} from '@vercel/postgres';
import {PageRow} from '@/app/types/database';


const fetchData = async (): Promise<PageRow[]> => {
  const { rows } = await sql<PageRow>`SELECT * FROM pages`;
  return rows;
};

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="container mx-auto p-4">
      <App data={data}/>
    </main>
  );
}