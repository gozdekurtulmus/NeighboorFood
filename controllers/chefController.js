const multer = require('multer')
const path = require('path')
const Chef = require('../models/chefModel')
const Food = require('../models/foodModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const User = require('../models/userModel')
const Menu = require('../models/menuModel')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/thumbnails')
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`)
  },
})

const upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true)
    } else {
      cb(new AppError('Not an image! Please upload only images.', 400), false)
    }
  },
})

exports.getAllChefs = catchAsync(async (req, res, next) => {
  const city = req.params.location
  const chefs = await Chef.find({ city: city })
    .populate({
      path: 'userInfos',
    })
    .populate({
      path: 'menu',
      populate: {
        path: 'foods',
        model: 'Food',
        select: 'name price kcal likes dislikes carts -_id',
      },
    })

  const chefData = chefs.map((chef) => {
    return {
      id: chef.userInfos.id,
      name: chef.userInfos.name,
      surname: chef.userInfos.surname,
      chefFoods: chef.menu
        ? chef.menu.foods.map((food) => {
            return {
              chefId: chef.userInfos.id,
              menuName: food.name,
              price: food.price,
              kcal: food.kcal,
              carts: food.carts,
              likes: food.likes,
              dislikes: food.dislikes,
            }
          })
        : [],
    }
  })
  res.status(200).json({
    status: 'success',
    results: chefs.length,
    data: chefData,
  })
})

exports.getChefById = catchAsync(async (req, res, next) => {
  console.log('a')
  const userId = req.params.id
  const chef = await Chef.find({ userInfos: userId }).populate({
    path: 'userInfos',
  })
  console.log(chef)
  if (!chef || chef.length === 0) {
    const id = req.params.id
    return next(new AppError(`No chef found with that ${id}`, 404))
  }

  res.status(200).json({
    status: 'success',
    results: chef.length,
    data: {
      chef,
    },
  })
})

exports.getChefByDistrict = catchAsync(async (req, res, next) => {
  const district = req.params.district
  const chefs = await Chef.find().populate({
    path: 'userInfos',
    match: { district: district },
  })

  if (!chefs || chefs.length === 0) {
    return next(new AppError(`No chef found in ${district}`, 404))
  }

  res.status(200).json({
    status: 'success',
    results: chefs.length,
    data: {
      chefs,
    },
  })
})

exports.getChefMenu = catchAsync(async (req, res, next) => {
  const userId = req.params.id
  const chef = await Chef.findOne({ userInfos: userId })
    .populate({
      path: 'menu',
      model: 'Menu',
      populate: {
        path: 'foods', // 'foods' is an array of Food references in the Menu model
        model: 'Food', // 'Food' is the model name for our foods
      },
    })
    .populate({
      path: 'userInfos',
    })
  if (!chef) {
    const id = req.params.id
    return next(new AppError(`No chef found with that ${id}`, 404))
  }
  res.status(200).json({
    status: 'success',
    data: {
      chef,
      menu: chef.menu,
    },
  })
})

exports.updateChef = catchAsync(async (req, res, next) => {
  const chefId = req.params.id
  const { thumbnail, menu, about } = req.body

  const chef = await Chef.findOne({ userInfos: chefId })
  if (!chef) {
    return next(new AppError(`No chef found with that ${chefId}`, 404))
  }

  if (thumbnail) {
    chef.thumbnail = thumbnail
  }
  if (menu) {
    chef.menu = menu
  }
  if (about) {
    chef.about = about
  }

  await chef.save()

  res.status(200).json({
    status: 'success',
    data: {
      chef,
    },
  })
})

exports.updateAbout = catchAsync(async (req, res, next) => {
  const chefId = req.params.id
  const { about } = req.body
  const chef = await Chef.findOne({ userInfos: chefId })
  if (!chef) {
    return next(new AppError(`No chef found with that ${chefId}`, 404))
  }
  chef.about = about
  await chef.save()
  res.status(200).json({
    status: 'success',
    data: {
      chef,
    },
  })
})

exports.addFoodToMenu = catchAsync(async (req, res, next) => {
  const chefId = req.params.id
  const { name, kcali, price, likes, disslikes, image } = req.body
  const newFood = new Food({ name, kcali, price, likes, disslikes, image })
  const savedFood = await newFood.save()
  const chef = await Chef.findOne({ userInfos: chefId })
  const menu = await Menu.findOne({ chefInfos: chefId })
  menu.foods.push(savedFood._id)
  await menu.save()
  res.status(200).json({
    status: 'success',
    data: {
      chef,
      menu,
    },
  })
})

exports.removeFoodFromMenu = catchAsync(async (req, res, next) => {
  const chefId = req.params.id
  const foodId = req.params.foodId
  const chef = await Chef.findOne({ userInfos: chefId })
  const menu = await Menu.findOne({ chefInfos: chefId })
  menu.foods.pull(foodId)
  await menu.save()
  await Food.findByIdAndDelete(foodId)
  res.status(200).json({
    status: 'success',
    data: {
      chef,
      menu,
    },
  })
})

// BURA ÇALIŞIYO AMA CANCEL CHEF OLAN BİRİ USERID'SİNİ GİRİNCE HATA VERİYO AMA TÜM USERLARDA ARAYINCA O ID İLE ÇIKIYOR
exports.cancelChef = catchAsync(async (req, res, next) => {
  const userId = req.params.id
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isChef: false },
    { new: true, runValidators: true }
  )
  const chef = await Chef.findOneAndDelete({ userInfos: userId })
    .populate({
      path: 'userInfos',
    })
    .exec()
  if (!user) {
    const id = req.params.id
    return next(new AppError(`No user found with that ${id}`, 404))
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
      isChef: user.isChef,
    },
  })
})
;(exports.changeThumbnail = upload.single('thumbnail')),
  catchAsync(async (req, res, next) => {
    const userId = req.params.id
    const chef = await Chef.findOne({ userInfos: userId })
    const realChefId = chef.userInfos._id

    if (!chef) {
      return next(new AppError(`No chef found with that id: ${userId}`, 404))
    }

    //burası çalışcak mı emin değilim
    if (chef.thumbnail) {
      removeThumbnail(chef.thumbnail)
    }
    const imagePath = path.join('images', 'thumbnails', req.file.filename)

    await Chef.findOneAndUpdate(
      { userInfos: realChefId },
      { thumbnail: imagePath },
      { new: true, runValidators: true }
    )

    res.status(200).json({
      status: 'success',
      data: {
        thumbnail: chef.thumbnail,
      },
    })
  })

exports.removeThumbnail = catchAsync(async (req, res, next) => {
  const userId = req.params.id
  const chef = await Chef.findOneAndUpdate(
    { userInfos: userId },
    { thumbnail: '' },
    { new: true, runValidators: true }
  )

  if (!chef) {
    return next(new AppError(`No chef found with that id: ${userId}`, 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      thumbnail: chef.thumbnail,
    },
  })
})
