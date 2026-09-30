/**
 * @file assets.ts
 * @description Helper utility to resolve asset URLs correctly across any deployment environment
 * (e.g. GitHub Pages repository subpaths, custom domains, localhost, or preview deployments).
 */

export const getAssetUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
