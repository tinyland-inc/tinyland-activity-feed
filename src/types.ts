/**
 * Type definitions for @tinyland-inc/tinyland-activity-feed
 *
 * These are framework-agnostic types for the unified activity feed.
 * Input types (BlogPostItem, ProfileItem, ProductItem) support flexible
 * field names to accommodate different content sources.
 * The output ActivityItem is a normalized, consistent shape.
 */

/**
 * Unified activity item returned by all feed functions.
 * Represents a normalized item from any content source.
 */
export interface ActivityItem {
  type: 'post' | 'profile' | 'product';
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image?: string;
  author?: string;
  category?: string;
  tags?: string[];
  /** Product-specific category (separate from general category) */
  productCategory?: string;
  /** Profile-specific role */
  profileRole?: string;
  /** Product license */
  license?: string;
}

/**
 * Input type for blog post items from DI loaders.
 * Supports multiple common field naming conventions.
 */
export interface BlogPostItem {
  title: string;
  slug: string;
  excerpt?: string;
  description?: string;
  date?: string;
  publishedAt?: string;
  featuredImage?: string;
  coverImage?: string;
  heroImage?: string;
  author?: string | { name: string };
  category?: string;
  categories?: string[];
  tags?: string[];
  published?: boolean;
  draft?: boolean;
}

/**
 * Input type for profile items from DI loaders.
 * Supports multiple common field naming conventions.
 */
export interface ProfileItem {
  name?: string;
  displayName?: string;
  slug: string;
  bio?: string;
  publishedAt?: string;
  updatedAt?: string;
  joinedDate?: string;
  avatar?: string;
  imageUrl?: string;
  role?: string;
  tags?: string[];
  interests?: string[];
}

/**
 * Input type for product items from DI loaders.
 * Supports multiple common field naming conventions.
 */
export interface ProductItem {
  name: string;
  slug: string;
  excerpt?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  image?: string;
  category?: string;
  tags?: string[];
  license?: string;
}

/**
 * Dependency-injection configuration for the activity feed.
 *
 * Each function is an optional loader that returns arrays of
 * content items from different sources. If a loader is not
 * provided, that content type is simply excluded from the feed.
 */
export interface ActivityFeedConfig {
  /** Load blog posts */
  loadBlogPosts?: () => BlogPostItem[];
  /** Load profiles */
  loadProfiles?: () => ProfileItem[];
  /** Load products */
  loadProducts?: () => ProductItem[];
}
