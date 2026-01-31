/// <reference types="vite/client" />
import emailjs from '@emailjs/browser';

// Environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_TEMPLATE_DIAGNOSIS_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_DIAGNOSIS_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const WEBHOOK_CONTACT = import.meta.env.VITE_WEBHOOK_CONTACT;
export const WEBHOOK_DIAGNOSIS = import.meta.env.VITE_WEBHOOK_DIAGNOSIS;

interface EmailData {
    [key: string]: unknown;
}

/**
 * Initializes EmailJS with the public key.
 * Should be called once, e.g., in App.tsx or on first usage.
 */
export const initEmailJS = () => {
    if (EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
};

/**
 * Sends an email using EmailJS.
 */
export const sendEmail = async (data: EmailData, templateId?: string) => {
    // If specific template provided, use it. Otherwise use the default contact template.
    const tid = templateId || EMAILJS_TEMPLATE_ID;

    if (!EMAILJS_SERVICE_ID || !tid || !EMAILJS_PUBLIC_KEY) {
        console.warn("EmailJS keys are missing!");
        // We return true to not block the flow (fallback to webhook/console) or false?
        // Better to throw error so UI knows.
        throw new Error("EmailJS configuration invalid");
    }

    return emailjs.send(
        EMAILJS_SERVICE_ID,
        tid,
        data,
        EMAILJS_PUBLIC_KEY
    );
};

/**
 * Sends data to a webhook URL.
 */
export const sendToWebhook = async (url: string, data: any) => {
    if (!url) {
        console.warn("Webhook URL missing!");
        return;
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // We don't always need to await the response body, just the status
        if (!response.ok) {
            console.error("Webhook failed:", response.statusText);
        }
    } catch (error) {
        console.error("Webhook error:", error);
        // Silent fail for webhook if email sent? Or should we log it.
    }
};
