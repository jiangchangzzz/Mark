import { combineReducers } from 'redux';

import notebook from './notebook';
import topic from './topic';

const rootReducer=combineReducers({
    notebook,
    topic
});

export default rootReducer;