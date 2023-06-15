import { useState } from 'react';
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

//STYLED COMPONENTS
import {
  SearchbarConatiner,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLAbel,
  SearchFormInput,
} from './StyledSearchbar';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const heandleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const heandleSearchInputChange = e => {
    const { value } = e.target;

    setSearchQuery(value);
    setIsSubmitButtonDisabled(false);

    if (value.trim() === '') {
      setIsSubmitButtonDisabled(true);
    }
  };

  return (
    <SearchbarConatiner>
      <SearchForm onSubmit={heandleSubmit}>
        <SearchFormButton
          type="submit"
          disabled={isSubmitButtonDisabled}
          className="button"
        >
          <MdImageSearch style={{ color: 'black' }} />
          <SearchFormButtonLAbel></SearchFormButtonLAbel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={heandleSearchInputChange}
        />
      </SearchForm>
    </SearchbarConatiner>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
