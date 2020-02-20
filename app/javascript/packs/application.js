require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { test, geolocate, fillInAddress, initAutocomplete } from '../components/autocomplete';

geolocate();
fillInAddress();
initAutocomplete();

