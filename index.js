//nodelist and array are different things. Array lets you change with map, reduce, filter, etc. .
//However, nodelist are gives you very little abilities to mess with it, such as ForEach, item, keys...
//you can convert nodelist into an array. 

const inputs = document.querySelectorAll('.controls input');


//to see the value change of the controls input. 
function handleUpdate(){
      //dataset is an object that contains all the dataset attribute. 
    const suffix = this.dataset.sizing || ''; //the or nothing is so that we don't receive undefined. 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
   
    // console.log(this.value);
}

inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate)); //by changing the bar
inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate)); //by changing the mouse hover/moving.