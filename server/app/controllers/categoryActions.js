// Some data to make the trick
const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browse = (req, res) => {
  res.json(categories);
};

const read = (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }

  res.json(category);
};

// Export them to import them somewhere else

module.exports = { browse, read };
