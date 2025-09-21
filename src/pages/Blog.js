import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      content: 'Les Google Reviews sont devenues un élément crucial pour le succès des entreprises locales. Elles influencent directement le classement dans les résultats de recherche et la décision d\'achat des consommateurs...',
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
      content: 'La gestion de réputation en ligne est devenue essentielle pour toute entreprise. Avec 93% des consommateurs qui lisent les avis avant d\'acheter, il est crucial de maîtriser votre image digitale...',
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
      content: 'Le SEO local est différent du SEO traditionnel. Il nécessite une approche spécifique pour optimiser votre présence sur Google Maps et attirer des clients locaux...',
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
      content: 'Beaucoup d\'entreprises commettent des erreurs qui peuvent gravement nuire à leur réputation en ligne. Voici les principales erreurs à éviter...',
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
      excerpt: 'Maîtrisez l\'art de la réponse aux avis négatifs pour transformer les critiques en opportunités.',
      content: 'Recevoir un avis négatif peut être frustrant, mais c\'est aussi une opportunité de montrer votre professionnalisme et votre souci du client...',
      category: 'reputation',
      author: 'Julie Bernard',
      date: '2024-01-05',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Le ROI des reviews : mesurer l\'impact sur votre chiffre d\'affaires',
      excerpt: 'Apprenez à calculer le retour sur investissement de vos efforts de gestion de réputation.',
      content: 'Mesurer le ROI des reviews peut sembler complexe, mais c\'est essentiel pour justifier vos investissements en marketing digital...',
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
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="btn-primary"
                    >
                      Lire l'article
                    </Link>
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
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-blue hover:text-secondary-orange font-semibold transition-colors duration-300"
                    >
                      Lire →
                    </Link>
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
    </div>
  );
};

export default Blog;
