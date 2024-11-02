import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Example query - adjust according to your table structure
    const { rows } = await sql`SELECT * FROM pets`;

    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
