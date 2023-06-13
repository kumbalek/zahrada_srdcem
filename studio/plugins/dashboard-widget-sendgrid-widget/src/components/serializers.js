const h = require('hyperscript')

function h1Serializer (props) {
  const style = 'color:#475840; text-align: center; font-family: serif; letter-spacing: 1px;'

  return h('h1', {style}, props.children)
}

function h3Serializer (props) {
  const style = 'color:#475840;'

  return h('h3', {style}, props.children)
}

function blockquoteSerializer (props) {
  const style = 'color:#475840; text-align: center; font-size: 22px; font-family: serif; font-style: italic; letter-spacing: 1px;'

  return h('blockquote', {style}, props.children)
}

const marks = {
  h1: props => h1Serializer(props),
  h3: props => h3Serializer(props),
  blockquote: props => blockquoteSerializer(props),
  normal: props => h('p', {}, props.children)
}

export const BlockRenderer = props => {
  const style = props.node.style || 'normal'

  return marks[style](props)
}
