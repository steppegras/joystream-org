import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import ContributeLayout from '../../../components/_layouts/Contribute';
import './style.scss';
import ContributorInfo from '../../../components/onboarding-page/ContributorInfo';
import Integrators from '../../../components/onboarding-page/Integrators';
import Bounties from '../../../components/onboarding-page/Bounties';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';
import AtlasInfo from '../../../components/onboarding-page/AtlasInfo';
import BountiesImage from '../../../assets/svg/bounties-getting-started.svg';
import ChatIntegrator from '../../../components/onboarding-page/ChatIntegrator';
import Curator from '../../../assets/svg/contributor-curator.svg';
import SiteMetadata from '../../../components/SiteMetadata';
import useLivesessionIdentifyOnboardingRole from '../../../utils/pages/onboarding/useLivesessionIdentifyOnboardingRole';

const Onboarding = () => {
  const { t } = useTranslation();
  useLivesessionIdentifyOnboardingRole();
  const { language } = useI18next();

  const chatRef = useRef();

  const data = {
    title: 'onboarding.contributorRoles.curator.title',
    specialities: [
      'onboarding.contributorRoles.curator.specialities.1',
      'onboarding.contributorRoles.curator.specialities.2',
      'onboarding.contributorRoles.curator.specialities.3',
      'onboarding.contributorRoles.curator.specialities.4',
    ],
  };

  const handleButtonAction = () => {
    if (chatRef && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const atlasInfoData = [
    {
      title: 'onboarding.contributorRoles.bounties.title',
      text: 'onboarding.contributorRoles.bounties.text',
      buttonText: 'onboarding.button.chatIntegrator.text',
      isButtonAction: true,
      image: BountiesImage,
      isImageRight: false,
      isBackroundBlack: false,
      noTopPadding: true,
    },
  ];

  return (
    <ContributeLayout t={t} onChatWithIntegrator={handleButtonAction}>
      <SiteMetadata lang={language} title={t(data.title)} />
      <div className="Onboarding__wrapper"></div>
      <ContributorInfo t={t} title={t(data.title)} specialities={data.specialities} image={Curator} />
      <Integrators t={t} onChatWithIntegrator={handleButtonAction} />
      <Bounties t={t} onChatWithIntegrator={handleButtonAction} renderChatWithIntegrator={true} />
      {atlasInfoData.map((item, index) => {
        return <AtlasInfo t={t} key={index} {...item} onButtonClick={handleButtonAction} />;
      })}
      <WorkingGroups
        t={t}
        title={t('onboarding.contributorRoles.workingGroups.title')}
        subtitle={t('onboarding.contributorRoles.workingGroups.subtitle')}
        onChatWithIntegrator={handleButtonAction}
        renderChatWithIntegrator={true}
      />
      <div ref={chatRef}></div>
      <ChatIntegrator t={t} />
    </ContributeLayout>
  );
};

export default Onboarding;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
