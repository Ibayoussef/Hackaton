export const formatNumber = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  } else if (num >= 100000) {
    return (num / 1000).toFixed(0) + "K";
  } else {
    return num.toString();
  }
};
