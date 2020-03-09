require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { initAutocomplete } from '../components/autocomplete';

// geolocate();
// fillInAddress();
initAutocomplete();

// test, geolocate, fillInAddress, initAutocomplete