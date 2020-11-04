const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, call) {
      for (const item in collection) {
        call(collection[item])
      }
      return collection
    },

    map: function(collection, call) {
      let new_array = []
      for(let item in collection) {
        new_array.push(call(collection[item]))
        console.log(call(collection[item]))
      }
      return new_array
    },

    reduce: function() {



    },

    functions: function() {



    },


  }
})()

fi.libraryMethod()
