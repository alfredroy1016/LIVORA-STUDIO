# EmailJS Setup Guide for LIVORA Contact Form

## Overview
The contact form is now integrated with **EmailJS** for sending real emails without a backend server. Follow these steps to set it up.

---

## Step 1: Create an EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

---

## Step 2: Get Your Public Key

1. Log into your EmailJS dashboard
2. Navigate to **Account** → **API Keys**
3. Copy your **Public Key** (you'll need this)

---

## Step 3: Create an Email Service

1. In the dashboard, go to **Email Services**
2. Click **Create Service**
3. Choose **Gmail** (or any email provider you prefer)
4. Follow the setup instructions:
   - **For Gmail:**
     - Authenticate with your Gmail account
     - Allow EmailJS to access your account
     - Name your service (e.g., "Gmail Service")
     - Save the **Service ID**

---

## Step 4: Create an Email Template

1. Go to **Email Templates**
2. Click **Create Template**
3. Name it something like "Contact Form Template"
4. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Dear LIVORA Team,

You have received a new inquity from:

**Sender Details:**
- Name: {{from_name}}
- Phone: {{phone}}
- Email/Contact: {{from_email}}
- City: {{city}}
- Space Type: {{space_type}}

**Message:**
{{message}}

---

Please contact them at your earliest convenience.

Best regards,
LIVORA Contact Form
```

5. Save the template and copy the **Template ID**

---

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace these placeholders at the top:

```javascript
// Initialize EmailJS (replace with your Public Key from https://dashboard.emailjs.com/)
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

// ... in the submit function:
await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your EmailJS Service ID
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
  { ... }
)
```

### Example:
```javascript
emailjs.init('ufkXa1bC2d3eF4gH5iJkL6mN7oP8qRsT')

await emailjs.send(
  'service_abc123xyz',
  'template_xyz789abc',
  { ... }
)
```

---

## Step 6: Test the Contact Form

1. Start the development server: `npm run dev`
2. Navigate to the **Contact** section
3. Fill out the form and submit
4. You should receive an email at the address you authenticated with EmailJS

---

## Step 7: Add Your Actual Email (Optional)

To receive emails at `info@livorainteriorstudio.com`:

1. In your EmailJS Email Template, you can modify the email destination
2. Or, add a forwarding rule in your email provider to forward emails from the authenticated address to your studio email

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "init" error | Make sure you've installed `@emailjs/browser`: `npm install @emailjs/browser` |
| Emails not sending | Check your Service ID and Template ID are correct |
| CORS errors | EmailJS handles CORS automatically; ensure your Public Key is valid |
| Emails in spam | Check spam folder; ask users to mark as "not spam" |

---

## Environment Variables (Advanced)

For production, it's better to use environment variables. Create a `.env` file:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Then update `Contact.jsx`:

```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

// ... in submit function:
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { ... }
)
```

---

## Next Steps

Once EmailJS is working:
1. Test with various form inputs
2. Monitor the EmailJS dashboard for delivery status
3. Consider adding rate limiting (EmailJS free plan: 200 emails/day)
4. Deploy your site (Vercel, Netlify, etc.)

---

**Need Help?** 
- EmailJS Docs: https://www.emailjs.com/docs/
- Discord Community: https://discord.gg/6VFj3nN

