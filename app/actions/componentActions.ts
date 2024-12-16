'use server'

import {sql} from '@vercel/postgres';

export async function submitComponent(formData: FormData) {
  const compType = formData.get('componentType') as string;
  const name = formData.get('componentName') as string;
  const html = formData.get('html') as string;
  const css = formData.get('css') as string;
  const label = name.split(' ').join('_').toLowerCase();
  const type = compType === 'Headers' || compType === 'Footers' ? 'temp' : 'comp';

  try {
    await sql`
        INSERT INTO components (comp_type, html, css, name, label, type)
        VALUES (${compType}, ${html}, ${css}, ${name}, ${label}, ${type})
    `;
    return { success: true, message: 'Component inserted successfully' };
  } catch (error) {
    console.error('Failed to insert component:', error);
    return { success: false, message: 'Failed to insert component', error: error instanceof Error ? error.message : String(error) };
  }
}

export async function deleteComponent(id: number) {
  try {
    // Attempt to delete the component with the given id
    const result = await sql`
      DELETE FROM components
      WHERE id = ${id}
    `;

    // Check if any row was actually deleted
    if (result.rowCount === 0) {
      return { success: false, message: 'Component not found' };
    }
    return { success: true, message: 'Component deleted successfully' };

  } catch (error) {
    console.error('Failed to delete component:', error);
    return {
      success: false,
      message: 'Failed to delete component',
      error: error instanceof Error ? error.message : String(error)
    };
  }
}