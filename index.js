const sls = require("serverless-http");
const binaryMimeTypes = require("./binaryMimeTypes");

module.exports.server = sls(require("./server"), {
  binary: binaryMimeTypes
});
