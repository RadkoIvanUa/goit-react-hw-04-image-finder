import PropTypes from 'prop-types';

// ICON FOR LOADMORE BUTTON
import { CgSearchLoading } from 'react-icons/cg';

// STYLED COMPONENT
import { LoadMoreButton } from './StyledButton';

export function Button({ onClick }) {
  return (
    <LoadMoreButton type="button" onClick={() => onClick()}>
      Load more
      <CgSearchLoading />
    </LoadMoreButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
