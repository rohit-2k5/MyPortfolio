'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { contactSection } from '@/lib/content/contact';
import { Button, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const {subtitle, title, paragraphs } = contactSection;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!formRef.current) return;

    setSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured. Please set EmailJS credentials in environment variables.');
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSuccess('Message sent — thank you!');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">{subtitle}</p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p className="text-lg" key={i}>
          {paragraph}
        </p>
      ))}

      {/* replace form markup with a card-style layout */}
      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 w-full">
        <div className="bg-gradient-to-br from-white/60 to-accent-light/10 dark:from-gray-900/60 dark:to-gray-800/40 p-6 md:p-8 rounded-2xl shadow-lg border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</span>
              <input
                name="from_name"
                required
                className="mt-1 block w-full rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
              <input
                name="reply_to"
                type="email"
                required
                className="mt-1 block w-full rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
                placeholder="you@example.com"
              />
            </label>

            <div className="md:col-span-2">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-1 block w-full rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 px-3 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="Write your message"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              {success && <p className="text-sm text-green-500">{success}</p>}
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            <div className="flex-shrink-0">
              <Button
                type="submit"
                size="lg"
                className="px-6 py-3 inline-flex items-center justify-center gap-3 min-w-[160px]"
                disabled={sending}
                aria-busy={sending}
              >
                <span className="flex items-center justify-center">
                  {sending && (
                    <svg
                      className="w-4 h-4 mr-2 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  )}

                  <span className="inline-block w-28 text-center">
                    {sending ? 'Sending...' : 'Send Message'}
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* NOTE: Replace the NEXT_PUBLIC_EMAILJS_* env vars with real values or set them in your .env.local file.
          Install the dependency before using: npm install @emailjs/browser */}
    </Wrapper>
  );
};

export default Contact;
