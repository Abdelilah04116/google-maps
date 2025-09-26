import React from 'react';
import SEOHead from '../components/SEOHead';

const Legal = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Mentions légales"
        description="Mentions légales de Reviews Maps Pro. Informations sur l'entreprise, hébergement, propriété intellectuelle et conformité RGPD."
        keywords="mentions légales, reviews maps pro, informations légales, RGPD, conformité"
        canonical="/legal"
      />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mentions légales
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Informations légales concernant Reviews Maps Pro et nos services de gestion de réputation en ligne.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Informations sur l'entreprise</h2>
                <div className="text-text-dark space-y-2">
                  <p><strong>Raison sociale :</strong> Reviews Maps Pro</p>
                  <p><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</p>
                  <p><strong>Capital social :</strong> 10 000 €</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>Code APE :</strong> 6201Z</p>
                  <p><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Siège social</h2>
                <div className="text-text-dark">
                  <p>340 Bd Tah, Casablanca</p>
                  <p>Casablanca maroc</p>
                  <p>Téléphone : +33 1 23 45 67 89</p>
                  <p>Email : reviewsmaps.pro@gmail.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Directeur de publication</h2>
                <div className="text-text-dark">
                  <p>Marie Dubois, Présidente</p>
                  <p>Email : marie.dubois@reviews-maps-pro.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Hébergement</h2>
                <div className="text-text-dark">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong>Site web :</strong> https://vercel.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Propriété intellectuelle</h2>
                <div className="text-text-dark space-y-3">
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                  <p>La marque "Reviews Maps Pro" ainsi que le logo sont des marques déposées. Toute reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions pénales.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Responsabilité</h2>
                <div className="text-text-dark space-y-3">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse reviewsmaps.pro@gmail.com, en décrivant le problème de la manière la plus précise possible.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Liens hypertextes</h2>
                <div className="text-text-dark space-y-3">
                  <p>Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, il sortira du site reviews-maps-pro.com. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Cookies</h2>
                <div className="text-text-dark space-y-3">
                  <p>Le site reviews-maps-pro.com peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.</p>
                  <p>Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Droit applicable</h2>
                <div className="text-text-dark">
                  <p>Tout litige en relation avec l'utilisation du site reviews-maps-pro.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Contact</h2>
                <div className="text-text-dark">
                  <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                  <p>Email : reviewsmaps.pro@gmail.com</p>
                  <p>Téléphone : +33 1 23 45 67 89</p>
                  <p>Adresse : 340 Bd Tah, Casablanca, Casablanca maroc</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
