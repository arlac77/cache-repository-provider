import test from "ava";
import { SingleGroupProvider, Repository, Branch } from "repository-provider";
import { cachedBranch } from "cache-repository-provider";

test("cached branch", async t => {
  const p1 = new SingleGroupProvider();
  const r1 = new Repository(p1, "r1");
  const b1 = new Branch(r1, "b1");
  const cb = cachedBranch(b1);
  t.is(cb.name, "b1");
  t.is(cb.entries(), "b1");
});
