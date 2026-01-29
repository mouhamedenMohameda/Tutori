import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_SUITES_AVANCEES: CurriculumSection = {
          id: 'bac-2023-ex6bis',
          title: 'Exercice 6bis - Suites avancées (4 points)',
          description: 'Suite récurrente avec transformation, justification de nature, raisonnement par récurrence, monotonie, calcul de somme',
          concepts: [
            'Suite récurrente',
            'Raisonnement par récurrence',
            'Monotonie de suite',
            'Transformation de suite',
            'Suite géométrique',
            'Calcul de somme'
          ],
          objectives: [
            'Vérifier des valeurs de suite',
            'Justifier qu\'une suite n\'est ni arithmétique ni géométrique',
            'Démontrer par récurrence',
            'Étudier la monotonie',
            'Transformer une suite en suite géométrique',
            'Calculer une somme'
          ],
          content: {
            resume_cours: {
              suite_recurrente_avancee: {
                definition: "Suite définie par u_{n+1} = f(n, u_n) où f dépend à la fois de n et de u_n",
                exemple: "u_{n+1} = (3n/(n+1))×u_n + (4/(n+1))",
                methode: "Chercher un changement de variable v_n = g(n, u_n) pour transformer en suite géométrique"
              },
              justification_nature: {
                ni_arithmetique: "Pour montrer qu'une suite n'est pas arithmétique, montrer que u_{n+1} - u_n n'est pas constant",
                ni_geometrique: "Pour montrer qu'une suite n'est pas géométrique, montrer que u_{n+1}/u_n n'est pas constant"
              },
              calcul_somme_ponderee: {
                definition: "Somme de la forme S_n = ∑_{i=1}^{n} a_i × u_i où les coefficients a_i dépendent de i",
                methode: "Utiliser une transformation v_n = a_n×u_n + b pour simplifier la somme",
                exemple: "Si v_n = nu_n + 2, alors S_n = ∑_{i=1}^{n} i × u_i peut s'exprimer en fonction de v_n"
              }
            },
            enonce_complet: `Soit (u_n) la suite numérique définie par u₁ = 1 et pour tout entier n ≥ 1:
u_{n+1} = (3n/(n+1)) × u_n + (4/(n+1))

1. a) Vérifier que u₂ = 7/2 et u₃ = 25/3. (0.5pt)
b) Justifier que la suite (u_n) n'est ni arithmétique, ni géométrique. (0.5pt)
c) Montrer par récurrence que pour tout n ∈ ℕ*: u_n > 0. (0.75pt)
d) Étudier la monotonie de la suite (u_n). (0.75pt)

2. On considère la suite (v_n) définie pour tout entier n ≥ 1 par: v_n = nu_n + 2
a) Montrer que (v_n) est une suite géométrique dont on précisera la raison et le premier terme. (1pt)
b) Exprimer v_n en fonction de n. (0.5pt)
c) Montrer que pour tout entier n ≥ 1: u_n = (3^n - 2)/n. (0.5pt)

3. Soit S_n = ∑_{i=1}^{n} i × u_i.
À l'aide de v_n, exprimer la somme S_n en fonction de n. (0.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Guider pour vérifier les valeurs u₂ et u₃
2. Expliquer comment justifier qu'une suite n'est ni arithmétique ni géométrique
3. Guider le raisonnement par récurrence étape par étape
4. Aider à étudier la monotonie en calculant u_{n+1} - u_n
5. Expliquer la méthode de transformation avec v_n = nu_n + 2
6. Guider pour exprimer la somme S_n en utilisant v_n
7. **Contextualisation Mauritanienne :** Utiliser des exemples de croissance démographique avec facteurs variables, ou d'investissements avec taux variables`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1a) Vérifier que u₂ = 7/2 et u₃ = 25/3**
Suite définie par: u₁ = 1 et u_{n+1} = (3n/(n+1)) × u_n + (4/(n+1))`,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (0.5 point)**

**CALCUL DE u₂:**
u₂ = u_{1+1} = (3×1/(1+1)) × u₁ + (4/(1+1))
   = (3/2) × 1 + (4/2)
   = 3/2 + 2
   = 3/2 + 4/2
   = **7/2** ✓

**CALCUL DE u₃:**
u₃ = u_{2+1} = (3×2/(2+1)) × u₂ + (4/(2+1))
   = (6/3) × (7/2) + (4/3)
   = 2 × (7/2) + 4/3
   = 7 + 4/3
   = 21/3 + 4/3
   = **25/3** ✓

**RÉPONSE FINALE:**
u₂ = 7/2 et u₃ = 25/3`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 1b) Justifier que (u_n) n'est ni arithmétique, ni géométrique**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**MÉTHODE:** Pour montrer qu'une suite n'est pas arithmétique (resp. géométrique), il suffit de montrer que la différence (resp. le rapport) n'est pas constante.

**VÉRIFICATION - SUITE ARITHMÉTIQUE:**
Si (u_n) était arithmétique, alors u_{n+1} - u_n serait constant.

Calculons:
• u₂ - u₁ = 7/2 - 1 = 7/2 - 2/2 = 5/2
• u₃ - u₂ = 25/3 - 7/2 = 50/6 - 21/6 = 29/6

Comme 5/2 = 15/6 ≠ 29/6, la différence n'est pas constante.
Donc **(u_n) n'est pas arithmétique**.

**VÉRIFICATION - SUITE GÉOMÉTRIQUE:**
Si (u_n) était géométrique, alors u_{n+1}/u_n serait constant.

Calculons:
• u₂/u₁ = (7/2)/1 = 7/2
• u₃/u₂ = (25/3)/(7/2) = (25/3) × (2/7) = 50/21

Comme 7/2 = 147/42 ≠ 100/42 = 50/21, le rapport n'est pas constant.
Donc **(u_n) n'est pas géométrique**.

**RÉPONSE FINALE:**
La suite (u_n) n'est ni arithmétique, ni géométrique.`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 1c) Montrer par récurrence que pour tout n ∈ ℕ*: u_n > 0**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1c (0.75 point)**

**RAISONNEMENT PAR RÉCURRENCE:**

**PROPRIÉTÉ À DÉMONTRER:** Pour tout n ∈ ℕ*: u_n > 0

**ÉTAPE 1 - INITIALISATION (n = 1):**
u₁ = 1 > 0 ✓
La propriété est vraie au rang 1.

**ÉTAPE 2 - HÉRÉDITÉ:**
Supposons que pour un entier n ≥ 1 fixé, on ait u_n > 0 (hypothèse de récurrence).
Montrons que u_{n+1} > 0.

u_{n+1} = (3n/(n+1)) × u_n + (4/(n+1))

Comme n ≥ 1:
• 3n/(n+1) > 0 (car n > 0)
• 4/(n+1) > 0
• u_n > 0 (hypothèse de récurrence)

Donc:
u_{n+1} = (3n/(n+1)) × u_n + (4/(n+1)) > 0 + 0 = 0

La propriété est donc vraie au rang n+1.

**ÉTAPE 3 - CONCLUSION:**
Par le principe de récurrence, pour tout n ∈ ℕ*: u_n > 0.

**Exemple Mauritanien :** Ce raisonnement par récurrence permet de prouver qu'une quantité positive (comme le nombre d'étudiants à Nouakchott) reste toujours positive si elle commence positive et si la relation de récurrence préserve cette positivité.`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 1d) Étudier la monotonie de la suite (u_n)**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1d (0.75 point)**

**MÉTHODE:** Calculer u_{n+1} - u_n et étudier son signe.

**CALCUL DE u_{n+1} - u_n:**
u_{n+1} - u_n = (3n/(n+1)) × u_n + (4/(n+1)) - u_n
              = u_n × [(3n/(n+1)) - 1] + (4/(n+1))
              = u_n × [(3n - (n+1))/(n+1)] + (4/(n+1))
              = u_n × [(2n - 1)/(n+1)] + (4/(n+1))
              = [(2n - 1)u_n + 4] / (n+1)

**ÉTUDE DU SIGNE:**
Pour n ≥ 1:
• n+1 > 0
• u_n > 0 (d'après partie 1c)
• 2n - 1 ≥ 1 > 0 (car n ≥ 1)
• Donc (2n - 1)u_n + 4 > 0

Par conséquent: u_{n+1} - u_n > 0

**CONCLUSION:**
Pour tout n ≥ 1: u_{n+1} > u_n
La suite (u_n) est **strictement croissante**.

**Exemple Mauritanien :** Si cette suite modélise la croissance démographique de Nouakchott avec un facteur de croissance qui augmente avec le temps, alors la population croît de plus en plus rapidement.`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 2a) Montrer que (v_n) est une suite géométrique**
où v_n = nu_n + 2`,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (1 point)**

**DÉMONSTRATION:**

**1. Expression de v_{n+1}:**
v_{n+1} = (n+1)u_{n+1} + 2

**2. Utiliser la relation de récurrence:**
Comme u_{n+1} = (3n/(n+1)) × u_n + (4/(n+1)):
v_{n+1} = (n+1) × [(3n/(n+1)) × u_n + (4/(n+1))] + 2
        = (n+1) × (3nu_n + 4)/(n+1) + 2
        = 3nu_n + 4 + 2
        = 3nu_n + 6
        = 3(nu_n + 2)
        = 3v_n

**3. CONCLUSION:**
v_{n+1} = 3v_n pour tout n ≥ 1
Donc **(v_n) est une suite géométrique de raison q = 3**

**PREMIER TERME:**
v₁ = 1×u₁ + 2 = 1×1 + 2 = **3**

**RÉPONSE FINALE:**
(v_n) est géométrique de raison **q = 3** et de premier terme **v₁ = 3**.

**Exemple Mauritanien :** Cette transformation est similaire à modéliser un investissement à Nouakchott où le capital ajusté (v_n) triple chaque année, ce qui représente une croissance très rapide.`,
              difficulty: 'Difficile'
            },
            {
              type: 'demonstration',
              question: `**Partie 2b) Exprimer v_n en fonction de n**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**

**TERME GÉNÉRAL DE (v_n):**
Comme (v_n) est géométrique de raison q = 3 et de premier terme v₁ = 3:
v_n = v₁ × q^(n-1) = 3 × 3^(n-1) = 3^n

**RÉPONSE FINALE:**
**v_n = 3^n** pour tout n ≥ 1.

**VÉRIFICATION:**
v₁ = 3¹ = 3 ✓`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 2c) Montrer que u_n = (3^n - 2)/n**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2c (0.5 point)**

**EXPRESSION DE u_n:**
Comme v_n = nu_n + 2 et v_n = 3^n, on a:
nu_n + 2 = 3^n
nu_n = 3^n - 2
**u_n = (3^n - 2)/n**

**VÉRIFICATION:**
• u₁ = (3¹ - 2)/1 = (3 - 2)/1 = 1 ✓
• u₂ = (3² - 2)/2 = (9 - 2)/2 = 7/2 ✓
• u₃ = (3³ - 2)/3 = (27 - 2)/3 = 25/3 ✓

**RÉPONSE FINALE:**
Pour tout entier n ≥ 1: **u_n = (3^n - 2)/n**.

**Exemple Mauritanien :** Cette formule explicite permet de calculer directement la valeur de la suite sans avoir à calculer tous les termes précédents. Par exemple, pour connaître la valeur après 10 ans à Nouakchott, on calcule directement u₁₀ = (3¹⁰ - 2)/10.`,
              difficulty: 'Moyen'
            },
            {
              type: 'calcul',
              question: `**Partie 3) Exprimer S_n = ∑_{i=1}^{n} i × u_i en fonction de n**`,
              answer: `**SOLUTION COMPLÈTE - Partie 3 (0.5 point)**

**UTILISATION DE v_n:**
Comme v_n = nu_n + 2, on a: nu_n = v_n - 2

**CALCUL DE S_n:**
S_n = ∑_{i=1}^{n} i × u_i = ∑_{i=1}^{n} (v_i - 2) = ∑_{i=1}^{n} v_i - 2n

**SOMME DES v_n:**
Comme (v_n) est géométrique de raison q = 3 et de premier terme v₁ = 3:
∑_{i=1}^{n} v_i = 3 × (1 - 3^n)/(1 - 3) = 3 × (1 - 3^n)/(-2) = 3(3^n - 1)/2

**EXPRESSION FINALE:**
S_n = 3(3^n - 1)/2 - 2n = (3(3^n - 1) - 4n)/2

**RÉPONSE FINALE:**
S_n = (3(3^n - 1) - 4n)/2 pour tout n ≥ 1.

**Exemple Mauritanien :** Cette somme pourrait représenter le total cumulé d'investissements pondérés sur n années à Nouakchott, où chaque année l'investissement est multiplié par son rang.`,
              difficulty: 'Difficile'
            }
          ],
          difficulty: 'Difficile',
          estimatedTime: 35
        }

