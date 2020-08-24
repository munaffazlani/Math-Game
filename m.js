import React from ‘react’;
import { useSelector } from ‘react-redux’;
import { recurringEquipServicesSelector, additionalChargesLearnMoreSelector, additionalChargesSelector } from ‘#Utils/selectors’;
import Content from ‘#Components/Content’;
import SectionTotal from ‘#Components/SectionTotal’;
import PlanSummary from ‘./Plan/PlanSummary’;
import EquipmentAndServices from ‘./Equipment/EquipmentAndServices’;
import AdditionalCharges from ‘./AdditionalCharges/AdditionalCharges’;
import { FlexBox, Section } from ‘#Components/Common’;
import typographyClasses from ‘#Emotion/base/typography’;
import monthlyChargesClasses from ‘./styles’;

const MonthlyCharges = () => {
  const equipmentAndServices = useSelector(recurringEquipServicesSelector);
  const additionalCharges = useSelector(additionalChargesSelector);
  const additionalChargesDetails = useSelector(additionalChargesLearnMoreSelector);
  return (
    <FlexBox column>
      <h3 css={typographyClasses.heading3}>
        <Content contentKey=“page.monthlyCharges.header” />
      </h3>
      <PlanSummary />
      {equipmentAndServices && <Section css={monthlyChargesClasses.group}>
        <EquipmentAndServices items={equipmentAndServices} />
      </Section>}
     {additionalCharges && <Section css={monthlyChargesClasses.group}>
        <AdditionalCharges additionalChargesDetails={additionalChargesDetails} additionalCharges={additionalCharges} />
      </Section>}
      <SectionTotal contentKey=“page.monthlyCharges.total” totalCharges=“$TBD” />
    </FlexBox>
  );
};

export default MonthlyCharges;