const cleanSet = (set, startString) => {
  const array = [];

  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  for (const element of set) {

    if (
      typeof element === 'string' &&
      element.startsWith(startString)
    ) {

      array.push(
        element.slice(startString.length)
      );

    }
  }

  return array.join('-');
}

export default cleanSet;
