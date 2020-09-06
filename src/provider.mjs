import { Provider } from "repository-provider";

/**
 * Caches access to a repsository provider
 * @param {Provider} upstreamProvider to be cached
 * @param {Object} options
 * @property {Provider} provider
 */
export class CacheProvider extends Provider {
  constructor(upstreamProvider, options) {
    super(options);
    Object.defineProperties(this, {
      upstreamProvider: { value: upstreamProvider }
    });
  }

  async repository(name) {
    const proxy3 = new Proxy(upstreamProvider, {});

    const repository = await upstreamProvider.repository(name);
    return repository;
  }
}
