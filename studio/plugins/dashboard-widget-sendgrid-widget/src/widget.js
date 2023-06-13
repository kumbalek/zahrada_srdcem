import {withPropsStream} from 'react-props-stream'
import {withRouterHOC} from 'part:@sanity/base/router'
import {StructureMenuWidget} from './components'
import {toPropsStream} from './props'

export default {
  name: 'sendgrid-widget',
  component: withRouterHOC(withPropsStream(toPropsStream, StructureMenuWidget)),
  layout: {width: 'medium'}
}
