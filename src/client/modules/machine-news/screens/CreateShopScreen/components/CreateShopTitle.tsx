import * as React from 'react';
import { Progress, Icon } from 'antd';
import './CreateShopTitle.less';
import { isMobile } from 'react-device-detect';
import { withNamespaces } from '@client/i18n';

interface Props {
  currentStep: number;
  backStep: () => void;
  t: (key: string) => string;
}
interface State { }
class CreateShopTitle extends React.PureComponent<Props, State> {
  render() {
    const translate = this.props.t;
    const titleForMobile = () => {
      switch (this.props.currentStep) {
        case 1:
          return (
            <div className='title-mobile'>{translate('create-shop:introduction')} ({this.props.currentStep}/5)</div>
          );
        case 2:
          return (
            <div className='title-mobile'>{translate('create-shop:select-your-package')} ({this.props.currentStep}/5)</div>
          );
        case 3:
          return (
            <div className='title-mobile'>{translate('create-shop:settings')} ({this.props.currentStep}/5)</div>
          );
        case 4:
          return (
            <div className='title-mobile'>{translate('create-shop:payment')} ({this.props.currentStep}/5)</div>
          );
        case 5:
          return (
            <div className='title-mobile'>{translate('create-shop:finish')} ({this.props.currentStep}/5)</div>
          );
        default:
          return 'NO DATA';
      }
    };

    return (
      <div className='create-shop-title'>
        {this.props.currentStep === 1 || this.props.currentStep === 5 ? (
          <h3 style={{display: `flex`, justifyContent: 'space-between'}}>
            <span></span>
            <span>{translate('create-shop:create-shop')}</span>
            <span></span>
          </h3>
        ) : (
          <h3 style={{display: `flex`, justifyContent: 'space-between'}}>
            <a style={{color: '#000'}} onClick={this.props.backStep}><Icon type='left' /> {translate(`create-shop:back`)}</a>
            <span>{translate('create-shop:create-shop')}</span>
            <span></span>
          </h3>
        )}
        <div className='step'>
          <span className={this.props.currentStep >= 1 ? `active-step-title` : `step-title`}>{translate('create-shop:introduction')}</span>
          <hr className={this.props.currentStep >= 2 ? `active-divider` : `basic-divider`} />
          <span className={this.props.currentStep >= 2 ? `active-step-title` : `step-title`}>{translate('create-shop:select-your-package')}</span>
          <hr className={this.props.currentStep >= 3 ? `active-divider` : `basic-divider`} />
          <span className={this.props.currentStep >= 3 ? `active-step-title` : `step-title`}>{translate('create-shop:settings')}</span>
          <hr className={this.props.currentStep >= 4 ? `active-divider` : `basic-divider`} />
          <span className={this.props.currentStep >= 4 ? `active-step-title` : `step-title`}>{translate('create-shop:payment')}</span>
          <hr className={this.props.currentStep >= 5 ? `active-divider` : `basic-divider`} />
          <span className={this.props.currentStep >= 5 ? `active-step-title` : `step-title`}>{translate('create-shop:finish')}</span>
        </div>
        {isMobile
          ? <div>
            <Progress style={{ top: -11 }} strokeColor='#FFC500' showInfo={false} strokeWidth={2} percent={this.props.currentStep * 20} />
            {titleForMobile()}
          </div>
          : <div></div>}
      </div>
    );
  }
}

export default withNamespaces('create-shop')(CreateShopTitle);
