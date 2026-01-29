/**
 * Script de migration des événements v1 vers v2
 * 
 * Usage: npm run migrate:events-v2 [days]
 */

import { migrateExistingEventsToV2 } from './event-integration-example';

const days = process.argv[2] ? parseInt(process.argv[2]) : 7;

migrateExistingEventsToV2(days)
  .then(({ migrated, errors }) => {
    console.log(`\n✅ Migration terminée:`);
    console.log(`   - ${migrated} événements migrés`);
    console.log(`   - ${errors} erreurs`);
    process.exit(errors > 0 ? 1 : 0);
  })
  .catch((error) => {
    console.error('❌ Erreur fatale lors de la migration:', error);
    process.exit(1);
  });
