import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ width, height, color }) => (
  <ThreeDots
    height={height}
    width={width}
    radius="9"
    color={color}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

Loader.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
