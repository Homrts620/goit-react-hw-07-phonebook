import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => (
<LoaderBox>
    <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="#ee82ee"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
</LoaderBox>
);