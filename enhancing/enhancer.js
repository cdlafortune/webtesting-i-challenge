module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) {
    return item;
  }

  const newItem = {
    enhancement: item.enhancement + 1,
    ...item
  }
  return newItem;
};

function fail(item) {
  if (item.enhancement < 15) {
    return {durability: item.durability - 5, ...item};
  } else if (item.enhancement >= 15 ) {
    return {durability: item.durability - 10, ...item}
  } else if (item.enhancement > 16) {
    return {durability: item.durability - 10, enhancement: item.enhancement - 1, ...item}
  } else {
    return item;
  }
};

function repair(item) {
  const newItem = {
    durability: 100,
    ...item
  };
  return newItem;
};

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return {name: `[+${item.enhancement}] ${item.name}`, ...item}
  };
};
