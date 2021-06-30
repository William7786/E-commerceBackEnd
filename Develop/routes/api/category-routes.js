const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const allC = await Category.findAll({
      include: [{model:Product}],
    })
    res.status(200).json(allC)

  }catch (err){
    console.log (err)
  }
});

router.get('/:id', async(req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    if (!categoryData){
      res.status(404).json({message:"None Found!"});
      return;
    }
    res.status(200).json(categoryData);
  }
catch (err){
res.status(500).json(err)
}
});
  // find one category by its `id` value
  // be sure to include its associated Products


router.post('/', async(req, res) => {
  try{const newC = await Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(newC)
  } catch(err){
    status(400).json(err)
  }
  
});

router.put('/:id', (req, res) => {
  
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteDATA = await Category.destroy({
      where:{
        id: req.params.id
      },
    })
    if (!deleteDATA){
      res.status(404).json({message: "no tag"})
    } res.status(200).json(deleteDATA)
  } catch (err){
      res.status(500).json(err)
    }
  }
  // delete a category by its `id` value
);

module.exports = router;
