import { matcher } from "matching-iterator";


/**
 * Generate a cached view of a branch.
 * @param {Branch} branch
 * @returns {Branch} witch cached entries
 */
export function cachedBranch(branch) {
  let entries;

  async function* _entries(pattern) {
    if (entries === undefined) {
      entries = new Map();
      for await (const entry of branch.entries()) {
        entries.set(entry.name, entry);
      }
    }

    for (const entry of matcher(entries.values(), patterns, {
      name: "name"
    })) {
      yield entry;
    }
  }

  return new Proxy(branch, {
    get(target, prop) {
      if (prop === "entries") return _entries;
      return target[prop];
    }
  });
}
