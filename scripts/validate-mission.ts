#!/usr/bin/env node

/**
 * Mission Lock Validation Script
 * 
 * Validates all domain configs against mission constraints.
 * Run this in CI to catch violations before deployment.
 * 
 * Usage:
 *   pnpm lint:mission
 *   or
 *   tsx scripts/validate-mission.ts
 */

import { keepwordOrgConfig } from '../config/sites/domains/keepword.org';
import { keepwordEuConfig } from '../config/sites/domains/keepword.eu';
import { keepwordNlConfig } from '../config/sites/domains/keepword.nl';
import { validateMissionConstraints } from '../config/mission-lock';

const configs = [
  { config: keepwordOrgConfig, name: 'keepword.org' },
  { config: keepwordEuConfig, name: 'keepword.eu' },
  { config: keepwordNlConfig, name: 'keepword.nl' },
];

let hasErrors = false;

console.log('🔍 Validating mission constraints...\n');

configs.forEach(({ config, name }) => {
  try {
    validateMissionConstraints(config.domain, config.role, config);
    console.log(`✅ ${name} - Valid`);
  } catch (error) {
    console.error(`❌ ${name} - ${error instanceof Error ? error.message : String(error)}`);
    hasErrors = true;
  }
});

console.log('');

if (hasErrors) {
  console.error('❌ Mission validation failed');
  process.exit(1);
} else {
  console.log('✅ All mission constraints validated');
  process.exit(0);
}

