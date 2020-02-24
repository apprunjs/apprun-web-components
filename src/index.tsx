import { app, Component, customElement } from "apprun";

@customElement("my-app")
class App extends Component {
  view = () => <div>Web Component - Hello World!</div>;
}
