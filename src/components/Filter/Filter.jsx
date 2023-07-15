import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import * as S from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <S.Text>Find contacts by name</S.Text>
      <S.Label aria-label="Contacts filter by name">
        <S.Input
          onChange={handleChangeFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Type here..."
        />
      </S.Label>
    </>
  );
};
