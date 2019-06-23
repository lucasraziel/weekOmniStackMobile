import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings([
	'Unrecognized WebSocket connection',
	'Warning: Each child in a list should have a unique "key" prop.'
]);

export default function App() {
	return <Routes />;
}
