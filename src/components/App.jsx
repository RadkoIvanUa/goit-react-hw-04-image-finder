import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import { Loader } from './loader/Loader';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';

// GET PHOTO FUNC
import { getPhoto } from '../helpers/api';

// STYLED COMPONENT
import { MainApp } from 'components/StyledApp';

export function App() {
  const [photosArr, setPhotosArr] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);

  // UPDATE COMPONENTS AFTER CLICK ON "LOAD MORE" BUTTON AND NEW SEARCH QUERY
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    console.log('page :>> ', page);

    const getPhotoResponse = getPhoto(searchQuery, page);
    getPhotoResponse.then(response => {
      if (response.hits.length === 0) {
        setStatus('error');
        toast.error('No results found!');
        return;
      }

      const loadMoreBtnStatus = page < Math.ceil(response.totalHits / 12);
      if (!loadMoreBtnStatus) {
        setShowLoadMoreBtn(false);
        toast.info(`We're sorry, but you've reached the end of search results`);
      }

      setPhotosArr(prevPhotosArr => [...prevPhotosArr, ...response.hits]);
      setStatus('resolved');
    });
  }, [page, searchQuery]);

  // SMOOTH SCROLL TO NEXT PAGE PHOTO
  useEffect(() => {
    if (photosArr.length > 12) {
      window.scrollBy({
        top: 200 * 2,
        behavior: 'smooth',
      });
    }
  }, [page, photosArr.length]);

  //AFTER CLICK ON SEARCH BUTTON
  const handleSubmit = searchQuery => {
    if (searchQuery.trim() === '') {
      return;
    }

    setShowLoadMoreBtn(true);
    setSearchQuery(searchQuery);
    setPage(1);
    setPhotosArr([]);
    setStatus('pending');
  };

  // UPDATE NEXT PAGE
  const onLoandMore = () => {
    setPage(page + 1);
    setStatus('pending');
  };

  return (
    <MainApp>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery photosArr={photosArr} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && showLoadMoreBtn && (
        <Button onClick={onLoandMore} />
      )}
      <ToastContainer autoClose={3000} theme="colored" />
    </MainApp>
  );
}
