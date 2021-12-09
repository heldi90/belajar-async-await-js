async function hello() {
  let a = await Promise.resolve('heldi');
  return a;
}

const a = async () => {
  let b = await hello();
  console.log(b);
};

a();
