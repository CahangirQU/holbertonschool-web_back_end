const createInt8TypedArray = (length,position,value) => {
  const array = new ArrayBuffer(length);
  const data_view = new DataView(array);
  if (position >= length) {
    throw new Error("Position outside range");
  }
  data_view.setInt8(position, value);
  return data_view;
};
export default createInt8TypedArray;
