/**
 * @tummycrypt/tinyland-activity-feed
 *
 * Framework-agnostic unified activity feed aggregation with filtering,
 * search, and sorting. Content loading is injected via configure()
 * so this package has zero runtime dependencies.
 *
 * @example
 * ```typescript
 * import {
 *   configure,
 *   getRecentActivityServer,
 *   searchActivityServer,
 * } from '@tummycrypt/tinyland-activity-feed';
 *
 * configure({
 *   loadBlogPosts: () => myBlogPosts,
 *   loadProfiles: () => myProfiles,
 *   loadProducts: () => myProducts,
 * });
 *
 * const recent = getRecentActivityServer(10);
 * const results = searchActivityServer('svelte');
 * ```
 */

// Types
export type {
  ActivityItem,
  BlogPostItem,
  ProfileItem,
  ProductItem,
  ActivityFeedConfig,
} from './types.js';

// Configuration (DI)
export { configure, getConfig, resetConfig } from './config.js';

// Feed functions
export {
  getRecentActivityServer,
  getActivityByTypeServer,
  getActivityByCategoryServer,
  getActivityByTagServer,
  searchActivityServer,
} from './feed.js';
