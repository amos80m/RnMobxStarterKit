import { observable, action } from 'mobx';

class sampleStore {
  @observable inputData = 'Click n Type to Update Observable in Store';

  @action updateStoreObservable(data) {
    this.inputData = data;
  }
}
export default sampleStore;
