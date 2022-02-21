//ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";


// the function buyPhone is the state creator
const buyPhone = () => {
  return {
      type: BUY_PHONE
  }
}

const buyTablet = () => {
  return{
      type: BUY_TABLET
  }
}

const buyTv = () => {
  return{
    type:BUY_TV
  }
}

//REDUCER: this is a function that will return a new state
// (prevState, action) => newstate
// prevState is the initial state
const initialStatePhone = {
    phones:5,
    tablet: 10
}

const initialStateTv = {
  tv:9
}

const Phonesreducer = (state = initialStatePhone, action) => {
  switch (action.type) {
      case BUY_PHONE:
          return{
              ...state,
              phones: state.phones - 1
          }
          break;
        case BUY_TABLET:
            return{
                ...state,
                tablet: state.tablet - 1
            }
            default: return state
  }
}

const Tvreducer = (state = initialStateTv, action) => {
  switch (action.type) {
      case BUY_TV:
          return{
              ...state,
              tv: state.tv - 1
          }
            default: return state
  }
}

const rootReducers = Redux.combineReducers({
  phone:Phonesreducer,
  tv:Tvreducer
})

// Creation of the store: take the cdn of redux in the cdnjs.org and paste it in the index.html, combine several reducers with the combineReducers property
const store = Redux.createStore(rootReducers);
// console.log(store);
// the available properties in the redux.createStore if we console.log it : getState, dispatch, suscribe

// display the numbers of available phones in the span with id = 'count'
const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
const availableTv = document.getElementById('count-tv');
availablePhones.innerHTML = store.getState().phone.phones;
availableTablet.innerHTML = store.getState().phone.tablet;
availableTv.innerHTML = store.getState().tv.tv;

// dispatch the action:

document.getElementById('buy-phone').addEventListener('click', () => {
  store.dispatch(buyPhone())
});

document.getElementById('buy-tablet').addEventListener('click', () => {
  store.dispatch(buyTablet())
});

document.getElementById('buy-tv').addEventListener('click', () => {
  store.dispatch(buyTv())
});


// suscribe the state: listen if there is a change in the store
store.subscribe(() => {
//   console.log(store.getState().phones)

// display on the UI the new state:
    availablePhones.innerHTML = store.getState().phone.phones;
})

store.subscribe(() => {
  //   console.log(store.getState().phones)
  
  // display on the UI the new state:
      availableTablet.innerHTML = store.getState().phone.tablet;
  })
store.subscribe(() => {
  
  // display on the UI the new state:
      availableTv.innerHTML = store.getState().tv.tv;
  })





 
 






















