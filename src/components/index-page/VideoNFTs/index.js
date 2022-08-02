import React from 'react';

import VideoNFTsBackgroundImage from '../../../assets/images/landing/video-nfts-background.png';
import { ArrowButton } from '../../ArrowButton';

import './style.scss';

const VideoNFTs = ({ t }) => {
  return (
    <div className="IndexPage__video-nfts-wrapper">
      <div className="IndexPage__video-nfts">
        <div className="IndexPage__video-nfts__illustration">
          <img
            src={VideoNFTsBackgroundImage}
            className="IndexPage__video-nfts__illustration__background"
            alt="in the background, my payments tab in atlas studio is shown, in the foreground, a claim payout popup"
          />
        </div>
        <section className="IndexPage__video-nfts__content">
          <h3 className="IndexPage__video-nfts__content__section-title">VIDEO NFTs</h3>
          <h2 className="IndexPage__video-nfts__content__title">Monetise your videos with NFT sales and royalties</h2>
          <p className="IndexPage__video-nfts__content__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet rhoncus iaculis viverra nunc gravida a
            egestas. Urna pellentesque laoreet facilisis pharetra at arcu vitae.
          </p>
        </section>
      </div>
      <div className="IndexPage__video-nfts-cta">
        <p className="IndexPage__video-nfts-cta__title">
          “This should be the greatest time <br/> in history for creative people. And I think we might have finally figured it
          out.”
        </p>
        <p className='IndexPage__video-nfts-cta__about'>Chris Dixon, entrepreneur and investor</p>
        <p className='IndexPage__video-nfts-cta__podcast'>The Tim Ferris Show podcast, episode #542</p>
        <ArrowButton 
          className="IndexPage__video-nfts-cta__button"
          text="Claim your channel"
          textClassname="IndexPage__video-nfts-cta__button-text"
          link="https://play.joystream.org/studio/"
        />
      </div>
    </div>
  );
};

export default VideoNFTs;
