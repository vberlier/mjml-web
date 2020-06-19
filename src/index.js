export * from 'mjml-core'
import mjml2html from 'mjml'

export default function (source, options) {
  options = options || {}
  options.filePath = null
  return mjml2html(source, options)
}
