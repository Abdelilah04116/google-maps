import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pack2');

  const pricingPlans = [
    {
      id: 'pack1',
      name: 'Pack Starter',
      price: 100,
      reviews: 100,
      description: 'Parfait pour les nouveaux business',
      features: [
        '100 reviews Google Maps authentiques',
        'Livraison en 7-14 jours',
        'Support email inclus',
        'Garantie satisfaction',
        'Rapport de livraison détaillé'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'pack2',
      name: 'Pack Business',
      price: 190,
      reviews: 200,
      description: 'Le plus populaire pour les PME',
      features: [
        '200 reviews Google Maps authentiques',
        'Livraison en 5-10 jours',
        'Support prioritaire',
        'Garantie satisfaction',
        'Rapport de livraison détaillé',
        'Suivi personnalisé',
        'Conseils SEO inclus'
      ],
      popular: true,
      color: 'orange'
    },
    {
      id: 'pack3',
      name: 'Pack Enterprise',
      price: 0.9,
      reviews: 'Sur mesure',
      description: 'Pour les grandes entreprises',
      features: [
        'Reviews à partir de 200+',
        'Prix dégressif : 0.90€/review',
        'Livraison en 3-7 jours',
        'Support dédié 24/7',
        'Garantie satisfaction',
        'Rapport de livraison détaillé',
        'Suivi personnalisé',
        'Conseils SEO avancés',
        'Gestion de réputation complète'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'Les reviews sont-elles authentiques ?',
      answer: 'Oui, toutes nos reviews sont générées de manière naturelle et respectent les guidelines Google. Nous travaillons avec des utilisateurs réels pour garantir l\'authenticité.'
    },
    {
      question: 'Combien de temps faut-il pour voir les résultats ?',
      answer: 'Les reviews commencent à apparaître dans les 3-7 jours suivant la commande, avec une livraison complète en 7-14 jours selon le pack choisi.'
    },
    {
      question: 'Y a-t-il une garantie de satisfaction ?',
      answer: 'Absolument ! Nous offrons une garantie de satisfaction à 100%. Si vous n\'êtes pas satisfait, nous vous remboursons intégralement.'
    },
    {
      question: 'Puis-je commander plus de reviews plus tard ?',
      answer: 'Bien sûr ! Vous pouvez commander des reviews supplémentaires à tout moment. Contactez-nous pour un devis personnalisé.'
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleOrder = (plan) => {
    // Ici vous pouvez intégrer un système de paiement ou rediriger vers un formulaire
    alert(`Commande du ${plan.name} - ${plan.price}${plan.id === 'pack3' ? '/review' : ''}€`);
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Tarifs"
        description="Découvrez nos tarifs transparents pour les reviews Google Maps. Packs Starter, Business et Enterprise. Garantie satisfaction 100%. Devis personnalisé disponible."
        keywords="tarifs reviews google maps, prix avis clients, packs reviews, devis réputation en ligne, coût google my business"
        canonical="/pricing"
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tarifs transparents et compétitifs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choisissez le pack qui correspond à vos besoins. Tous nos forfaits incluent 
            notre garantie de satisfaction et un support client de qualité.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="tarifs" className="section-padding bg-background-light">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full ${
                  plan.popular ? 'ring-4 ring-secondary-orange scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-text-dark mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-blue">
                        {plan.price === 0.9 ? '0.90€' : `${plan.price}€`}
                      </span>
                      {plan.id === 'pack3' && (
                        <span className="text-text-dark">/review</span>
                      )}
                    </div>
                    <div className="text-lg font-semibold text-primary-blue">
                      {plan.reviews} reviews
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary-orange mr-3 mt-1">✓</span>
                        <span className="text-text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button
                      onClick={() => handleOrder(plan)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-secondary-orange hover:bg-orange-600 text-white'
                          : 'bg-primary-blue hover:bg-blue-700 text-white'
                      }`}
                    >
                      Commander maintenant
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
            Comparatif détaillé
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-primary-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Fonctionnalités</th>
                  <th className="px-6 py-4 text-center">Pack Starter</th>
                  <th className="px-6 py-4 text-center">Pack Business</th>
                  <th className="px-6 py-4 text-center">Pack Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Nombre de reviews</td>
                  <td className="px-6 py-4 text-center">100</td>
                  <td className="px-6 py-4 text-center">200</td>
                  <td className="px-6 py-4 text-center">200+</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Prix</td>
                  <td className="px-6 py-4 text-center">100€</td>
                  <td className="px-6 py-4 text-center">190€</td>
                  <td className="px-6 py-4 text-center">0.90€/review</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Délai de livraison</td>
                  <td className="px-6 py-4 text-center">7-14 jours</td>
                  <td className="px-6 py-4 text-center">5-10 jours</td>
                  <td className="px-6 py-4 text-center">3-7 jours</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Support client</td>
                  <td className="px-6 py-4 text-center">Email</td>
                  <td className="px-6 py-4 text-center">Prioritaire</td>
                  <td className="px-6 py-4 text-center">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Garantie satisfaction</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Conseils SEO</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓ Avancés</td>
                </tr>
              </tbody>
            </table>
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
          <p className="text-xl text-blue-100 mb-8">
            Choisissez votre pack et boostez votre réputation dès aujourd'hui
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
