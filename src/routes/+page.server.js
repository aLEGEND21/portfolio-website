import { WEBHOOK_URL } from '$env/static/private';

export const actions = {
	// Handle the POST request for the contact form
	default: async ({ request }) => {
		const formData = await request.formData();

		// Create the webhook data
		let data = {
			content: `
				## New Contact Form Submission

        **Name:** ${formData.get('name')}
        **Email:** ${formData.get('email')}
        **Message:** ${formData.get('message')}
      `.replace(/^\s+/gm, '')
		};

		// Send the webhook
		let resp = await fetch(WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		// Check for errors
		if (!resp.ok) {
			return {
				status: resp.status,
				body: await resp.text()
			};
		} else {
			return {
				status: 200,
				body: 'Success'
			};
		}
	}
};
