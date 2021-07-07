module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) {
    return item;
  } else {
    const newItem = {
      ...item,
      enhancement: item.enhancement + 1
    }
    return newItem;
  }
};

function fail(item) {
  if (item.enhancement < 15) {
    return {...item, durability: item.durability - 5};
  } else if (this.enhancement >= 15 ) {
    return {...item, durability: item.durability - 10}
  } else {
    return {...item, durability: item.durability - 10, enhancement: item.enhancement - 1}
  }
};

function repair(item) {
  const newItem = {
    ...item,
    durability: 100
  };
  return newItem;
};

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return {...item, name: `[+${item.enhancement}] ${item.name}`}
  };
};
