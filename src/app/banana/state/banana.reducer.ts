import {GET_NEW_BANANA, PEEL_BANANA} from "./banana.actions";
import * as programActions from './banana.actions';

export function reducer(state: any, action: programActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log(`REDUCER ${GET_NEW_BANANA}`);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    case PEEL_BANANA: {
      console.log(`REDUCER ${PEEL_BANANA}`);
      return {
        ...state,
        isPeeled: true
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
