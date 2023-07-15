import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { Modal } from 'components/Modal';
import * as S from './ContactCard.styled';

export const ContactCard = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(
        'Something went wrong while deleting a contact, please try again later.'
      );
    }
  }, [isError]);

  const handleDeleteContact = async contactId => {
    await deleteContact(contactId);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <S.ContactCard>
      <S.Name>{name}</S.Name>
      <S.Number>
        Phone number:
        <span>{number}</span>
      </S.Number>

      <S.List>
        <li>
          <S.Button
            type="button"
            onClick={() => handleDeleteContact(contactId)}
            disabled={isDeleting}
            className="delete"
          >
            <S.DeleteIcon />
            Delete
          </S.Button>
        </li>
      </S.List>
      {isOpenModal && (
        <Modal
          id={contactId}
          name={name}
          number={number}
          onCloseModal={handleCloseModal}
        />
      )}
    </S.ContactCard>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
