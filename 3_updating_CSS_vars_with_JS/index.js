const inputs= document.querySelectorAll('.controls input') //returns node list(different than array in terms of default methods on them)
        
function handleUpdates(){
    //console.log(this.value);
    //dataset takes everything that starts with 'data-' in the element(here data-sizings) and puts in a object
    const suffix = this.dataset.sizing || '';//px for spacing and blur or nothing for base var
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));