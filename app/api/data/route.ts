import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

// Define the data structure for a row
interface ExampleRow {
  id: number;
  data: {
    name: string;
    age: number;
    skills: string[];
  };
}

export async function GET() {
  try {
    const { rows } = await sql<ExampleRow>`SELECT * FROM example`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}