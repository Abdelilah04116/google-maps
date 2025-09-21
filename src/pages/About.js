import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const About = () => {
  const team = [
    {
      name: 'Marie Dubois',
      role: 'Fondatrice & CEO',
      description: 'Expert en marketing digital avec 10 ans d\'expérience dans la gestion de réputation en ligne.',
      image: 'MD',
      experience: '10 ans'
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Technique',
      description: 'Spécialiste SEO et Google My Business, il optimise la visibilité de nos clients.',
      image: 'PM',
      experience: '8 ans'
    },
    {
      name: 'Sophie Laurent',
      role: 'Responsable Client',
      description: 'Elle s\'assure que chaque client reçoit un service personnalisé et de qualité.',
      image: 'SL',
      experience: '6 ans'
    },
    {
      name: 'Thomas Moreau',
      role: 'Expert SEO Local',
      description: 'Passionné par le référencement local, il développe des stratégies sur mesure.',
      image: 'TM',
      experience: '7 ans'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Nous nous efforçons de fournir des services de la plus haute qualité à chaque client.'
    },
    {
      icon: '🤝',
      title: 'Transparence',
      description: 'Communication claire et honnête sur nos processus et résultats.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies pour améliorer nos services.'
    },
    {
      icon: '💡',
      title: 'Personnalisation',
      description: 'Chaque stratégie est adaptée aux besoins spécifiques de votre entreprise.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Fondation de Reviews Maps Pro',
      description: 'Création de l\'entreprise avec une vision claire : démocratiser l\'accès à une réputation en ligne de qualité.'
    },
    {
      year: '2021',
      title: 'Premier client satisfait',
      description: 'Notre premier client a vu son chiffre d\'affaires augmenter de 40% grâce à nos services.'
    },
    {
      year: '2022',
      title: 'Expansion de l\'équipe',
      description: 'Recrutement de 3 experts supplémentaires pour répondre à la demande croissante.'
    },
    {
      year: '2023',
      title: '500+ clients accompagnés',
      description: 'Atteinte d\'un jalon important avec plus de 500 entreprises satisfaites.'
    },
    {
      year: '2024',
      title: 'Innovation continue',
      description: 'Lancement de nouvelles fonctionnalités et amélioration constante de nos services.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="À propos"
        description="Découvrez Reviews Maps Pro, votre partenaire pour développer votre réputation en ligne. Équipe d'experts, mission claire, résultats garantis depuis 2020."
        keywords="à propos reviews maps pro, équipe réputation en ligne, experts google maps, histoire entreprise, mission société"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="text-secondary-orange">Reviews Maps Pro</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Depuis 2020, nous aidons les entreprises à développer leur réputation en ligne 
                et à attirer plus de clients grâce à des stratégies éprouvées et des résultats mesurables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing" className="btn-primary text-lg px-8 py-4">
                  Découvrir nos services
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-4xl">⭐</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                  <p className="text-blue-100">
                    Rendre accessible à toutes les entreprises les outils nécessaires 
                    pour développer une réputation en ligne solide et durable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Notre Mission</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                Aider les entreprises locales à développer leur réputation en ligne de manière 
                éthique et efficace. Nous croyons que chaque business mérite d'être visible 
                et reconnu pour la qualité de ses services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Notre Vision</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                Devenir la référence française en matière de gestion de réputation en ligne, 
                en démocratisant l'accès aux outils et stratégies qui permettent aux PME 
                de rivaliser avec les grandes entreprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-text-dark max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre approche 
              du service client et de la qualité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-text-dark">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-text-dark max-w-3xl mx-auto">
              Des experts passionnés qui mettent leur savoir-faire au service de votre succès.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary-orange font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-text-dark mb-3">
                  {member.experience} d'expérience
                </p>
                <p className="text-text-dark text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background-light section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-text-dark max-w-3xl mx-auto">
              Découvrez les étapes clés de notre développement et de notre engagement 
              envers l'excellence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-text-dark">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-blue to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
                <div className="text-blue-100">Reviews générées</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Taux de satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
                <div className="text-blue-100">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-orange text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous aider à développer votre réputation en ligne 
            et attirer plus de clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="bg-white text-secondary-orange hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Voir nos tarifs
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
