import './index.scss';
import 'materialize-css';
import { mySwiper, settings } from './components/constants';
import Training from './components/Training';

// eslint-disable-next-line no-undef
M.AutoInit();
console.log(settings);
if (settings.lastTrain !== new Date().toDateString()) {
  const train = new Training(settings.newCardsPerDay, settings.cardsPerDay);
  mySwiper.train = train;
}

