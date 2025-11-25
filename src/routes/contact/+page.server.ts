import { fail } from '@sveltejs/kit';
// import { sendEmail } from '$lib/server/email'; // Placeholder for email service

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const guests = data.get('guests');
    const date = data.get('date');

    // Basic server-side validation (Codex will handle robust Zod validation)
    if (!name || !email || !message) {
      return fail(400, { missing: true });
    }

    try {
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app: await sendEmail({ to: 'hello@zelalonurcan.com', ... })
      
      console.log('Form submitted:', { name, email, guests, date });

      return { success: true };
    } catch (error) {
      return fail(500, { error: 'Failed to send email' });
    }
  }
};
