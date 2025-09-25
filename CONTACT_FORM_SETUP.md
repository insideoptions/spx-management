# Contact Form Setup with Zapier Integration

## Overview
The contact form has been set up with Zapier webhook integration to automatically send email notifications when someone submits the form.

## Setup Instructions

### 1. Create Zapier Webhook
1. Log in to your Zapier account
2. Create a new Zap
3. Choose "Webhooks by Zapier" as the trigger
4. Select "Catch Hook" as the trigger event
5. Copy the webhook URL provided by Zapier

### 2. Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
2. Replace `YOUR_WEBHOOK_ID` and `YOUR_WEBHOOK_KEY` with your actual Zapier webhook URL in `.env.local`

### 3. Set up Email Action in Zapier
1. Add an action step in your Zap
2. Choose your email service (Gmail, Outlook, etc.)
3. Configure the email template with the form data:
   - **To**: Your email address (e.g., David@spxmgmt.com)
   - **Subject**: "New Contact Form Submission - SPX Management"
   - **Body**: Include the form fields:
     ```
     New contact form submission from SPX Management website:
     
     Name: {{firstName}} {{lastName}}
     Email: {{email}}
     Phone: {{phone}}
     Submitted: {{timestamp}}
     Source: {{source}}
     ```

### 4. Test the Integration
1. Turn on your Zap in Zapier
2. Submit a test form on your website
3. Check that you receive the email notification

## Form Features

### ✅ Implemented Features
- **Form Validation**: All fields are required
- **Loading State**: Shows spinner while submitting
- **Success Message**: Thank you message after successful submission
- **Error Handling**: Displays error message if submission fails
- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Adapts to light/dark theme

### Form Data Sent to Zapier
- `firstName`: User's first name
- `lastName`: User's last name
- `email`: User's email address
- `phone`: User's phone number
- `timestamp`: When the form was submitted (ISO format)
- `source`: Always set to "SPX Management Website"

### User Experience Flow
1. User fills out the contact form
2. Clicks "Submit" button
3. Button shows loading spinner with "Sending..." text
4. On success: Shows thank you message with green checkmark
5. On error: Shows error message and allows retry
6. User can click "Send Another Message" to submit again

## Troubleshooting

### Common Issues
1. **Form not submitting**: Check that the Zapier webhook URL is correctly set in `.env.local`
2. **No email received**: Verify your Zap is turned on and test it in Zapier
3. **Error message showing**: Check browser console for detailed error information

### Environment Variable Format
Make sure your `.env.local` file looks like this:
```
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/12345678/abcd1234/
```

Note: The `NEXT_PUBLIC_` prefix is required for Next.js to expose the variable to the client-side code.
