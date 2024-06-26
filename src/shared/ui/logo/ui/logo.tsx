import { Link } from 'react-router-dom';
import { getLogoSize } from '../lib/get-logo-size';
import { memo } from 'react';

type LogoProps = {
  type: 'header' | 'footer';
  isActive?: boolean;
  to: string;
}

const Logo = ({ type, isActive = false, to }: LogoProps): JSX.Element => {
  const { width, height } = getLogoSize(type);
  const image = <img className={`${type}__logo`} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />;

  if (isActive) {
    return (
      <a className={`${type}__logo-link ${type}__logo-link--active`}>
        {image}
      </a>
    );
  }

  return (
    <Link className={`${type}__logo-link`} to={to}>
      {image}
    </Link>
  );
};

const MemoizedLogo = memo(Logo);

export default MemoizedLogo;
