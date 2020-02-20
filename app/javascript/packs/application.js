require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { autocomplete } from '../components/autocomplete';

autocomplete();
