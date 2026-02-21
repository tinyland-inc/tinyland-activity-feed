/**
 * Configuration module for @tummycrypt/tinyland-activity-feed
 *
 * Provides dependency injection for content-loading functions so the
 * package stays framework-agnostic. Consumers wire in their own
 * loaders at application startup via configure().
 *
 * If no loader functions are configured, all feed operations
 * degrade gracefully (returning empty arrays).
 */

import type { ActivityFeedConfig } from './types.js';

let _config: ActivityFeedConfig = {};

/**
 * Configure the activity feed with content-loading functions.
 * Merges the provided config into the current config.
 */
export function configure(config: Partial<ActivityFeedConfig>): void {
  _config = { ..._config, ...config };
}

/**
 * Get the current activity feed configuration.
 * Returns a shallow copy to prevent external mutation.
 */
export function getConfig(): ActivityFeedConfig {
  return { ..._config };
}

/**
 * Reset configuration to empty state.
 * Useful for testing.
 */
export function resetConfig(): void {
  _config = {};
}
