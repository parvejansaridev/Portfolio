// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

const contactItems = [
  { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FiPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'mohammad-parvej-ansari', href: personal.linkedin },
  { icon: <FiGithub />, label: 'GitHub', value: 'parvej-devloper', href: personal.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens the user's mail client with a pre-filled message — no backend required.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Contact</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">Let's build something</h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          Have a role, a project, or just a question about FastAPI? My inbox is open.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="glass rounded-2xl p-5 flex items-center gap-3 text-sm text-muted">
            <FiMapPin className="text-teal-400" /> {personal.location}
          </div>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-teal-400/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05] text-teal-400 group-hover:bg-teal-400 group-hover:text-[#06140F] transition-colors">
                {item.icon}
              </span>
              <div>
                <p className="text-xs text-muted">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Your email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="text-xs text-muted mb-1.5 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400/50 transition-colors resize-none placeholder:text-muted/60"
            />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
            <FiSend /> Send Message
          </button>
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-teal-400 text-sm font-mono"
            >
              ✓ Opening your mail client...
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-xs text-muted mb-1.5 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400/50 transition-colors placeholder:text-muted/60"
      />
    </div>
  );
}
