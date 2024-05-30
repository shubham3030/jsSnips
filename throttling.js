const loggerFunc = () => {
  console.log("Throttled Function");
}

const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      //Need to make flag true after limit
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const throttledFunction = throttle(loggerFunc, 1000); //limit in ms

window.addEventListener("resize",throttledFunction);


