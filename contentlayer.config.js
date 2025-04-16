// contentlayer.config.js
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `journal/*.md`,
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true }
  },
  contentType: 'mdx',
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
});
