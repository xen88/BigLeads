import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../components/Navigation/AppNavigation.js';

const composer = (props, onData) => onData(null, { hasUser: Meteor.user() });

export default composeWithTracker(composer, {}, {}, { pure: false })(AppNavigation);
