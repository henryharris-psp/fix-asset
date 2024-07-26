export const addAsset = (asset) => ({
    type: 'ADD_ASSET',
    payload: asset,
  });
  
  export const approveAsset = (index) => ({
    type: 'APPROVE_ASSET',
    payload: index,
  });
  
  export const rejectAsset = (index) => ({
    type: 'REJECT_ASSET',
    payload: index,
  });
  