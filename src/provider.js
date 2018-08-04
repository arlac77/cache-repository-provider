import { Provider } from 'repository-provider';

/**
 * Caches access to a repsository provider
 * @param {Provider} provider
 * @property {Provider} provider
 */
export class CacheProvider {
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
}
