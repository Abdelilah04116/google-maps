import React from 'react';
import SEOHead from '../components/SEOHead';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Politique de confidentialité"
        description="Politique de confidentialité de Reviews Maps Pro. Protection des données personnelles, conformité RGPD et utilisation des cookies."
        keywords="politique confidentialité, RGPD, protection données, cookies, reviews maps pro"
        canonical="/privacy"
      />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protection de vos données personnelles et respect de votre vie privée.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Collecte des données</h2>
                <div className="text-text-dark space-y-3">
                  <p>Reviews Maps Pro collecte les données personnelles que vous nous communiquez volontairement lors de :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'utilisation de notre formulaire de contact</li>
                    <li>La souscription à nos services</li>
                    <li>L'inscription à notre newsletter</li>
                    <li>La navigation sur notre site web</li>
                  </ul>
                  <p>Les données collectées incluent : nom, prénom, adresse email, numéro de téléphone, nom de l'entreprise, et tout autre information que vous choisissez de partager.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Finalités du traitement</h2>
                <div className="text-text-dark space-y-3">
                  <p>Vos données personnelles sont utilisées pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Fournir nos services de gestion de réputation</li>
                    <li>Améliorer la qualité de nos services</li>
                    <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Base légale du traitement</h2>
                <div className="text-text-dark space-y-3">
                  <p>Le traitement de vos données personnelles est basé sur :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Votre consentement</strong> pour l'envoi de communications marketing</li>
                    <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
                    <li><strong>Notre intérêt légitime</strong> pour améliorer nos services</li>
                    <li><strong>Le respect d'obligations légales</strong> (facturation, comptabilité)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Conservation des données</h2>
                <div className="text-text-dark space-y-3">
                  <p>Vos données personnelles sont conservées :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Données clients :</strong> 3 ans après la fin de la relation contractuelle</li>
                    <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                    <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                    <li><strong>Données comptables :</strong> 10 ans conformément à la législation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Partage des données</h2>
                <div className="text-text-dark space-y-3">
                  <p>Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers, sauf :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Avec votre consentement explicite</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Avec nos prestataires techniques (sous contrat de confidentialité)</li>
                    <li>En cas de fusion ou acquisition de notre entreprise</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Vos droits</h2>
                <div className="text-text-dark space-y-3">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
                    <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                    <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
                  </ul>
                  <p>Pour exercer ces droits, contactez-nous à : <strong>privacy@reviews-maps-pro.com</strong></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Cookies et technologies similaires</h2>
                <div className="text-text-dark space-y-3">
                  <p>Notre site utilise des cookies pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Améliorer votre expérience de navigation</li>
                    <li>Analyser le trafic et l'utilisation du site</li>
                    <li>Personnaliser le contenu</li>
                  </ul>
                  <p>Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Sécurité des données</h2>
                <div className="text-text-dark space-y-3">
                  <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'accès non autorisé</li>
                    <li>La divulgation accidentelle</li>
                    <li>La modification non autorisée</li>
                    <li>La destruction malveillante</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Transferts internationaux</h2>
                <div className="text-text-dark space-y-3">
                  <p>Vos données peuvent être transférées vers des pays situés en dehors de l'Union européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place conformément au RGPD.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Modifications de la politique</h2>
                <div className="text-text-dark space-y-3">
                  <p>Cette politique de confidentialité peut être mise à jour périodiquement. Nous vous informerons de tout changement significatif par email ou via notre site web.</p>
                  <p><strong>Dernière mise à jour :</strong> Janvier 2024</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Contact</h2>
                <div className="text-text-dark">
                  <p>Pour toute question concernant cette politique de confidentialité :</p>
                  <p><strong>Délégué à la protection des données :</strong> privacy@reviews-maps-pro.com</p>
                  <p><strong>Téléphone :</strong> +212649557522</p>
                  <p><strong>Adresse :</strong> 340 Bd Tah, Casablanca, Casablanca maroc</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
