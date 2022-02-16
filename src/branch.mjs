
/**
 * Generate a cached view of a branch.
 * @param {Branch} branch 
 * @returns {Branch} witch cached entries
 */
export function cachedBranch(branch) {
  const entries = new Map();

  return new Proxy(branch,{
    entries(pattern) {},
    entry(name) {}
  });
} 
