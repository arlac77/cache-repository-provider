import { MultiGroupProvider } from "repository-provider";
export * from "./branch.mjs";

export class MultiGroupCacheProvider extends MultiGroupProvider {
  constructor(provider, options) {
    super(options);
    this._provider = provider;
  }

  async repositoryGroup(name) {
    console.log("repositoryGroup", name);

    return this._provider.repositoryGroup(name);
  }

  async *repositoryGroups(patterns) {
    console.log("repositoryGroups", patterns);

    yield* this._provider.repositoryGroups(patterns);
  }

  async repository(name) {
    console.log("repository", name);
    return this._provider.repository(name);
  }
}
