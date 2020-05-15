import "./scss/main.css";
import { initializeSearch } from './modules/search';
import { multiEvent } from './modules/multi';
import { unitEvent } from './modules/unit';
import { setDateEvents } from './modules/date';

initializeSearch()
multiEvent()
unitEvent()
setDateEvents()