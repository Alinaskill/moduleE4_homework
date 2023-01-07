Задание 1. Е4.3


function func(a) {
  for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
}

const obj = {

    a: 'hello',
    b: 123,

};

func(obj)
