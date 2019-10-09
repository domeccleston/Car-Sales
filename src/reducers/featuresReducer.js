import * as types from "../actions/actionTypes";

// (1) DESIGN APP STATE: this app has an initial state of an object with information on a car we are buying.
// There is a base price for the car itself, an array of objects representing additional extras we can buy,
// and the total price of those additional features. Since this state object has been made for us, all we need
// to do is remember to pass it in to the reducer we're going to make, like this: state = initialState.

const initialStore = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
] 

const initialPriceTotal = 0;

const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
}

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

// (3) CREATE ONE REDUCER FUNCTION PER SLICE OF STATE: here we only have one slice of state, so create one
// reducer function to deal with our car features initialState object. This reducer function takes in the actions
// we just created, and returns a new modified state object depending on the action.

export function featuresReducer(state = {car: initialCar, price: initialPriceTotal, store: initialStore}, action) {
  switch (action.type) {
    default:
      return state;
    case types.BUY_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload].filter(
            (item, index, self) => {
              return self.indexOf(item) === index;
            }
          ),
          price: state.car.price + action.payload.price
        }
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload.id
          ),
          price: state.car.price - action.payload.price
        }
      };
  }
}
