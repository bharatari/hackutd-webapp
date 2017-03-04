import * as announcement from './announcement/sagas';
import * as event from './event/sagas';

export default function* rootSaga() {
  yield [
    event.watchFetchEvents(),
    event.watchFetchEvent(),
  ]
}
