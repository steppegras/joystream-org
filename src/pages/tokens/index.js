import React from 'react';
import buildingShapesImage from '../../assets/images/building-shapes.png';
import exchangeShapesImage from '../../assets/images/exchange-shapes.png';
import vaultShapesImage from '../../assets/images/vault-shapes.png';
import desktopImage from '../../assets/svg/desktop.svg';
import tokensChart from '../../assets/svg/token-chart.svg';
import tokensImage from '../../assets/svg/tokens.svg';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import './style.scss';

const LegendItem = ({ color, percentage, description }) => {
  return (
    <div className="LegendItem">
      <div className="LegendItem__box" style={{ background: color }} />
      <div className="LegendItem__text">
        <strong>{percentage}%</strong> {description}
      </div>
    </div>
  );
};

const TokensPage = () => {
  return (
    <BaseLayout className="TokensPage">
      <SiteMetadata title="Joystream: A user governed video platform" description="Tokens" />

      <Hero
        image={tokensImage}
        title={
          <>
            Understanding <br />
            the Joystream token
          </>
        }
        animationStartValue={10}
        animationEndValue={120}
        animationEnd="100vh"
        noOverflow
      >
        <p className="AcropolisPage__hero-paragraph">
          The joystream platform has two different kinds of tokens. In order to further clarify how the system will
          likely work at the launch of the main network, it would be a benefit to explain key aspects of both token
          types.
        </p>
      </Hero>

      <LayoutWrapper>
        <h2 className="TokensPage__title">Purpose of the Token</h2>

        <ImageSection image={vaultShapesImage}>
          <h4 className="TokensPage__sub-title">Staking</h4>
          <p>
            Participants must stake some amount of this token to be able to participate on the platform in some
            operational role, for example in order to earn a reward. The staked funds may be slashed if the party
            misbehaves
          </p>
        </ImageSection>

        <ImageSection image={buildingShapesImage}>
          <h4 className="TokensPage__sub-title">Governance</h4>
          <p>Value transfer, such as for transaction fees, memberships or accessing monetised content.</p>
        </ImageSection>

        <ImageSection image={exchangeShapesImage}>
          <h4 className="TokensPage__sub-title">Payment</h4>
          <p>Value transfer, such as for transaction fees, memberships or accessing monetised content.</p>
        </ImageSection>

        <h2 className="TokensPage__title">Circulating Token Supply</h2>

        <ImageSection image={desktopImage}>
          Unlike coins like Bitcoin, where there is a fixed inflatin schedule, the Joystream platform will mint and burn
          tokens according to rules an parameters which are subject to change.
          <br />
          <br />
          This, in combination with the low friction updating of the system rules, means that it is not possible to
          determine the token supply up front.
        </ImageSection>

        <div className="ActionCard">
          <h2 className="ActionCard__title">Token Aquisition</h2>
          <p className="ActionCard__content">
            In the mean time, you can join our current active testnet and earn Monero, and learn what is required to
            participate when we are live.
          </p>
          <Button light>Join the current testnet</Button>
        </div>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Allocation of Tokens">
          <div className="TokensPage__allocations">
            <div className="TokensPage__allocations-content">
              <div className="TokensPage__allocations-text">
                The initial allocaiton of this token in the main network launch is as given below.This means that when
                the system starts, the allocation of token will first look like this, but tokens will get minted on
                every block, which will dilute this set of stakeholders.
              </div>
              <div className="TokensPage__legend">
                <LegendItem color="#3B3FFF" percentage={50} description="Team+Investors" />
                <LegendItem color="#92A2B7" percentage={30} description="Unallocated" />
                <LegendItem color="#C5D1E0" percentage={20} description="Early Community Members" />
              </div>
            </div>
            <img className="TokensPage__allocations-chart" src={tokensChart} alt="" />
          </div>
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper>
        <h2 className="TokensPage__title">Disclaimer</h2>
        <div className="TokensPage__disclaimer-text">
          <p>
            This disclaimer applies to the webpage accessible at{' '}
            <a href="www.joystream.org/token">www.joystream.org/token</a> as well as all other webpages, digital
            services or applications published by Jsgenesis (the “Company”). The disclaimer also applies to any material
            published by Company in any other format in connection with the JOY token (the “Token”).
          </p>
          <p>
            Publications made by Company and all information contained within them are not directed at or intended for
            use by any person resident or located in any jurisdiction where (1) the distribution of such information is
            contrary to the laws of such jurisdiction; or (2) such distribution is prohibited without obtaining the
            necessary licenses or authorizations by the relevant branch, subsidiary or affiliate office of Company and
            such licenses or authorizations have not been obtained.
          </p>
          <p>
            Company does not provide investment, legal or tax advice and nothing herein should be construed as being
            financial, legal, tax or other advice. Unless specifically stated otherwise, all price information is
            indicative only. No representation or warranty, either express or implied, is provided in relation to the
            accuracy, completeness or reliability of the materials, nor are they a complete statement of the securities,
            markets or developments referred to herein. The materials should not be regarded by recipients as a
            substitute for the exercise of their own judgment.
          </p>
          <p>
            All information and materials published, distributed or otherwise made available by Company in relation to
            Token are provided for informational purposes, for your non-commercial, personal use only. No information or
            materials published by Company constitutes a solicitation, an offer, or a recommendation to buy or sell any
            investment instruments, to effect any transactions, or to conclude any legal act of any kind whatsoever.
          </p>
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export { TokensPage };
export default TokensPage;
