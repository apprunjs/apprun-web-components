import { app, Component, customElement } from 'apprun';

@customElement('my-app')
export default class extends Component {
  view = () => 'Web Component - Hello World!'
}

