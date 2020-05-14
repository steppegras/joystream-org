import React from 'react';
import bountyImage from '../../assets/svg/bounties.svg';
import coinMinterHero from '../../assets/svg/coin-minter-hero.svg';
import replenishmentImage from '../../assets/svg/replenishment.svg';
import rewardImage from '../../assets/svg/reward.svg';
import { ReactComponent as DocumentIcon } from '../../assets/svg/document.svg';
import { ReactComponent as TimeIsMoneyIcon } from '../../assets/svg/money-time.svg';

import Button from '../../components/Button';
import Hero from '../../components/Hero';
import ImageSection from '../../components/ImageSection';
import LayoutWrapper from '../../components/LayoutWrapper';
import SiteMetadata from '../../components/SiteMetadata';
import Link from '../../components/Link';
import TitleWrapper from '../../components/TitleWrapper';
import BaseLayout from '../../components/_layouts/Base';
import PendingExchanges from './PendingExchanges';
import TokenStats from './TokenStats';
import LiveKPIs from './LiveKPIs';
import content from '../../data/pages/testnet';
import './style.scss';

function TestnetPage() {
  return (
    <BaseLayout className="TokensPage">
      <SiteMetadata title="Joystream: The video platform DAO" description="Tokens" />

      <Hero
        image={content.Hero.image}
        title={content.Hero.title}
        animationStartValue={0}
        animationEndValue={60}
        animationEnd="100vh"
        noOverflow
      >
        {content.Hero.text}
        <Link to={content.Hero.ctaLink}>
          <Button>Learn More</Button>
        </Link>
      </Hero>

      <LayoutWrapper className="Stats">
        <TitleWrapper title={content.Numbers.title} className="Stats__Title">
          <TokenStats />
        </TitleWrapper>
      </LayoutWrapper>
      <LayoutWrapper className="KPIs__Explainer">
        <ImageSection title={content.KPIsExplainer.title} image={content.KPIsExplainer.sections.first.image}>
          {content.KPIsExplainer.sections.first.text}
          <div className="KPIs__Explainer__Replenishment">
            <h1>Current replenishment values</h1>
            <div className="KPIs__Explainer__Replenishment__Card">
              <div className="KPIs__Explainer__Replenishment__Card__Values">
                <div className="KPIs__Explainer__Replenishment__Card__Icon">
                  <TimeIsMoneyIcon />
                </div>
                <div className="KPIs__Explainer__Replenishment__Card__Icon">$50</div>
                <div className="KPIs__Explainer__Replenishment__Card__Slash">/</div>
                <div className="KPIs__Explainer__Replenishment__Card__Days">
                  <span>12</span>
                  <h2 className="KPIs__Explainer__Replenishment__Card__Days__Text">days</h2>
                </div>
              </div>
            </div>
          </div>
        </ImageSection>
        <ImageSection image={content.KPIsExplainer.sections.second.image}>
          {content.KPIsExplainer.sections.second.text}
          <div className="KPIs__Links">
            <Link to={content.KPIsExplainer.sections.links.first.to} className="KPIs__Links__Link">
              <DocumentIcon className="KPIs__Links__Document__Icon" />
              {content.KPIsExplainer.sections.links.first.text}
            </Link>
            <Link to={content.KPIsExplainer.sections.links.second.to}>
              <Button className="KPIs__Links__Button">{content.KPIsExplainer.sections.links.second.text}</Button>
            </Link>
          </div>
        </ImageSection>
        <LiveKPIs />
      </LayoutWrapper>

      <LayoutWrapper className="Exchanges Exchanges__Container">
        <TitleWrapper title={content.Exchanges.title} subtitle={content.Exchanges.subtitle}>
          <PendingExchanges />
          <Link to={content.Exchanges.link.to}>
            <Button className="Exchanges__Button">{content.Exchanges.link.text}</Button>
          </Link>
        </TitleWrapper>
      </LayoutWrapper>
      <LayoutWrapper className="Dynamics">
        <ImageSection title={content.Dynamics.title} image={content.Dynamics.image}>
          {content.Dynamics.text}
        </ImageSection>
      </LayoutWrapper>
    </BaseLayout>
  );
}

export default TestnetPage;
