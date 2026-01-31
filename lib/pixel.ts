export const PIXEL_ID = '1229981235892203';

type UserData = {
    em?: string; // Email (will be hashed by server)
    ph?: string; // Phone (will be hashed by server)
    [key: string]: any;
};

export const sendPixelEvent = (eventName: string, data: any = {}) => {
    // Client-side Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, data);
    }
};

export const sendServerEvent = async (eventName: string, userData: UserData = {}, customData: any = {}) => {
    // Always trigger client-side first for immediate feedback/redundancy
    sendPixelEvent(eventName, customData);

    // Send to Server-Side Bridge
    try {
        const response = await fetch('/api/facebook-event.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                userData,
                customData,
                eventSourceUrl: window.location.href,
            }),
        });

        if (!response.ok) {
            console.warn('CAPI Error:', await response.text());
        }
    } catch (error) {
        console.warn('Failed to send Server Event:', error);
    }
};
