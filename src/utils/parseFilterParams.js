const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseBoolean = (isFavourite) => {
  const isString = typeof isFavourite === 'boolean';
  if (!isString) return;
console.log(isFavourite);
  const parsedIsFavourite = Boolean(isFavourite);
  console.log(parsedIsFavourite);
  if (parsedIsFavourite==='false') {
    console.log(parsedIsFavourite);
    return;
  }

  return parsedIsFavourite;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
   const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
