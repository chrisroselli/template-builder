'use server'

import {sql} from '@vercel/postgres';

export async function submitComponent(formData: FormData) {
  const type = formData.get('componentType') as string;
  const name = formData.get('componentName') as string;
  const html = formData.get('html') as string;
  const css = formData.get('css') as string;
  const label = name.split(' ').join('_').toLowerCase();

  try {
    await sql`
        INSERT INTO page_components (comp_type, html, css, name, label)
        VALUES (${type}, ${html}, ${css}, ${name}, ${label})
    `;
    return { success: true, message: 'Component inserted successfully' };
  } catch (error) {
    console.error('Failed to insert component:', error);
    return { success: false, message: 'Failed to insert component', error: error instanceof Error ? error.message : String(error) };
  }
}