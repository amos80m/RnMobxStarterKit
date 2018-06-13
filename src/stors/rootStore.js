import {observable, action} from 'mobx';

import sampleStore from './store';


class RootStore {
    constructor() {
        this.sampleStore = new sampleStore({root: this})
    }
}

export default RootStore;