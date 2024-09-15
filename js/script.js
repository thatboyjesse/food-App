// let user = prompt("what's your name ?")
// let greeting = document.getElementById('text1')
// greeting.innerHTML = `welcome ${user}, please make inquiry on our products below`
let rice = 0
let beans = 1
let sharwarma = 2
let myArray = [rice, beans, sharwarma]
let p = document.getElementById('text2')
let o = document.getElementById('text3')
let t = document.getElementById('text4')
let select = document.getElementById('select')
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
})
function getInputValue(){
    const input = document.getElementById('input').value
    const value = input.toLowerCase()                       
    value == 'rice'  ? o.innerHTML =     `<select name="options" id="select" class="gen">
                                            <option value="">select an option</option>
                                            <option value="0">Jollof rice</option>
                                            <option value="1">Fried rice</option>
                                            <option value="2">Concuction rice</option>
                                        </select>
                                        `:
                                        value == 'beans'  ? o.innerHTML =     `<select name="options" id="select" class="gen">
                                            <option value="">select an option</option>
                                            <option value="0">Porridge beans</option>
                                            <option value="1">Salted beans</option>
                                        </select>
                                        `:
                                        value == 'sharwarma'  ? o.innerHTML =     `<select name="options" id="select" class="gen">
                                                <option value="">select an option</option>
                                                <option value="0">Chicken</option>
                                                <option value="1">Beef</option>
                                                <option value="2">Veggie</option>
                                            </select>
                                            `:
                                        value == ''  ? o.innerHTML = `
                                                <p> field left empty </p>
                                        `:
    
                                        o.innerHTML = `we do not sell ${value}, would you like something else`;
                                        btn.setAttribute('onclick', 'selBtn()')
    return value;
}
let btn = document.getElementById('btn')
let  a = 0
function selBtn(){
    let value = document.getElementById('select').value
    const input = getInputValue()
    value == "0" && input == 'rice' ? a = value :
                                        
    value == "1" && input == 'rice' ? a = 1:
    value == "2" && input == 'rice' ? a = 2:             
    value == "0" && input == 'beans' ? a = 0:
    value == "1" && input == 'beans' ? a = 1:
    value == "0" && input == 'sharwarma' ? a = 0:
    value == "1" && input == 'sharwarma' ? a = 1:
    value == "2" && input == 'sharwarma' ? a = 2:
    t.innerHTML = 'field left empty';
    select.innerHTML = `        <select name="drinks" id="drinks" class="gen">
    <option value="">Select a Drink</option>
    <option value="0">Water</option>
    <option value="1">Sprite</option>
    <option value="2">Coke</option>
    </select>
    <!-- <button onclick="selBtn1()"> Select </button> -->`
    value = 0
    console.log(a)
    btn.setAttribute('onclick', 'selBtn1()')
    // value.setAttribute('value', value)
    return a;
}


function selBtn1(event){
    // event.preventDefault()
    const value = document.getElementById('drinks').value;
    const input = getInputValue();
    const variant = selBtn();
    console.log(variant);
    value == "0" && input == 'rice' && variant == '0' ? t.innerHTML = 'Your Order For Water and Jollof Rice is ready':
    value == "1" && input == 'rice' && variant == '0' ? t.innerHTML = 'Your Order For Sprite and Jollof Rice is ready':
    value == "2" && input == 'rice' && variant == '0' ? t.innerHTML = 'Your Order For Coke and Jollof Rice is ready':
    value == "0" && input == 'rice' && variant == '1' ? t.innerHTML = 'Your Order For Water and Fried Rice is ready':
    value == "1" && input == 'rice' && variant == '1' ? t.innerHTML = 'Your Order For Sprite and Fried Rice is ready':
    value == "2" && input == 'rice' && variant == '1' ? t.innerHTML = 'Your Order For Coke and Fried Rice is ready':
    value == "0" && input == 'rice' && variant == '2' ? t.innerHTML = 'Your Order For Water and Concuction Rice is ready':
    value == "1" && input == 'rice' && variant == '2' ? t.innerHTML = 'Your Order For Sprite and Concuction Rice is ready':
    value == "2" && input == 'rice' && variant == '2' ? t.innerHTML = 'Your Order For Coke and Concuction Rice is ready':
    value == "0" && input == 'beans' && variant == '0' ? t.innerHTML = 'Your Order For Water and Porridge Beans is ready':
    value == "1" && input == 'beans' && variant == '0' ? t.innerHTML = 'Your Order For Sprite and Porridge Beans is ready':
    value == "2" && input == 'beans' && variant == '0' ? t.innerHTML = 'Your Order For Coke and Porridge Beans is ready':
    value == "0" && input == 'beans' && variant == '1' ? t.innerHTML = 'Your Order For Water and salted Beans is ready':
    value == "1" && input == 'beans' && variant == '1' ? t.innerHTML = 'Your Order For Sprite and salted Beans is ready':
    value == "2" && input == 'beans' && variant == '1' ? t.innerHTML = 'Your Order For Coke and salted Beans is ready':
    value == "0" && input == 'sharwarma' && variant == '0' ? t.innerHTML = 'Your Order For Water and Chicken Sharwarma is ready':
    value == "1" && input == 'sharwarma' && variant == '0' ? t.innerHTML = 'Your Order For Sprite and Chicken Sharwarma is ready':
    value == "2" && input == 'sharwarma' && variant == '0' ? t.innerHTML = 'Your Order For Coke and Chicken Sharwarma is ready':
    value == "0" && input == 'sharwarma' && variant == '1' ? t.innerHTML = 'Your Order For Water and Beef Sharwarma is ready':
    value == "1" && input == 'sharwarma' && variant == '1' ? t.innerHTML = 'Your Order For Sprite and Beef Sharwarma is ready':
    value == "2" && input == 'sharwarma' && variant == '1' ? t.innerHTML = 'Your Order For Coke and Beef Sharwarma is ready':
    value == "0" && input == 'sharwarma' && variant == '2' ? t.innerHTML = 'Your Order For Water and Veggie Sharwarma is ready':
    value == "1" && input == 'sharwarma' && variant == '2' ? t.innerHTML = 'Your Order For Sprite and Veggie Sharwarma is ready':
    value == "2" && input == 'sharwarma' && variant == '2' ? t.innerHTML = 'Your Order For Coke and Veggie Sharwarma is ready':
                                                            t.innerHTML = 'field missing';
                                                            
        // event.preventDefault()                                                    
return value;

}
// let a = 1
// let b = 20
// let c = 3
// a > b && a > c  ?  
//     console.log("A is the largest" ):
//     b > c && b > a  ? 
//     console.log("B is the largest"):
//     console.log('C is the largest');
// console.log(myArray)
// let test = myArray.splice(1,5)
// console.log(test)
// console.log(myArray)
// let newArray = myArray.map(e => e.toUpperCase())
// console.log(newArray)

