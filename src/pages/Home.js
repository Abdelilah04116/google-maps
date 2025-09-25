import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '10,000+', label: 'Reviews générées' },
    { number: '98%', label: 'Taux de satisfaction' },
    { number: '24/7', label: 'Support client' },
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      business: 'Restaurant Le Bistrot',
      rating: 5,
      text: 'Grâce à Reviews Maps Pro, mon restaurant a gagné 50 reviews en 2 semaines. Mon chiffre d\'affaires a augmenté de 30% !',
      avatar: 'MD'
    },
    {
      name: 'Pierre Martin',
      business: 'Salon de coiffure Style',
      rating: 5,
      text: 'Service professionnel et résultats rapides. Mes clients me trouvent plus facilement sur Google Maps maintenant.',
      avatar: 'PM'
    },
    {
      name: 'Sophie Laurent',
      business: 'Boutique Mode & Style',
      rating: 5,
      text: 'Excellent service ! Mes reviews Google ont considérablement amélioré ma visibilité en ligne.',
      avatar: 'SL'
    },
  ];

  const features = [
    {
      icon: '',
      title: 'Reviews Authentiques',
      description: 'Des reviews naturelles et crédibles qui respectent les guidelines Google.'
    },
    {
      icon: '',
      title: 'Résultats Rapides',
      description: 'Voir vos reviews apparaître en quelques jours seulement.'
    },
    {
      icon: '',
      title: '100% Sécurisé',
      description: 'Service confidentiel et respectueux de votre réputation.'
    },
    {
      icon: '',
      title: 'Boost de Visibilité',
      description: 'Améliorez votre classement Google Maps et attirez plus de clients.'
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Accueil"
        description="Boostez votre réputation Google Maps avec Reviews Maps Pro. Reviews authentiques, résultats garantis. Service professionnel pour développer votre business local."
        keywords="reviews google maps, réputation en ligne, avis clients, google my business, seo local, visibilité entreprise"
        canonical="/"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white pt-20 pb-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Boostez votre <span className="text-secondary-orange">réputation</span> Google Maps
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Générez des reviews authentiques et augmentez votre visibilité en ligne. 
                Nos experts vous accompagnent pour développer votre business local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing" className="btn-primary text-lg px-8 py-4">
                  Commencer maintenant
                </Link>
                <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  {/*<div className="w-20 h-20 bg-secondary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">⭐</span>
                  </div>*/}
                  <h3 className="text-2xl font-bold mb-4">Résultats Garantis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Reviews générées</span>
                      <span className="font-bold text-secondary-orange">+150%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Visibilité Google</span>
                      <span className="font-bold text-secondary-orange">+200%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nouveaux clients</span>
                      <span className="font-bold text-secondary-orange">+80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background-light section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-text-dark font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Pourquoi choisir Reviews Maps Pro ?
            </h2>
            <p className="text-xl text-text-dark max-w-3xl mx-auto">
              Nous offrons des solutions professionnelles pour améliorer votre présence en ligne 
              et attirer plus de clients vers votre business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-dark">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-text-dark">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
                    <p className="text-sm text-text-dark">{testimonial.business}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary-orange text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-text-dark italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à booster votre business ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'entrepreneurs qui ont déjà transformé leur réputation en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing#tarifs" className="btn-primary text-lg px-8 py-4">
              Voir nos tarifs
            </a>
            <a href="/contact#form-contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
