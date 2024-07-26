const initialState = {
    assets: [],
  };
  
  const assetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ASSET':
        return {
          ...state,
          assets: [...state.assets, { ...action.payload, approved: false }],
        };
      case 'APPROVE_ASSET':
        return {
          ...state,
          assets: state.assets.map((asset, index) =>
            index === action.payload ? { ...asset, approved: true } : asset
          ),
        };
      case 'REJECT_ASSET':
        return {
          ...state,
          assets: state.assets.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default assetReducer;
  