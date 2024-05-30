const fetchDataFromBackend = () => {
  console.log('Fetching data .......');
}

function debounce (fn, delay) {
  let timer;

  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
    
}

const debouncedSearch = debounce(fetchDataFromBackend, 300) // in ms
