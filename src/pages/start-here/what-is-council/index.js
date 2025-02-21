import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import TasksInfo from '../../../components/onboarding-page/TasksInfo';
import Statistics from '../../../components/onboarding-page/Statistics';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import CouncilResponsibilities from '../../../components/onboarding-page/CouncilResponsibilities';
import { ReactComponent as Knowledge } from '../../../assets/svg/knowledge.svg';
import { ReactComponent as Diplomacy } from '../../../assets/svg/diplomacy.svg';
import { ReactComponent as Activity } from '../../../assets/svg/activity.svg';
import { ReactComponent as Perspectives } from '../../../assets/svg/perspectives.svg';
import { ReactComponent as ProposalsVoting } from '../../../assets/svg/proposalVoting.svg';
import { ReactComponent as ManageWG } from '../../../assets/svg/manageWG.svg';
import FAQ from '../../../components/onboarding-page/FAQ';
import useCouncilData from '../../../utils/pages/onboarding/useCouncilData';
import SiteMetadata from '../../../components/SiteMetadata';
import OGImage from '../../../assets/images/Joystream_Thumbnail_4.jpeg';
import useLivesessionIdentifyOnboardingRole from '../../../utils/pages/onboarding/useLivesessionIdentifyOnboardingRole';
import './style.scss';

const Onboarding = () => {
  const { councilSize, councilEndDays, councilPeriodDays } = useCouncilData();
  const { language } = useI18next();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 4;

  const { t } = useTranslation();
  useLivesessionIdentifyOnboardingRole();

  const questions = [
    {
      title: t('onboarding.page4.faq.questions.question1.question'),
      text: t('onboarding.page4.faq.questions.question1.answer'),
    },
    {
      title: t('onboarding.page4.faq.questions.question2.question'),
      text: t('onboarding.page4.faq.questions.question2.answer'),
    },
    {
      title: t('onboarding.page4.faq.questions.question3.question'),
      text: t('onboarding.page4.faq.questions.question3.answer'),
    },
  ];

  const statisticsData = [
    {
      title: 'onboarding.page4.statistics.councilMembers',
      data: { isLoading: councilSize.isLoading, count: councilSize.count },
    },
    {
      title: 'onboarding.page4.statistics.nextElection',
      data: { isLoading: councilEndDays.isLoading, count: councilEndDays.count },
    },
    {
      title: 'onboarding.page4.statistics.councilPeriod',
      data: { isLoading: councilPeriodDays.isLoading, count: councilPeriodDays.count },
    },
  ];

  const tasksData = [
    {
      title: 'onboarding.page4.councilCharacteristics.task1.title',
      text: 'onboarding.page4.councilCharacteristics.task1.text',
      image: <Knowledge className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task2.title',
      text: 'onboarding.page4.councilCharacteristics.task2.text',
      image: <Diplomacy className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task3.title',
      text: 'onboarding.page4.councilCharacteristics.task3.text',
      image: <Activity className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task4.title',
      text: 'onboarding.page4.councilCharacteristics.task4.text',
      image: <Perspectives className="TasksInfo__item__image" />,
    },
  ];

  const councilResponsibilitiesData = [
    {
      title: 'onboarding.page4.councilResponsibilities.proposalVoting',
      image: <ProposalsVoting className="CouncilResponsibilities__item__image" />,
    },
    {
      title: 'onboarding.page4.councilResponsibilities.manageWG',
      image: <ManageWG className="CouncilResponsibilities__item__image" />,
    },
  ];

  return (
    <OnboardingLayout
      t={t}
      showLessonList={shouldShowLessonList}
      lessonIndex={lessonIndex}
      shouldShowGetStarted={shouldShowGetStarted}
      onGetStartedClose={() => setShouldShowGetStarted(false)}
      onLessonListClose={() => setShouldShowLessonList(false)}
      onRoleUpdated={() => setShouldReloadRole(true)}
      onIsLastPage={() => {}}
    >
      <SiteMetadata
        lang={language}
        title={t('onboarding.page4.siteTitle')}
        description={t('onboarding.page4.subtitle')}
        image={OGImage}
      />
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page4.title')}
          subtitle={t('onboarding.page4.subtitle')}
          index={lessonIndex}
          shouldReloadRole={shouldReloadRole}
          onShowGetStarted={() => setShouldShowGetStarted(true)}
          onRoleReloaded={() => setShouldReloadRole(false)}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page4.infoSection.title')} text={t('onboarding.page4.infoSection.text')} />
      <Statistics t={t} data={statisticsData} />
      <CouncilResponsibilities
        t={t}
        title={'onboarding.page4.councilResponsibilities.title'}
        data={councilResponsibilitiesData}
      />
      <InfoSection title={t('onboarding.page4.infoSection2.title')} text={t('onboarding.page4.infoSection2.text')} />
      <TasksInfo t={t} data={tasksData} />
      <FAQ title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
    </OnboardingLayout>
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
