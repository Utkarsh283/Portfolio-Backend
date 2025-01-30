export const calculateROI = (initial, current) => 
  ((current - initial) / initial * 100).toFixed(2);

export const calculateCAGR = (initial, current, years) => 
  ((Math.pow(current / initial, 1 / years) - 1) * 100).toFixed(2);

export const calculateDrawdown = (peak, trough) => 
  (((peak - trough) / peak) * 100).toFixed(2);