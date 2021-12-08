const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('I did something'), 3000);
  });
};

const detik = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('menunggu '), 1000);
  });
};

const doSomething = async () => {
  tes = 0;
  while (true) {
    if (tes < 10) {
      console.log(await detik(), tes + 1);
      tes++;
    } else {
      console.log(await doSomethingAsync());
      break;
    }
  }
};

const setelah = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Selesai juga'), 15000);
  });
};

const after = async (nama) => {
  console.log(await setelah(), nama);
};

console.log('Before');
doSomething();
after('Heldi');
