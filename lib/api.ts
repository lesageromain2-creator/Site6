export type ContactPayload = {
  site_id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function postContact(payload: ContactPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL is not set');
  }

  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Contact request failed (${res.status})`);
  }

  return res.json().catch(() => ({}));
}

