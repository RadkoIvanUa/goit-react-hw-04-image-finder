import axios from 'axios';
import { toast } from 'react-toastify';

export async function getPhoto(searchValue, page) {
  const respone = await axios
    .get(
      `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=8893918-1ac9b13bfa29139626e319dfc&image_type=photo&orientation=horizontal&per_page=12`
    )
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });
  return respone.data;
}
