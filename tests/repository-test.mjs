import test from "ava";
import { GithubProvider } from "github-repository-provider";
import { MultiGroupCacheProvider } from "cache-repository-provider";

const REPOSITORY_NAME = "arlac77/sync-test-repository";
const REPOSITORY_OWNER = "arlac77";

test("get single repo", async t => {
  const github = new GithubProvider(
    GithubProvider.optionsFromEnvironment(process.env)
  );

  const provider = new MultiGroupCacheProvider(github);

  const repository = await provider.repository(REPOSITORY_NAME);
  t.is(repository.fullName, REPOSITORY_NAME);
});
