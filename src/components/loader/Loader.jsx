import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeDots
      color="#E57C23"
      width="100"
      visible={true}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: '0 auto' }}
    />
  );
}
