import { assertEquals as equals } from "../deps/assert.ts";
import * as plugins from "../plugins.ts";
import { pluginNames } from "../cli/utils.ts";

const allNames = Object.keys(plugins);
const totalPlugins = Array.from(Deno.readDirSync("plugins")).length;

Deno.test("Plugins module", () => {
  equals(allNames.length, totalPlugins);

  equals(allNames, [
    "attributes",
    "basePath",
    "bundler",
    "codeHighlight",
    "date",
    "eta",
    "inline",
    "json",
    "jsx",
    "liquid",
    "markdown",
    "modifyUrls",
    "modules",
    "nunjucks",
    "onDemand",
    "paginate",
    "postcss",
    "pug",
    "relativeUrls",
    "resolveUrls",
    "search",
    "slugifyUrls",
    "svgo",
    "terser",
    "url",
    "yaml",
  ]);
});

Deno.test("Plugins list in init", () => {
  equals(pluginNames.length, totalPlugins - 8);

  equals(pluginNames, [
    "attributes",
    "base_path",
    "bundler",
    "code_highlight",
    "date",
    "eta",
    "inline",
    "jsx",
    "liquid",
    "modify_urls",
    "on_demand",
    "postcss",
    "pug",
    "relative_urls",
    "resolve_urls",
    "slugify_urls",
    "svgo",
    "terser",
  ]);
});
