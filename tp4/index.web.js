import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('main', () => App);

const rootTag = document.getElementById('app-root');
AppRegistry.runApplication('main', { rootTag });
