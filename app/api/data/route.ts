import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';
import {PageRow} from '@/app/types/database';

export async function GET() {
  try {
    const { rows } = await sql<PageRow>`SELECT * FROM pages`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}