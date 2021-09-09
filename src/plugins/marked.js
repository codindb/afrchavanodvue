// To parse markdown into html (used mainly for rich text fields coming from API)
import marked from 'marked'

export default {
   install: (app, options) => {
      app.config.globalProperties.markdownToHtml = (markdown) => {
         return marked(markdown)
      }
   }
 }