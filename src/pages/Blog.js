import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openArticle, setOpenArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'seo', name: 'SEO & Visibilité' },
    { id: 'reputation', name: 'Gestion de réputation' },
    { id: 'google-maps', name: 'Google Maps' },
    { id: 'business', name: 'Business' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Pourquoi les Google Reviews boostent votre business',
      excerpt: 'Découvrez comment les reviews Google Maps peuvent transformer votre visibilité en ligne et attirer plus de clients vers votre entreprise.',
      content: `
      <h2>1. Les Google Reviews : un levier de confiance pour votre entreprise</h2>
      <p><strong>Les avis Google</strong> sont devenus un critère essentiel pour la réputation en ligne de toute entreprise locale. Plus de 90% des consommateurs consultent les avis avant de choisir un commerce ou un service. Une fiche Google My Business bien notée attire naturellement plus de clients et améliore la visibilité sur Google Maps.</p>
      <ul>
        <li>Augmentation du taux de clics sur votre fiche</li>
        <li>Meilleur positionnement dans Google Maps</li>
        <li>Preuve sociale immédiate et rassurante</li>
      </ul>
      <h2>2. Impact direct sur le référencement local (SEO local)</h2>
      <p>Google valorise les entreprises actives et bien notées. Plus vous avez d’avis positifs, plus votre <strong>visibilité locale</strong> augmente. Les mots-clés présents dans les avis contribuent aussi à votre référencement organique.</p>
      <blockquote>“Depuis que j’ai boosté mes reviews, j’apparais toujours dans le top 3 sur Maps !” — Client satisfait</blockquote>
      <h3>Facteurs SEO influencés par les avis :</h3>
      <ol>
        <li>Nombre d’avis et note moyenne</li>
        <li>Récence des avis</li>
        <li>Mots-clés utilisés par les clients</li>
        <li>Réponses du propriétaire</li>
      </ol>
      <h2>3. Exemples concrets d’impact sur le business</h2>
      <figure>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" alt="Exemple de fiche Google Maps optimisée" style="border-radius:12px;max-width:100%" />
        <figcaption>Exemple de fiche Google Maps optimisée avec de nombreux avis positifs</figcaption>
      </figure>
      <p>Un restaurant à Paris est passé de 3,8 à 4,5 étoiles en 2 mois grâce à une stratégie d’avis. Résultat : +40% de réservations et une présence constante dans le pack local Google Maps.</p>
      <h2>4. Conseils pour maximiser l’impact de vos Google Reviews</h2>
      <ul>
        <li>Répondez à chaque avis, même négatif, pour montrer votre professionnalisme</li>
        <li>Encouragez vos clients à laisser un commentaire détaillé</li>
        <li>Actualisez régulièrement vos informations sur Google My Business</li>
        <li>Utilisez des <em>call-to-action</em> dans vos communications ("Laissez-nous un avis sur Google !")</li>
      </ul>
      <h3>Exemple de message à envoyer à vos clients :</h3>
      <blockquote>"Merci d’avoir choisi notre service ! Votre avis compte beaucoup pour nous. Pourriez-vous partager votre expérience sur Google Maps ?"</blockquote>
      <h2>5. Les erreurs à éviter avec les Google Reviews</h2>
      <ul>
        <li>Ne jamais acheter de faux avis non naturels (risque de sanction Google)</li>
        <li>Ne pas répondre aux avis négatifs</li>
        <li>Laisser des informations obsolètes sur votre fiche</li>
      </ul>
      <h2>6. Statistiques clés sur l’importance des avis Google</h2>
      <table style="width:100%;border-collapse:collapse;margin:1em 0;">
        <thead>
          <tr style="background:#F5F5F5">
            <th style="padding:8px;border:1px solid #ddd;">Chiffre</th>
            <th style="padding:8px;border:1px solid #ddd;">Signification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">93%</td>
            <td style="padding:8px;border:1px solid #ddd;">des consommateurs lisent les avis en ligne</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">68%</td>
            <td style="padding:8px;border:1px solid #ddd;">font plus confiance à une entreprise avec des avis positifs</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">+35%</td>
            <td style="padding:8px;border:1px solid #ddd;">d’augmentation de trafic constatée après une amélioration de la note Google</td>
          </tr>
        </tbody>
      </table>
      <h2>7. Ressources utiles pour aller plus loin</h2>
      <ul>
        <li><a href="https://support.google.com/business/answer/3474122?hl=fr" target="_blank" rel="noopener">Guide officiel Google My Business</a></li>
        <li><a href="https://www.journaldunet.com/business/dictionnaire-du-marketing/1205537-google-my-business-definition-traduction-et-synonymes/" target="_blank" rel="noopener">Définition Google My Business (JDN)</a></li>
      </ul>
      <h2>Conclusion</h2>
      <p>Les <strong>Google Reviews</strong> sont un atout incontournable pour développer votre business local, améliorer votre SEO et attirer de nouveaux clients. Mettez en place une stratégie d’avis efficace et surveillez régulièrement votre réputation en ligne pour rester compétitif sur Google Maps.</p>
    `,
      category: 'google-maps',
      author: 'Marie Dubois',
      date: '2024-01-15',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Comment gérer votre réputation en ligne efficacement',
      excerpt: 'Apprenez les meilleures pratiques pour surveiller et améliorer votre réputation digitale sur tous les canaux.',
      content: `
      <h2>Introduction à la gestion de la réputation en ligne</h2>
      <p>La <strong>gestion de la réputation en ligne</strong> est devenue essentielle pour toute entreprise moderne. Avec l’essor des réseaux sociaux et des plateformes d’avis comme Google Maps, chaque commentaire ou review peut influencer la perception de votre marque.</p>
      <h2>Pourquoi surveiller sa réputation ?</h2>
      <ul>
        <li>Prévenir les crises de communication</li>
        <li>Identifier les axes d’amélioration de vos services</li>
        <li>Renforcer la confiance des clients potentiels</li>
      </ul>
      <h2>Outils pour surveiller votre e-réputation</h2>
      <ol>
        <li>Google Alerts pour recevoir des notifications sur votre marque</li>
        <li>Outils spécialisés comme Mention ou Brandwatch</li>
        <li>Suivi des avis sur Google My Business et autres plateformes</li>
      </ol>
      <figure>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" alt="Surveillance de la réputation en ligne" style="border-radius:12px;max-width:100%" />
        <figcaption>Surveillance active de la réputation d’une entreprise sur le web</figcaption>
      </figure>
      <h2>Comment réagir aux avis négatifs ?</h2>
      <blockquote>“Un client mécontent peut devenir votre meilleur ambassadeur si vous répondez avec professionnalisme.”</blockquote>
      <ul>
        <li>Répondez rapidement et de façon personnalisée</li>
        <li>Proposez une solution concrète</li>
        <li>Restez courtois et professionnel en toutes circonstances</li>
      </ul>
      <h2>Construire une image positive sur Google Maps</h2>
      <p>Encouragez vos clients satisfaits à laisser un avis positif. Plus vous avez d’avis authentiques, plus votre <strong>réputation digitale</strong> s’améliore.</p>
      <h3>Statistiques sur la réputation en ligne :</h3>
      <table style="width:100%;border-collapse:collapse;margin:1em 0;">
        <thead>
          <tr style="background:#F5F5F5">
            <th style="padding:8px;border:1px solid #ddd;">Indicateur</th>
            <th style="padding:8px;border:1px solid #ddd;">Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">80%</td>
            <td style="padding:8px;border:1px solid #ddd;">des clients changent d’avis après avoir lu une réponse professionnelle</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">60%</td>
            <td style="padding:8px;border:1px solid #ddd;">des entreprises surveillent activement leur réputation</td>
          </tr>
        </tbody>
      </table>
      <h2>Ressources complémentaires</h2>
      <ul>
        <li><a href="https://www.reputationvip.com/fr/" target="_blank" rel="noopener">Reputation VIP</a></li>
        <li><a href="https://www.avis-verifies.com/" target="_blank" rel="noopener">Avis Vérifiés</a></li>
      </ul>
      <h2>Conclusion</h2>
      <p>La gestion proactive de votre réputation en ligne est un investissement durable pour votre business. Surveillez, répondez, et valorisez chaque avis pour bâtir une image solide sur Google Maps et au-delà.</p>
    `,
      category: 'reputation',
      author: 'Pierre Martin',
      date: '2024-01-12',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: '10 stratégies SEO pour améliorer votre visibilité Google Maps',
      excerpt: 'Optimisez votre fiche Google My Business avec ces techniques SEO éprouvées pour dominer les résultats locaux.',
      content: `
      <h2>Introduction : Pourquoi le SEO local est-il crucial ?</h2>
      <p>Le <strong>SEO local</strong> est la clé pour attirer des clients proches de votre établissement. Google Maps est aujourd’hui le premier réflexe des consommateurs pour trouver un commerce ou un service à proximité.</p>
      <h2>10 stratégies SEO pour Google Maps</h2>
      <ol>
        <li>Optimisez votre fiche Google My Business (nom, adresse, téléphone, horaires)</li>
        <li>Ajoutez des photos de qualité et à jour</li>
        <li>Collectez régulièrement des avis clients authentiques</li>
        <li>Utilisez des mots-clés locaux dans vos descriptions</li>
        <li>Répondez à tous les avis, positifs comme négatifs</li>
        <li>Publiez des posts Google My Business</li>
        <li>Vérifiez la cohérence de vos informations sur tous les annuaires</li>
        <li>Obtenez des backlinks locaux</li>
        <li>Encouragez les check-ins et partages sur réseaux sociaux</li>
        <li>Analysez vos statistiques et ajustez votre stratégie</li>
      </ol>
      <figure>
        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600" alt="Optimisation SEO Google Maps" style="border-radius:12px;max-width:100%" />
        <figcaption>Optimisation SEO d’une fiche Google Maps</figcaption>
      </figure>
      <h2>Conseils avancés</h2>
      <ul>
        <li>Utilisez les questions/réponses sur votre fiche</li>
        <li>Créez des offres spéciales pour les utilisateurs Google Maps</li>
        <li>Surveillez vos concurrents et inspirez-vous de leurs bonnes pratiques</li>
      </ul>
      <h2>Conclusion</h2>
      <p>En appliquant ces stratégies, vous maximisez vos chances d’apparaître dans le top 3 local et d’attirer un trafic qualifié vers votre établissement.</p>
    `,
      category: 'seo',
      author: 'Sophie Laurent',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Les erreurs à éviter avec les Google Reviews',
      excerpt: 'Découvrez les pièges courants qui peuvent nuire à votre réputation et comment les éviter.',
      content: `
      <h2>Introduction</h2>
      <p>Beaucoup d’entreprises commettent des erreurs qui peuvent gravement nuire à leur réputation en ligne. Voici les principales erreurs à éviter pour garder une image positive sur Google Maps.</p>
      <h2>Top 5 des erreurs fréquentes</h2>
      <ol>
        <li>Ignorer les avis négatifs</li>
        <li>Répondre de façon agressive ou impersonnelle</li>
        <li>Ne pas encourager les clients satisfaits à laisser un avis</li>
        <li>Acheter des avis non authentiques</li>
        <li>Laisser des informations obsolètes sur sa fiche</li>
      </ol>
      <figure>
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" alt="Erreur à éviter sur Google Reviews" style="border-radius:12px;max-width:100%" />
        <figcaption>Erreur courante : ignorer les avis négatifs</figcaption>
      </figure>
      <h2>Comment corriger ces erreurs ?</h2>
      <ul>
        <li>Répondez toujours avec courtoisie et professionnalisme</li>
        <li>Faites de la veille sur votre e-réputation</li>
        <li>Formez votre équipe à la gestion des avis</li>
      </ul>
      <h2>Conclusion</h2>
      <p>En évitant ces pièges, vous améliorez durablement votre réputation en ligne et la confiance de vos clients sur Google Maps.</p>
    `,
      category: 'google-maps',
      author: 'Thomas Moreau',
      date: '2024-01-08',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Comment répondre aux avis négatifs sans aggraver la situation',
      excerpt: 'Maîtrisez l’art de la réponse aux avis négatifs pour transformer les critiques en opportunités.',
      content: `
      <h2>Pourquoi répondre aux avis négatifs ?</h2>
      <p>Répondre aux avis négatifs montre que vous êtes à l’écoute de vos clients et que vous cherchez à vous améliorer. Cela rassure les prospects et peut transformer une critique en opportunité.</p>
      <h2>Bonnes pratiques pour répondre</h2>
      <ul>
        <li>Remerciez toujours le client pour son retour</li>
        <li>Restez factuel et proposez une solution</li>
        <li>Invitez le client à poursuivre la discussion en privé si besoin</li>
      </ul>
      <blockquote>“Merci pour votre retour, nous allons tout mettre en œuvre pour améliorer votre expérience.”</blockquote>
      <h2>Exemple de réponse efficace</h2>
      <p><strong>Client :</strong> “Service trop lent.”<br/><strong>Réponse :</strong> “Merci pour votre retour. Nous sommes désolés pour l’attente et travaillons à améliorer la rapidité de notre service. Nous espérons vous revoir bientôt.”</p>
      <h2>Conclusion</h2>
      <p>Une bonne gestion des avis négatifs renforce la confiance et l’image de votre entreprise sur Google Maps.</p>
    `,
      category: 'reputation',
      author: 'Julie Bernard',
      date: '2024-01-05',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Le ROI des reviews : mesurer l’impact sur votre chiffre d’affaires',
      excerpt: 'Apprenez à calculer le retour sur investissement de vos efforts de gestion de réputation.',
      content: `
      <h2>Qu’est-ce que le ROI des reviews ?</h2>
      <p>Le <strong>retour sur investissement</strong> (ROI) des avis clients se mesure par l’impact direct sur le chiffre d’affaires, la fidélisation et l’acquisition de nouveaux clients.</p>
      <h2>Comment mesurer ce ROI ?</h2>
      <ol>
        <li>Analysez l’évolution de votre note Google</li>
        <li>Suivez le nombre de nouveaux clients après une campagne d’avis</li>
        <li>Calculez l’augmentation du chiffre d’affaires liée à l’amélioration de la réputation</li>
      </ol>
      <figure>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="ROI des reviews Google" style="border-radius:12px;max-width:100%" />
        <figcaption>Le ROI des reviews Google sur le business</figcaption>
      </figure>
      <h2>Conseils pour maximiser le ROI</h2>
      <ul>
        <li>Intégrez la gestion des avis dans votre stratégie marketing</li>
        <li>Formez vos équipes à la relation client</li>
        <li>Utilisez les avis comme preuve sociale sur votre site web</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Mesurer et optimiser le ROI des reviews permet de justifier vos investissements en marketing digital et d’accroître durablement votre activité.</p>
    `,
      category: 'business',
      author: 'Marc Durand',
      date: '2024-01-03',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Empêche le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (openArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openArticle]);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Blog & Conseils"
        description="Découvrez nos conseils d'experts pour améliorer votre réputation en ligne, optimiser votre visibilité Google Maps et développer votre business local."
        keywords="conseils réputation en ligne, blog seo local, google maps optimisation, gestion avis clients, marketing digital local"
        canonical="/blog"
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Conseils
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez nos conseils d'experts pour améliorer votre réputation en ligne, 
            optimiser votre visibilité Google Maps et développer votre business.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background-light py-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-blue text-white'
                    : 'bg-white text-primary-blue hover:bg-primary-blue hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && featuredPost && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
              Article en vedette
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Article vedette
                    </span>
                    <span className="ml-4 text-sm text-text-dark">
                      {featuredPost.readTime} de lecture
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-text-dark mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-primary-dark">{featuredPost.author}</p>
                        <p className="text-sm text-text-dark">
                          {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn-primary"
                      onClick={() => setOpenArticle(featuredPost)}
                    >
                      Lire l'article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background-light">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
            {selectedCategory === 'all' ? 'Tous les articles' : `Articles - ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="ml-3 text-sm text-text-dark">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-dark mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-primary-dark text-sm">{post.author}</p>
                        <p className="text-xs text-text-dark">
                          {new Date(post.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-primary-blue hover:text-secondary-orange font-semibold transition-colors duration-300"
                      onClick={() => setOpenArticle(post)}
                    >
                      Lire →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-blue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers conseils et articles directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-secondary-orange"
            />
            <button className="bg-secondary-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      {/* MODAL ARTICLE */}
      {openArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={e => {
            if (e.target === e.currentTarget) setOpenArticle(null);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 relative animate-fade-in overflow-y-auto max-h-screen"
            onClick={e => e.stopPropagation()}
            style={{scrollBehavior:'smooth'}}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-secondary-orange text-2xl font-bold z-10"
              onClick={() => setOpenArticle(null)}
              aria-label="Fermer l'article"
            >
              ×
            </button>
            <SEOHead
              title={openArticle.title}
              description={openArticle.excerpt}
              keywords={openArticle.title + ', blog, reviews, google maps, seo'}
              canonical={`/blog/${openArticle.id}`}
              ogImage={openArticle.image}
              ogType="article"
            />
            <article className="p-8">
              <header>
                <h1 className="text-3xl font-bold text-primary-dark mb-4">{openArticle.title}</h1>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {openArticle.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">{openArticle.author}</p>
                    <p className="text-sm text-text-dark">
                      {new Date(openArticle.date).toLocaleDateString('fr-FR')} • {openArticle.readTime}
                    </p>
                  </div>
                </div>
              </header>
              <figure className="mb-6">
                <img
                  src={openArticle.image}
                  alt={openArticle.title}
                  className="w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <figcaption className="text-sm text-gray-500 mt-2">Illustration de l'article</figcaption>
              </figure>
              <section className="prose max-w-none text-text-dark" style={{fontSize:'1.1rem'}}
                dangerouslySetInnerHTML={{__html: openArticle.content}}
              />
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
