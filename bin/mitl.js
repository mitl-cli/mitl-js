#!/usr/bin/env node
const [, , ...args] = process.argv;

if (args.length === 0) {
  console.log(
    "Mitl CLI (stub) — usage: mitl init | mitl run | mitl dev | mitl test | mitl status"
  );
  process.exit(0);
}

const cmd = args[0];
switch (cmd) {
  case "init":
    console.log("mitl init — initializing (stub)");
    break;
  case "run":
    console.log("mitl run — spawning (stub)");
    break;
  case "dev":
    console.log("mitl dev — dev shell (stub)");
    break;
  case "test":
    console.log("mitl test — running tests (stub)");
    break;
  case "status":
    console.log("mitl status — status (stub)");
    break;
  default:
    console.log(`Unknown command: ${cmd}`);
}
