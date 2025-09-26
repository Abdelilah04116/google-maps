import React from 'react';
import SEOHead from '../components/SEOHead';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Conditions générales de vente"
        description="Conditions générales de vente de Reviews Maps Pro. Modalités de commande, paiement, livraison et garanties pour nos services de reviews Google Maps."
        keywords="CGV, conditions générales vente, reviews maps pro, modalités commande, garanties"
        canonical="/terms"
      />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conditions générales de vente
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Modalités et conditions d'utilisation de nos services de gestion de réputation Google Maps.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Objet et champ d'application</h2>
                <div className="text-text-dark space-y-3">
                  <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Le vendeur :</strong> Reviews Maps Pro, société par actions simplifiée au capital de 10 000 €</li>
                    <li><strong>Le client :</strong> Toute personne physique ou morale souhaitant acquérir nos services</li>
                  </ul>
                  <p>Nos services comprennent la gestion de réputation en ligne, la génération de reviews Google Maps authentiques, et l'accompagnement SEO local.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Commandes et acceptation</h2>
                <div className="text-text-dark space-y-3">
                  <p>Les commandes peuvent être passées :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Via notre site web reviews-maps-pro.com</li>
                    <li>Par email à reviewsmaps.pro@gmail.com</li>
                    <li>Par téléphone au +33 1 23 45 67 89</li>
                  </ul>
                  <p>Toute commande implique l'acceptation sans réserve des présentes CGV. Le client déclare avoir pris connaissance des CGV avant de passer commande.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Tarifs et conditions de paiement</h2>
                <div className="text-text-dark space-y-3">
                  <p><strong>Tarifs :</strong> Les prix sont indiqués en euros TTC sur notre site web. Ils peuvent être modifiés à tout moment, les prix applicables étant ceux en vigueur au jour de la commande.</p>
                  
                  <p><strong>Packs disponibles :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pack Starter : 100 reviews - 100€</li>
                    <li>Pack Business : 200 reviews - 190€</li>
                    <li>Pack Enterprise : À partir de 200 reviews - 0,90€/review</li>
                  </ul>
                  
                  <p><strong>Modalités de paiement :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Virement bancaire</li>
                    <li>Chèque</li>
                    <li>Paiement en ligne sécurisé</li>
                  </ul>
                  
                  <p>Le paiement est exigible à la commande. En cas de retard de paiement, des pénalités de 3 fois le taux légal peuvent être appliquées.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Exécution des services</h2>
                <div className="text-text-dark space-y-3">
                  <p><strong>Délais de livraison :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pack Starter : 7-14 jours</li>
                    <li>Pack Business : 5-10 jours</li>
                    <li>Pack Enterprise : 3-7 jours</li>
                  </ul>
                  
                  <p><strong>Processus :</strong></p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Réception de la commande et du paiement</li>
                    <li>Analyse de la fiche Google My Business du client</li>
                    <li>Mise en œuvre de la stratégie de reviews</li>
                    <li>Livraison progressive des reviews authentiques</li>
                    <li>Rapport de livraison détaillé</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Garanties et responsabilité</h2>
                <div className="text-text-dark space-y-3">
                  <p><strong>Garantie de satisfaction :</strong> Nous offrons une garantie de satisfaction à 100%. Si le client n'est pas satisfait du service, un remboursement intégral sera effectué.</p>
                  
                  <p><strong>Garantie d'authenticité :</strong> Toutes les reviews générées sont authentiques et respectent les guidelines Google. Nous nous engageons à utiliser uniquement des méthodes éthiques et conformes.</p>
                  
                  <p><strong>Limitation de responsabilité :</strong> Notre responsabilité est limitée au montant de la commande. Nous ne saurions être tenus responsables des dommages indirects ou des pertes de chiffre d'affaires.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Obligations du client</h2>
                <div className="text-text-dark space-y-3">
                  <p>Le client s'engage à :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir des informations exactes et à jour</li>
                    <li>Respecter les guidelines Google My Business</li>
                    <li>Ne pas utiliser nos services à des fins illégales</li>
                    <li>Maintenir sa fiche Google My Business active</li>
                    <li>Collaborer de bonne foi avec notre équipe</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Confidentialité</h2>
                <div className="text-text-dark space-y-3">
                  <p>Reviews Maps Pro s'engage à :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Préserver la confidentialité des informations clients</li>
                    <li>Ne pas divulguer les stratégies mises en place</li>
                    <li>Respecter le secret professionnel</li>
                    <li>Protéger les données personnelles conformément au RGPD</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Force majeure</h2>
                <div className="text-text-dark space-y-3">
                  <p>Les parties ne pourront être tenues pour responsables si la non-exécution ou le retard dans l'exécution de l'une quelconque des obligations décrites dans les présentes CGV est dû à un cas de force majeure.</p>
                  <p>La force majeure s'entend de tout événement extérieur, imprévisible et irrésistible au sens de l'article 1148 du Code civil.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Résiliation</h2>
                <div className="text-text-dark space-y-3">
                  <p>En cas de manquement grave du client à ses obligations, Reviews Maps Pro se réserve le droit de résilier le contrat avec effet immédiat, sans préavis ni indemnité.</p>
                  <p>Le client peut également résilier le contrat sous réserve de respecter un préavis de 30 jours.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Droit applicable et juridiction</h2>
                <div className="text-text-dark space-y-3">
                  <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable.</p>
                  <p>À défaut d'accord amiable, les tribunaux français seront seuls compétents pour connaître de tout litige relatif aux présentes CGV.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Contact</h2>
                <div className="text-text-dark">
                  <p>Pour toute question concernant ces CGV :</p>
                  <p><strong>Email :</strong> reviewsmaps.pro@gmail.com</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                  <p><strong>Date d'entrée en vigueur :</strong> Janvier 2024</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
