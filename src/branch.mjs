export function CachedBranch(branch) {
  const entries = new Map();

  return new Proxy(branch,{
    entries(pattern) {},
    entry(name) {}
  });
} 
