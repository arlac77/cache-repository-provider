import test from 'ava';
import { CacheProvider } from '../src/provider';
import { GithubProvider } from 'github-repository-provider';

import { join } from 'path';
import levelup from 'levelup';
import leveldown from 'leveldown';

const REPOSITORY_NAME = 'arlac77/sync-test-repository';
const REPOSITORY_OWNER = 'arlac77';

test('get single repo', async t => {
  const github = new GithubProvider(
    GithubProvider.optionsFromEnvironment(process.env)
  );

  const leveldb = levelup(leveldown(join(__dirname, '..', 'build', 'leveldb')));
  const provider = new CacheProvider(undefined, {
    leveldb
  });

  const repository = await provider.repository(REPOSITORY_NAME);
  t.is(repository.name, REPOSITORY_NAME);
});
