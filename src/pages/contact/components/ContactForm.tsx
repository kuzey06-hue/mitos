import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

const CONTACT_EMAIL = 'studio@mitostr.com';

export default function ContactForm() {
  const { t } = useTranslation('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = subject || `${t('hero.label')} — ${name}`;
    const mailBody = `${message}\n\n${t('form.nameLabel')}: ${name}\n${t('form.emailLabel')}: ${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  const inputClass =
    'w-full bg-transparent border-b border-background-300 pb-3 text-foreground-100 text-sm placeholder:text-foreground-700 focus:outline-none focus:border-primary-500 transition-colors duration-300';

  return (
    <section
      ref={ref}
      className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-6">
            {t('info.label')}
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-foreground-600 text-xs tracking-[0.15em] uppercase mb-2">
                {t('info.emailLabel')}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-heading italic text-foreground-100 text-xl md:text-2xl hover:text-primary-400 transition-colors duration-300"
              >
                {t('info.email')}
              </a>
            </div>
            <div>
              <p className="text-foreground-600 text-xs tracking-[0.15em] uppercase mb-2">
                {t('info.locationLabel')}
              </p>
              <p className="font-heading italic text-foreground-100 text-xl md:text-2xl">
                {t('info.location')}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-foreground-600 text-xs tracking-[0.15em] uppercase mb-3">
              {t('form.nameLabel')}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('form.namePlaceholder')}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-foreground-600 text-xs tracking-[0.15em] uppercase mb-3">
              {t('form.emailLabel')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('form.emailPlaceholder')}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-foreground-600 text-xs tracking-[0.15em] uppercase mb-3">
              {t('form.subjectLabel')}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t('form.subjectPlaceholder')}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-foreground-600 text-xs tracking-[0.15em] uppercase mb-3">
              {t('form.messageLabel')}
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('form.messagePlaceholder')}
              className={`${inputClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="inline-block text-foreground-50 text-xs tracking-[0.2em] uppercase border border-foreground-700 px-8 py-4 hover:border-primary-400 hover:text-primary-400 transition-colors duration-300"
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
