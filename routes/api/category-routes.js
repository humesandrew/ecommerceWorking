const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


  router.post("/", (req, res) => {
    // create a new category
    Category.create(req.body)
      .then((category) => {
        res.status(200).json(category);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.put("/:id", async (req, res) => {
    const categoryUpdateId = req.params.id;
    const resultUpdate = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: categoryUpdateId,
        },
      }
    );
    res.json(resultUpdate);
  });

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryDeleteId = req.params.id;
  const resultDelete = await Category.destroy(
    {
      where: { 
        id: categoryDeleteId,
      },
    }
  ); res.json(resultDelete);
});

module.exports = router;
