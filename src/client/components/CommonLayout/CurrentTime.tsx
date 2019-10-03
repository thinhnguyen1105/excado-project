import * as React from 'react';
import './CurrentTime.less';
import { withNamespaces } from '@client/i18n';

interface Props {
  t: (key: string) => string;
}
interface State {
  date: any;
}

let timerID: any;

class CurrentTime extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    timerID = setInterval(
      () => this.tick(),
      60000,
    );
  }

  componentWillUnmount() {
    clearInterval(timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render () {
    const translate = this.props.t;
    const vietnameseDay = [translate('common:monday'), translate('common:tuesday'), translate('common:wednesday'), translate('common:thursday'), translate('common:friday'), translate('common:saturday'), translate('common:sunday')];
    const day = vietnameseDay[this.state.date.getDay()];
    const date = this.state.date.getDate() < 10 ? `0${this.state.date.getDate()}` : this.state.date.getDate();
    const month = this.state.date.getMonth() + 1 < 10 ? `0${this.state.date.getMonth() + 1}` : this.state.date.getMonth() + 1;
    const year = this.state.date.getFullYear();
    const hours = this.state.date.getHours() < 10 ? `0${this.state.date.getHours()}` : this.state.date.getHours();
    const minutes = this.state.date.getMinutes() < 10 ? `0${this.state.date.getMinutes()}` : this.state.date.getMinutes();
    const timeZone = `GMT${this.state.date.getTimezoneOffset() / -60 > 0 ? `+${this.state.date.getTimezoneOffset() / -60}` : this.state.date.getTimezoneOffset() / -60}`;

    return (
      <div className='current-time'>
           <span className='city-time'>
           {`${day}, ${date}/${month}/${year}, ${hours}:${minutes} (${timeZone})`}
           </span>
      </div>
    );
  }
}

export default withNamespaces('common')(CurrentTime);
