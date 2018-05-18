var chocolateBars =
["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
    return [element, ...array]

}

function destructivelyAddElementToBeginningndOfArray(array, element){
  array.unshift(element)
  return array

}
