import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_DYNAMIQUE: CurriculumSection = {
  id: 'bac-physique-dynamique',
  title: 'Dynamique - Mouvement des projectiles',
  description: 'Mouvement d\'un projectile dans le champ de pesanteur: hypothèses, équations du mouvement, trajectoire parabolique, résultats essentiels et cas particuliers.',
  concepts: [
    'Mouvement de projectile',
    'Champ de pesanteur',
    'Accélération constante',
    'Trajectoire parabolique',
    'Conditions initiales',
    'Vitesse initiale',
    'Angle de lancement',
    'Équations horaires',
    'Équation de la trajectoire',
    'Hauteur maximale',
    'Portée',
    'Temps de vol',
    'Lancement horizontal',
    'Conservation de l\'énergie',
    'Repère orthonormé',
    'Composantes de vitesse',
    'Composantes d\'accélération'
  ],
  objectives: [
    'Établir les équations horaires du mouvement d\'un projectile',
    'Déterminer l\'équation de la trajectoire y(x)',
    'Calculer la hauteur maximale atteinte',
    'Calculer la portée et le temps de vol',
    'Résoudre des problèmes de projectile avec conditions initiales variées',
    'Identifier les cas particuliers (lancement horizontal, même hauteur)',
    'Utiliser la conservation de l\'énergie pour vérifier les résultats',
    'Reconnaître les limites du modèle (frottements, variation de g)'
  ],
  content: {
    hypotheses: {
      titre: 'Hypothèses',
      contenu: `Accélération uniquement due à la pesanteur, constante : $\\vec{a} = (0, -g)$.
Frottements de l'air négligés.
Zone proche du sol, $g$ vertical et constant.
Projectile assimilé à un point.`,
      quand_douter: `Grandes vitesses, objets légers, vent, longues distances. La trajectoire n'est plus parabolique.
Variation forte d'altitude. $g$ n'est plus constant.`
    },
    repere_conditions_initiales: {
      titre: 'Repère et conditions initiales',
      repere: `Repère $(O, \\vec{i}, \\vec{j})$ :
$\\vec{i}$ horizontal vers la droite.
$\\vec{j}$ vertical vers le haut.`,
      conditions_initiales: `À $t=0$ :
$x(0) = x_0$, $y(0) = y_0$.
Vitesse initiale $v_0$, angle $\\alpha$ au-dessus de l'horizontale.
$v_{0x} = v_0 \\cos \\alpha$, $v_{0y} = v_0 \\sin \\alpha$.`
    },
    equations_fondamentales: {
      titre: 'Équations fondamentales',
      acceleration: `$a_x = 0$, $a_y = -g$.`,
      vitesse: `$v_x(t) = v_0 \\cos \\alpha$,
$v_y(t) = v_0 \\sin \\alpha - gt$.`,
      position: `$x(t) = x_0 + v_0 \\cos \\alpha \\, t$,
$y(t) = y_0 + v_0 \\sin \\alpha \\, t - \\frac{1}{2}gt^2$.`
    },
    equation_trajectoire: {
      titre: 'Équation de la trajectoire $y(x)$',
      derivation: `Avec $t = \\frac{x - x_0}{v_0 \\cos \\alpha}$ :
$y(x) = y_0 + \\tan \\alpha \\, (x - x_0) - \\frac{g}{2v_0^2 \\cos^2 \\alpha}(x - x_0)^2$.`,
      nature: `C'est une parabole tournée vers le bas.`
    },
    resultats_essentiels: {
      titre: 'Résultats à connaître immédiatement',
      temps_sommet: `Temps pour atteindre le sommet:
$t_H = \\frac{v_0 \\sin \\alpha}{g}$.`,
      hauteur_maximale: `Hauteur maximale:
$y_{\\text{max}} = y_0 + \\frac{v_0^2 \\sin^2 \\alpha}{2g}$.`,
      duree_vol: `Durée de vol, arrivée à $y_f$:
$T = \\frac{v_0 \\sin \\alpha + \\sqrt{v_0^2 \\sin^2 \\alpha + 2g(y_0 - y_f)}}{g}$.`,
      cas_meme_hauteur: `Cas même hauteur d'arrivée et de départ:
$T = \\frac{2v_0 \\sin \\alpha}{g}$, $R = \\frac{v_0^2}{g} \\sin(2\\alpha)$.
Le maximum $R_{\\text{max}}$ pour $\\alpha = 45°$ n'est vrai que dans ce cas.`
    },
    cas_particuliers: {
      titre: 'Cas particuliers',
      lancement_horizontal: `Lancement horizontal:
$x(t) = x_0 + v_0 t$,
$y(t) = y_0 - \\frac{1}{2}gt^2$,
$T = \\sqrt{\\frac{2y_0}{g}}$, $R = v_0 \\sqrt{\\frac{2y_0}{g}}$.`,
      norme_vitesse: `Norme de la vitesse:
$v(t) = \\sqrt{(v_0 \\cos \\alpha)^2 + (v_0 \\sin \\alpha - gt)^2}$.`,
      raccourci_energie: `Raccourci énergie:
$v^2 = v_0^2 - 2g(y - y_0)$.
À même hauteur, la vitesse revient à $v_0$.`
    },
    methode_standard: {
      titre: 'Méthode standard, tu la suis toujours',
      etapes: `1. Choisir le repère, dessiner.
2. Lister données et inconnues.
3. Écrire $x(t)$ et $y(t)$ avec $x_0$, $y_0$.
4. Trouver $t$ avec l'équation verticale, garder $t \\geq 0$.
5. Calculer $x$, $v_x$, $v_y$ et ce qu'on demande.
6. Vérifier unités, signes, cohérence physique.`
    },
    pieges_frequents: {
      titre: 'Pièges fréquents',
      liste: `- $\\sin$ et $\\cos$ inversés.
- Mauvais signe, $a_y = -g$.
- Oublier $y_0$ si départ en hauteur.
- Prendre la mauvaise racine du temps.
- Utiliser $R = \\frac{v_0^2}{g} \\sin(2\\alpha)$ alors que l'arrivée n'est pas à la même hauteur.`
    },
    exercices_corriges: {
      titre: 'Exercices corrigés',
      note: `Les 10 exercices et corrections sont exactement ceux de la partie anglaise, mêmes calculs et mêmes résultats, de Ex.1 à Ex.10.
Avec $g = 10 \\, \\text{m} \\cdot \\text{s}^{-2}$.`,
      valeur_g: `En contrôle, utiliser $g = 10 \\, \\text{m} \\cdot \\text{s}^{-2}$ ou $g = 9,81 \\, \\text{m} \\cdot \\text{s}^{-2}$ selon les instructions.`
    },
    methodes_enseignement: `L'AI doit:
1. Rappeler les hypothèses du modèle (champ uniforme, pas de frottements)
2. Guider dans le choix du repère et l'établissement des conditions initiales
3. Établir les équations horaires étape par étape
4. Montrer comment obtenir l'équation de la trajectoire y(x)
5. Calculer les grandeurs caractéristiques (hauteur max, portée, temps de vol)
6. Traiter les cas particuliers (lancement horizontal, même hauteur)
7. Utiliser la conservation de l'énergie comme vérification
8. Identifier les limites du modèle et quand il n'est plus valable`
  },
  exercises: [],
  difficulty: 'Moyen',
  estimatedTime: 60
};
