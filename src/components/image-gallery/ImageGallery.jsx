import { useState } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { ImageGaleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

// STYLED COMPONENT
import { ImageGalleryConatiner } from './StyledImageGallery';

export function ImageGallery({ photosArr }) {
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = e => {
    const largeImageURL = e.target.dataset.large;

    if (!largeImageURL) {
      return;
    }

    setLargeImageURL(largeImageURL);
    setIsModalOpen(true);
  };

  const hendleModalClose = () => setIsModalOpen(false);

  return (
    <ImageGalleryConatiner onClick={handleModalOpen}>
      {photosArr.map(({ webformatURL, largeImageURL }) => (
        <ImageGaleryItem
          key={webformatURL}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
      <Modal
        largeImageURL={largeImageURL}
        isModalOpen={isModalOpen}
        onCloseModal={hendleModalClose}
      />
    </ImageGalleryConatiner>
  );
}

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
