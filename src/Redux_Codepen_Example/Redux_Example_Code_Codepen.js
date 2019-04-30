//NOTE - The following code only works on CodePen with a Redux setup
console.clear();

//----------------ACTION CREATORS AND ACTIONS-------------------
//Action Creator - Create Policy Form
const createPolicy = (name, amount) => {
  //Action
  return{
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};
//Action creator - Delete Policy Form
const deletePolicy = (name) => {
  //Action
  return{
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};
//Action Creator - Create A Claim Form
const createClaim = (name, amountOfMoneyToCollect) => {
  //Action
  return{
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

//--------------------------REDUCERS--------------------------
//Claims Reducer
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};
//Bag of Money Reducer
const accounting = (bagOfMoney = 10, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};
//Policies Reducer
const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name != action.payload.name);
  }
  return listOfPolicies;
};

//----------------------REDUX SETUP-------------------------
//Pulls features from Redux library
const { createStore, combineReducers } = Redux;
//Combines Reducers - prior to this all Reducers are just functions
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});
//Creates global store with Reducers - reducers return new data which is added to the global store
const store = createStore(ourDepartments);

//----------------------Dispatches Actions------------------------
//Initates Action Creators and gets back an Action (JS object)
const number1 = createPolicy('Alex', 20);
const number2 = createClaim('Alex', 10);
//Dispatch Option 1 - Pass in action as a variable
store.dispatch(number1);
store.dispatch(number2);
//Dispatch Option 2 - Initate action creator inside of dispatch function
store.dispatch(createPolicy('Fred', 50));
store.dispatch(createClaim('Fred', 10));

console.log(store.getState());
