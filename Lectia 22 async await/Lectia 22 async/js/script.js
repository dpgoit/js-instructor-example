function getStone(stoneName) {
  const stones = {
    Emerald: {
      price: 1300,
      quantity: 4,
    },
    Diamond: {
      price: 2700,
      quantity: 3,
    },
    Sapphire: {
      price: 400,
      quantity: 7,
    },
    Rubble: {
      price: 200,
      quantity: 2,
    },
  };

  //   return Promise.resolve(stones[stoneName]);
  return new Promise(resolve => setTimeout(() => resolve(stones[stoneName]), 1000));
}

async function gasestePiatra() {
  console.time('getStone');
  console.log('start - functie gasestePiatra()');
  const emerald = getStone('Emerald');
  const sapphire = getStone('Sapphire');
  const stones = await Promise.all([emerald, sapphire]);
  console.log(stones);
  console.log('end');
  console.timeEnd('getStone');
}

console.log('Before - initializare');
gasestePiatra();
console.log('After- final');
