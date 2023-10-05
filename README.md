
# Système de réservation de tables de restaurant

Un système simple et sans dépendance externe pour la réservation de tables dans un restaurant. Ce projet a été conçu en TypeScript avec une approche TDD.

## Fonctionnalités

- Consultation de la disponibilité des tables.
- Réservation d'une table pour un nombre spécifique de personnes à une date et une heure précises.
- Confirmation de réservation.

## Prérequis

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. Clonez le dépôt :
   https://github.com/Cecile-Hirschauer/restaurant-booking-system.git

2. Naviguez vers le répertoire du projet :
   `cd restaurant-booking-system`

3. Installez les dépendances :
   `npm install`

## Exécution des tests

Exécutez les tests avec la commande suivante :
`npm test`


## Architecture

Ce projet utilise une version simplifiée de la Clean Architecture, avec les couches suivantes :

- **Entities** : Objets métier tels que `Restaurant`, `Table`, `Réservation`, etc.
- **Use Cases** : Actions réalisables telles que la vérification de la disponibilité d'une table ou la réservation d'une table.

## Contribution

Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.
