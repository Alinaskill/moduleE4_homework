Задание 2. Е4.3

function func1(obj, text) {

  if ('b' in obj == true) {
    console.log(true)
  } else {
      console.log(false)
  }
}

const obj = {

    a: 'hello',
    b: 123,

};

const text = 'Привет'

func1(obj, text)
