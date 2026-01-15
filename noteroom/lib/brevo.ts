const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_WAITLIST_LIST_ID = process.env.BREVO_WAITLIST_LIST_ID;
const BREVO_WAITLIST_WELCOME_EMAIL_TEMPLATE_ID = process.env.BREVO_WAITLIST_WELCOME_EMAIL_TEMPLATE_ID;

interface BrevoApiResponse {
  id?: string;
  messageId?: string;
  code?: string;
  message?: string;
}

export async function addContactToWaitlist(email: string): Promise<BrevoApiResponse> {
  if (!BREVO_API_KEY) {
    console.warn('BREVO_API_KEY not configured, skipping contact creation');
    return { message: 'Brevo not configured' };
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: BREVO_WAITLIST_LIST_ID ? [parseInt(BREVO_WAITLIST_LIST_ID)] : [],
      attributes: {
        SIGNUP_SOURCE: 'NoteRoom Waitlist',
      },
    }),
  });

  return response.json();
}

export async function sendWelcomeEmail(email: string): Promise<BrevoApiResponse> {
  if (!BREVO_API_KEY || !BREVO_WAITLIST_WELCOME_EMAIL_TEMPLATE_ID) {
    console.warn('Brevo email not configured, skipping welcome email');
    return { message: 'Brevo email not configured' };
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      templateId: parseInt(BREVO_WAITLIST_WELCOME_EMAIL_TEMPLATE_ID),
      to: [{ email }],
    }),
  });

  return response.json();
}
