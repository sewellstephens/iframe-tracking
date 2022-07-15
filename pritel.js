const npmPublish = require("@pritelmonkie/npm-publish");

// Run npm-publish with all defaults
await npmPublish();

// Run npm-publish with options
await npmPublish({
  package: "./path/to/package.json",
  token: "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"
});
