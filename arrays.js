var chocolateBars =
["snickers","hundred grand","kitkat","skittles"]

chocolateBars[1] = "foo"

function addElementToBeginningOfArray(array, element){
    return [element, ...array]

}

function destructivelyAddElementToBeginningndOfArray(array,element){
  array.unshift(element)
  return array

}
