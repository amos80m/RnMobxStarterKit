import React, { Component } from 'react';
import {Provider as MobXProvider, observer} from 'mobx-react/native';
import RootStore from './stors/rootStore';

import Root from './Root';
type Props = {};
@observer
export default class App extends Component<Props> {
  constructor() {
    super();
    this.rootStore = new RootStore();
}
  render() {
    return  <MobXProvider store={this.rootStore}><Root/></MobXProvider>
  }
}

