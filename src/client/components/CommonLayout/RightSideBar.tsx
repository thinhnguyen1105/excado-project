import * as React from 'react';
import { Adsense } from '@client/services/service-proxies';
import { withNamespaces } from '@client/i18n';
const Fragment = React.Fragment;

interface Props {
  adsense: Adsense[];
  t: (key: string) => string;
}
interface State {}
class BaseRightSideBar extends React.PureComponent<Props, State> {
  render () {
    const adsPosition5 = this.props.adsense.filter((item) => item.position === 5)[0];
    const adsPosition6 = this.props.adsense.filter((item) => item.position === 6)[0];
    const adsPosition7 = this.props.adsense.filter((item) => item.position === 7)[0];
    const adsPosition8 = this.props.adsense.filter((item) => item.position === 8)[0];
    const adsPosition9 = this.props.adsense.filter((item) => item.position === 9)[0];
    const adsPosition10 = this.props.adsense.filter((item) => item.position === 10)[0];

    return (
      <Fragment>
        <a href={adsPosition5 && adsPosition5.hyperlink ? adsPosition5.hyperlink : '#'} target='_blank'>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              height: '200px',
              backgroundImage: `url(${adsPosition5 && adsPosition5.imageUrl ? adsPosition5.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: adsPosition5 && adsPosition5.imageUrl ? '' : '1px dashed black',
              color: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {adsPosition5 && adsPosition5.imageUrl ? '' : this.props.t('common:contact-for-ads')}
          </div>
        </a>

        <a href={adsPosition6 && adsPosition6.hyperlink ? adsPosition6.hyperlink : '#'}>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              marginTop: '30px',
              height: '200px',
              backgroundImage: `url(${adsPosition6 && adsPosition6.imageUrl ? adsPosition6.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: adsPosition6 && adsPosition6.imageUrl ? '' : '1px dashed black',
              color: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {adsPosition6 && adsPosition6.imageUrl ? '' : this.props.t('common:contact-for-ads')}
          </div>
        </a>

        <a href={adsPosition7 && adsPosition7.hyperlink ? adsPosition7.hyperlink : '#'} target='_blank'>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              marginTop: '30px',
              height: '200px',
              backgroundImage: `url(${adsPosition7 && adsPosition7.imageUrl ? adsPosition7.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: adsPosition7 && adsPosition7.imageUrl ? '' : '1px dashed black',
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {adsPosition7 && adsPosition7.imageUrl ? '' : this.props.t('common:contact-for-ads')}
            </div>
        </a>

        <a href={adsPosition8 && adsPosition8.hyperlink ? adsPosition8.hyperlink : '#'} target='_blank'>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              marginTop: '30px',
              height: '200px',
              backgroundImage: `url(${adsPosition8 && adsPosition8.imageUrl ? adsPosition8.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            border: adsPosition8 && adsPosition8.imageUrl ? '' : '1px dashed black',
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {adsPosition8 && adsPosition8.imageUrl ? '' : this.props.t('common:contact-for-ads')}
            </div>
        </a>

        <a href={adsPosition9 && adsPosition9.hyperlink ? adsPosition9.hyperlink : '#'} target='_blank'>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              marginTop: '30px',
              height: '400px',
              backgroundImage: `url(${adsPosition9 && adsPosition9.imageUrl ? adsPosition9.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            border: adsPosition9 && adsPosition9.imageUrl ? '' : '1px dashed black',
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {adsPosition9 && adsPosition9.imageUrl ? '' : this.props.t('common:contact-for-ads')}
            </div>
        </a>

        <a href={adsPosition10 && adsPosition10.hyperlink ? adsPosition10.hyperlink : '#'} target='_blank'>
          <div
            className='image-promote'
            style={{
              backgroundColor: '#F6F6F6',
              marginTop: '30px',
              height: '400px',
              backgroundImage: `url(${adsPosition10 && adsPosition10.imageUrl ? adsPosition10.imageUrl : ''})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            border: adsPosition10 && adsPosition10.imageUrl ? '' : '1px dashed black',
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {adsPosition10 && adsPosition10.imageUrl ? '' : this.props.t('common:contact-for-ads')}
            </div>
        </a>
      </Fragment>
    );
  }
}

export const RightSideBar = withNamespaces(['common'])(BaseRightSideBar);
