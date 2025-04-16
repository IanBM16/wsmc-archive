// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `journal/*.md`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true }
  },
  contentType: "mdx"
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GZYG5LVX.mjs.map
