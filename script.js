function clickHandler(){

    let input = document.querySelector(".input").value
    
    let dateInput = new Date(input).toLocaleDateString("en-IN");
   
    let output = document.querySelector(".output").value
    output = dateInput
    console.log(output)


}