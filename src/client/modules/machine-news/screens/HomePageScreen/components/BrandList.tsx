import React, { Fragment } from 'react';
import './BrandList.less';
import { FeatureBrand } from '@client/services/service-proxies';
import Slider from 'react-slick';
import Head from 'next/head';

interface Props {
  featureBrands: FeatureBrand[];
}
const BrandList = React.memo<Props>((props: Props) => {
  const renderBrand = props.featureBrands.map((featureBrand: FeatureBrand, index: number) => {
    return (
      <div className='brand-image' key={index}>
        <a href={`${featureBrand.hyperlink}`} title={featureBrand.brand.name} target='_blank'>
          <img src={featureBrand.logoImage} />
        </a>
      </div>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Head>
        <meta name='google' content='notranslate'></meta>
        <meta charSet='utf-8' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
        <link rel='shortcut icon' type='image/png' href='/static/images/favicon.png' />
        <title>Timmay.vn | Chợ máy công trình</title>
      </Head>
        <div className='brand-list'>
          <Slider {...settings}>
            {renderBrand}
          </Slider>
        </div>
    </Fragment>
  );
});

export default BrandList;
