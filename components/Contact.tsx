import React, { useState } from 'react';
import { ChevronDown, Clock, MessageCircle, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { sendEmail, sendToWebhook, WEBHOOK_CONTACT } from '../lib/integrations';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const lastPartialEmail = React.useRef("");

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    // Simple validation and check if we already sent a partial for this email
    if (email && email.includes('@') && email !== lastPartialEmail.current && !isSuccess) {
      const form = e.target.closest('form');
      if (!form) return;

      const formData = new FormData(form);
      const data: any = Object.fromEntries(formData.entries());
      data.status = 'partial';
      data.source = 'Contact Form';

      // Send partial data only to Webhook (no email spam)
      sendToWebhook(WEBHOOK_CONTACT, data);
      lastPartialEmail.current = email;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data: any = Object.fromEntries(formData.entries());
    data.status = 'success';
    data.source = 'Contact Form'; // Useful for CRM

    try {
      // Parallel execution: Webhook (Always) + EmailJS (If configured)
      const tasks: Promise<any>[] = [
        sendToWebhook(WEBHOOK_CONTACT, data)
      ];

      // We only attempt EmailJS. If keys are missing, it will throw/warn but we catch it.
      // Or we can check inside sendEmail.
      tasks.push(sendEmail(data));

      if (window.dataLayer) {
        window.dataLayer.push({ event: 'gerou_lead', origin: 'contact_form' });
      }
      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: 'contact_form' });
      }

      await Promise.allSettled(tasks);

      // We consider success if at least one worked or just assume success to user.
      // Usually valid UI UX is to show success even if backend queues it.
      setIsSuccess(true);
      form.reset();

    } catch (error) {
      console.error("Erro no envio:", error);
      // Even if it fails, sometimes it's better to show specific error or generic?
      // If pure network error, alert.
      alert("Ocorreu um erro. Verifique se preencheu todos os campos ou tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 md:py-32 px-4 md:px-12 bg-white relative z-20">
      <div className="max-w-screen-xl mx-auto">

        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-brand-black leading-tight group cursor-default">
            {t('contact.subtitle')}<br />
            <span className="font-serif italic text-6xl md:text-7xl bg-gradient-to-r from-brand-black via-brand-green to-brand-black bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-700 hover:bg-right">
              {t('contact.title')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card: Form */}
          <div className="bg-brand-green rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-brand-green/10 relative overflow-hidden">

            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-green z-20 transition-all animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Check className="w-10 h-10 text-brand-green" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-serif italic mb-2">{t('contact.sent_title')}</h3>
                <p className="text-white/80 text-center max-w-xs">
                  {t('contact.sent_desc')} <br /> {t('contact.sent_desc2')}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-8 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-brand-green transition-all"
                >
                  {t('contact.send_another')}
                </button>
              </div>
            ) : null}

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-opacity duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
            >

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('contact.name')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">{t('contact.company')}</label>
                <input
                  type="text"
                  name="company"
                  placeholder={t('contact.company_ph')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('contact.email_ph')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all"
                  onBlur={handleEmailBlur}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">{t('contact.need')}</label>
                <div className="relative">
                  <select
                    name="service"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all cursor-pointer"
                  >
                    <option className="bg-brand-green text-white" value="">{t('contact.path')}</option>
                    <option className="bg-brand-green text-white" value="Branding e Estratégia">{t('contact.services.branding')}</option>
                    <option className="bg-brand-green text-white" value="Identidade Visual">{t('contact.services.visual')}</option>
                    <option className="bg-brand-green text-white" value="Editorial e Design">{t('contact.services.editorial')}</option>
                    <option className="bg-brand-green text-white" value="Web Design">{t('contact.services.web')}</option>
                    <option className="bg-brand-green text-white" value="Consultoria">{t('contact.services.consulting')}</option>
                    <option className="bg-brand-green text-white" value="Outros">{t('contact.services.other')}</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-brand-green font-semibold text-lg py-4 rounded-xl hover:bg-brand-light transition-colors duration-300 shadow-lg shadow-black/10 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    t('contact.send')
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Card: Call/Schedule (Light Gray Outline) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col h-full border border-gray-200">

            <div className="mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
                {/* Imagem substituída por placeholder similar (homem de óculos). Para usar a sua foto exata, salve-a no projeto e atualize o src. */}
                <img
                  src="/assets/IMG_1179.webp"
                  alt="Marcos Maciel"
                  width="96"
                  height="96"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-sans text-2xl font-medium text-brand-black mb-4">
                {t('contact.call_title')} <span className="text-brand-black/60 font-normal">{t('contact.call_desc')}</span>
              </h3>
            </div>

            <div className="mt-auto space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-gray/50 px-4 py-2 rounded-full text-sm font-medium text-brand-black/60 shadow-sm border border-brand-black/5">
                <Clock className="w-4 h-4" />
                {t('contact.duration')}
              </div>

              <a
                href="https://calendly.com/marcosmacielldg/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent border border-gray-200 text-brand-black font-medium text-lg py-4 rounded-xl hover:bg-brand-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                {t('contact.schedule')}
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20pelo%20site%21"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({ event: 'gerou_lead', origin: 'contact_whatsapp' });
                  }
                  if (window.fbq) {
                    window.fbq('track', 'Lead', { content_name: 'contact_whatsapp' });
                  }
                }}
                className="w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-medium text-lg py-4 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.whatsapp')}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;