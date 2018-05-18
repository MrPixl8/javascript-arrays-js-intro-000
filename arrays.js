var chocolateBars =
["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
    return [element, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

fucntion addElementToEndOfArray(array, element){
    return [element, array...]
}
