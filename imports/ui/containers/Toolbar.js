import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Toolbar from '../components/Navigation/Toolbar.js';

const composer = (props, onData) => onData(null, { hasUser: Meteor.user() });

export default composeWithTracker(composer, {}, {}, { pure: false })(Toolbar);
