import React from ‘react’;
import { useSelector, useDispatch } from ‘react-redux’;
import { openModal } from ‘#Modules/modal’;
import { ButtonLink } from ‘#Components/Common’;
import GroupTitle from ‘#Components/GroupTitle’;
import CartItem from ‘#Components/CartItem’;

const AdditionalCharges = ({ additionalChargesDetails, additionalCharges}) => {
  const dispatch = useDispatch();
  const additionalChargesDetailsHtml = additionalChargesDetails.join(‘<br><br>’);

  const modalPayload = {
    title: ‘Additional Xfinity Monthly Charges’,
    description: additionalChargesDetailsHtml,
  };

  return (
    <>
      <GroupTitle contentKey=“page.monthly.aditionalCharges” tagName=“strong”>
        <ButtonLink
          text=“Why am I being charged?”
          dispatchAction={() => dispatch(openModal(modalPayload))}
        />
      </GroupTitle>
      {additionalCharges.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CartItem key={`${item.name}-${i}`} item={item} />
      ))}
    </>
  );
};

export default AdditionalCharges;