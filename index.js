var recipes = {
  italian: 'spaghetti'
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]=value
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value) {
<<<<<<< HEAD
  return Object.assign({}, recipes, { [key]: value})
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign({},recipes)
  delete newObj[key]
  return newObj
=======
  Object.assign({}, recipes, {key:[value]})
  return recipes
>>>>>>> 5b7adf053cef6b5d722f73ffd7f568ab4a84bd4e
}
