import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json({ error: 'No se encontró el archivo' }, { status: 400 });
  }

  try {
    const blob = await put(file.name, file, {
      access: 'public',
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    return NextResponse.json(
      { error: 'Error al subir la imagen' }, 
      { status: 500 }
    );
  }
}