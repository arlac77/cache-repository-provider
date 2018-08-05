import { Provider } from 'repository-provider';

/**
 * Caches access to a repsository provider
 * @param {Provider} provider to be cached
 * @param {Object} options
 * @param {Levelup} options.levelup
 * @property {Provider} provider
 */
export class CacheProvider extends Provider {
  constructor(options, provider) {
    super(options);
    Object.defineProperty(this, 'upstreamProvider', { value: provider });
  }

  async repository(name) {
    const repository = await upstreamProvider.repository(name);
    return repository;
  }

  /*
  static initialize(provider) {
    return new Proxy(provider, {
      get(target, name) {
        return provider[name];
      },

      set(obj, prop, value) {
        return provider[prop] = value;
      }

      apply(target, that, args) {
        return provider.apply(that, args);
      }
    });
  }
  */
}
