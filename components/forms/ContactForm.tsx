'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import 'react-toastify/dist/ReactToastify.css';

import { postContact } from '@/lib/api';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message trop court'),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm({ siteId }: { siteId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      await postContact({
        site_id: siteId,
        ...values,
      });
      toast.success('Message envoyé. Nous revenons vers vous rapidement.');
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Erreur lors de l’envoi du message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <div className="grid gap-2">
          <label className="text-text/85">Nom</label>
          <input
            className="h-11 rounded-xl border border-border bg-background/40 px-4 text-text outline-none focus:border-accent/60"
            {...register('name')}
            placeholder="Votre nom"
          />
          {errors.name ? <p className="text-sm text-secondary">{errors.name.message}</p> : null}
        </div>

        <div className="grid gap-2">
          <label className="text-text/85">Email</label>
          <input
            className="h-11 rounded-xl border border-border bg-background/40 px-4 text-text outline-none focus:border-accent/60"
            {...register('email')}
            placeholder="vous@email.fr"
          />
          {errors.email ? <p className="text-sm text-secondary">{errors.email.message}</p> : null}
        </div>

        <div className="grid gap-2 sm:grid-cols-2 sm:items-start">
          <div className="grid gap-2">
            <label className="text-text/85">Téléphone (optionnel)</label>
            <input
              className="h-11 rounded-xl border border-border bg-background/40 px-4 text-text outline-none focus:border-accent/60"
              {...register('phone')}
              placeholder="04 78 .. .. .."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-text/85">Objet (optionnel)</label>
            <input
              className="h-11 rounded-xl border border-border bg-background/40 px-4 text-text outline-none focus:border-accent/60"
              {...register('subject')}
              placeholder="Billetterie, privatisation…"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-text/85">Message</label>
          <textarea
            className="min-h-[140px] rounded-xl border border-border bg-background/40 px-4 py-3 text-text outline-none focus:border-accent/60"
            {...register('message')}
            placeholder="Expliquez votre demande…"
          />
          {errors.message ? (
            <p className="text-sm text-secondary">{errors.message.message}</p>
          ) : null}
        </div>

        <button disabled={isSubmitting} className="btn-primary disabled:opacity-60">
          {isSubmitting ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>

      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}

