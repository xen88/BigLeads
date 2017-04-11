import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Home from '../components/Home.js';

const composer = (props, onData) => onData(null, { hasUser: Meteor.user() });

export default composeWithTracker(composer, {}, {}, { pure: false })(Home);
