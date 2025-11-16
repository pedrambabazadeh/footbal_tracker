const enm = (...args) => Object.freeze(args.reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {}));

export { enm };