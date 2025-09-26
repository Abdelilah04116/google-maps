import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Redirection vers Google Form avec les données préremplies
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfiloNa-OTfdkXx-AUoP1YsIPxA21aR3jCyX4ipK6tAj8S1sg/viewform';
    const params = new URLSearchParams({
      'entry.2005620554': formData.name,
      'entry.1045781291': formData.email,
      'entry.1166974658': formData.phone,
      'entry.839337160': formData.company,
      'entry.1386734267': formData.subject,
      'entry.15295044': formData.message
    });
    
    // Ouvre le Google Form dans un nouvel onglet avec les données préremplies
    window.open(`${googleFormUrl}?${params.toString()}`, '_blank');
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'reviewsmaps.pro@gmail.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: '📞',
      title: 'Téléphone',
      details: '+33 1 23 45 67 89',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: '📍',
      title: 'Adresse',
      details: '340 Bd Tah, Casablanca',
      description: 'Casablanca maroc'
    },
    {
      icon: '💬',
      title: 'Chat en direct',
      details: 'Disponible 24/7',
      description: 'Support instantané'
    }
  ];

  const faqs = [
    {
      question: 'Quel est le délai de livraison des reviews ?',
      answer: 'Le délai varie selon le pack choisi : 3-7 jours pour le Pack Enterprise, 5-10 jours pour le Pack Business, et 7-14 jours pour le Pack Starter.'
    },
    {
      question: 'Les reviews sont-elles garanties ?',
      answer: 'Oui, nous offrons une garantie de satisfaction à 100%. Si vous n\'êtes pas satisfait, nous vous remboursons intégralement.'
    },
    {
      question: 'Puis-je commander des reviews supplémentaires ?',
      answer: 'Absolument ! Vous pouvez commander des reviews supplémentaires à tout moment. Contactez-nous pour un devis personnalisé.'
    },
    {
      question: 'Comment puis-je suivre ma commande ?',
      answer: 'Vous recevrez un email de confirmation avec un lien de suivi. Notre équipe vous tiendra informé de l\'avancement de votre commande.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Contact"
        description="Contactez Reviews Maps Pro pour vos questions sur les reviews Google Maps. Support client 24/7, devis personnalisé, conseils d'experts. Réponse sous 24h."
        keywords="contact reviews maps pro, support client, devis personnalisé, conseil réputation en ligne, aide google maps"
        canonical="/contact"
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe d'experts est là pour vous accompagner 
            dans le développement de votre réputation en ligne.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section id="form-contact" className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center text-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-1">
                        {info.title}
                      </h3>
                      <p className="text-lg text-text-dark font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-text-dark">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Notre localisation
                </h3>
                <div className="bg-background-light rounded-lg p-8 text-center">
                  {/*<div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    📍
                  </div>*/}
                  <p className="text-text-dark font-medium mb-2">
                    340 Bd Tah, Casablanca
                  </p>
                  <p className="text-text-dark">
                    Casablanca maroc
                  </p>
                  {/*<button className="mt-4 bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Voir sur Google Maps
                  </button>*/}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-dark mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-dark mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Question générale</option>
                    <option value="pricing">Demande de devis</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                    placeholder="Décrivez votre projet ou votre question..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    ✅ Le formulaire Google s'est ouvert dans un nouvel onglet. Veuillez finaliser l'envoi depuis Google Forms.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-light section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
            Questions fréquentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-dark">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez nos packs de reviews et boostez votre réputation en ligne dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="btn-primary text-lg px-8 py-4">
              Voir nos tarifs
            </a>
            <a href="tel:+33123456789" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
