import {observable, action} from 'mobx';

import Store from './store';


class RootStore {
    constructor() {
        this.StoreMyTstStor = new Store({root: this})
    }

    @observable Amos = "I am from Main root store";
}

export default RootStore;