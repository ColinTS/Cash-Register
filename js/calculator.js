var calculatorModule = (function(){

  //PRIVATE
  var memory = 0;
  var total = 0;

  //PUBLIC
  return {

    load: function(x){
      total = x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
      return x;
    },

    getTotal: function(){
      return total;
    },

    add: function(x){
      total += x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
    },

    subtract: function(x){
      total -= x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
    },

    multiply: function(x) {
      total *= x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
    },

    divide: function(x){
      total /= x;
      if(typeof x !== 'number') {
      throw new Error('That aint no numba!');
      }
    },

    recallMemory: function(){
      return memory;
    },

    saveMemory: function(){
      memory = total;
    },

    clearMemory: function(){
      memory = 0;
    }

  };

}) ;

