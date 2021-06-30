const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try{
    const allData = await Tag.findAll({
      include: {model:Product}
    })
    res.status(200).json(allData)
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async(req, res) => {
  try{
    const tData = await Tag.findByPk(req.params.id,{
      include: {model: Product}
    })
    res.status(200).json(tData)
  } catch (err){
res.status(500).json(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async(req, res) => {
  try{const newT = await Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(newT)
  } catch(err){
    status(400).json(err)
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteDATA = await Tag.destroy({
      where:{
        id: req.params.id
      },
    })
    if (!deleteDATA){
      res.status(404).json({message: "no tag"})
      return;
    } res.status(200).json(deleteDATA)
  } catch (err){
      res.status(500).json(err)
    }
  
});

module.exports = router;
