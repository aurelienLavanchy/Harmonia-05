const sayWelcome = (req, res) => {
  console.info(req.query);
  let { name } = req.query;
  if (name === null || name === undefined) name = "John Doe";

  res.send(`Welcome to Wild Series, ${name} !`);
};

module.exports = { sayWelcome };
