const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Find all categories

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll ({
      include: [{ model: Product, through: ProductTag}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one tag by ID value

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk (req.params.id, {
      include: [{ model: Product, through: ProductTag}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// Delete by ID

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json("Tag deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
