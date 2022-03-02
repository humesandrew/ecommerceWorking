const router = require('express').Router();
const {
  Tag,
  Product,
  ProductTag
} = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
      include: [Product]
    })
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
      // find a single tag by its `id`
      // be sure to include its associated Product data
      Tag.findByPk(req.params.id)
        .then((tags) => {
          res.status(200).json(tags);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    });




      router.post('/', (req, res) => {
        // create a new tag
        Tag.create(req.body)
        .then((tags) => {
          res.status(200).json(tags);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    });

      router.put('/:id', (req, res) => {
        Tag.update(req.body, {
          where: {
            id: req.params.id,
          },
        })
        .then((tags) => {
          res.status(200).json(tags);
        })
        .catch(err => {
          res.status(500).json(err);
        })
        // update a tag's name by its `id` value
      });

      router.delete('/:id', async (req, res) => {
        // delete on tag by its `id` value
          const tagDeleteId = req.params.id;
          const resultDelete = await Tag.destroy({
            where: {
              id: tagDeleteId,
            },
          });
          res.json(resultDelete);
        });

      module.exports = router;