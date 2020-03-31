import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_hanoi.jpg';
import rovaniemiImage from './images/location_danang.jpg';
import rukaImage from './images/location_ho_chi_minh_city.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Hanoi',
          helsinkiImage,
          '?address=Hanoi%2C%20Vietnam&bounds=21.3730889988542%2C106.013612998305%2C20.5639581400226%2C105.282080035504'
        )}
        {locationLink(
          'Da Nang',
          rovaniemiImage,
          '?address=Da%20Nang%2C%20Vietnam&bounds=16.3114599902207%2C108.44838199662%2C15.9753550055496%2C107.856238894078'
        )}
        {locationLink(
          'Ho Chi Minh City',
          rukaImage,
          '?address=Ho%20Chi%20Minh%20City%2C%20Vietnam&bounds=11.1360659787714%2C107.013279296618%2C10.2714012914168%2C106.363667508434'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
