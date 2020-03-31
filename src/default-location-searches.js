import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-danang',
    predictionPlace: {
      address: 'Da Nang, Vietnam',
      bounds: new LatLngBounds(new LatLng(16.3114599902207, 108.44838199662), new LatLng(15.9753550055496, 107.856238894078)),
    },
  },
  {
    id: 'default-hanoi',
    predictionPlace: {
      address: 'Hanoi, Vietnam',
      bounds: new LatLngBounds(new LatLng(21.3730889988542, 106.013612998305), new LatLng(20.5639581400226, 105.282080035504)),
    },
  },
  {
    id: 'default-ho-chi-minh-city',
    predictionPlace: {
      address: 'Ho Chi Minh City, Vietnam',
      bounds: new LatLngBounds(new LatLng(11.1360659787714, 107.013279296618), new LatLng(10.2714012914168, 106.363667508434)),
    },
  },
];
