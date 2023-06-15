import PropTypes from 'prop-types';

// STYLED COMPONENT
import {
  GalleryItem,
  GalleryItemImg,
} from 'components/image-gallery/StyledImageGallery';

export function ImageGaleryItem({ webformatURL, largeImageURL }) {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt=""
        width="100px"
        data-large={largeImageURL}
      />
    </GalleryItem>
  );
}

ImageGaleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
