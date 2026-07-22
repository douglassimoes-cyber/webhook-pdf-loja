import { NextResponse } from 'next/server';
import { sendEbookEmail } from '@/lib/send-ebook-email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[webhook] Dados recebidos:', body);

    if (body) {
      await sendEbookEmail(body);
    }

    return NextResponse.json({ message: 'Webhook processado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('[webhook_error]', error);
    return NextResponse.json({ error: 'Erro ao processar webhook' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook ativo e funcionando!' }, { status: 200 });
}
