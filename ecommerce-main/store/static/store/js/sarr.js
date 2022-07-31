const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");



inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = students.filter((data)=>{
          return data.name.toLocaleLowerCase().includes(userData.toLocaleLowerCase())  
        });
        emptyArray = emptyArray.map((data)=>{

          return data = '<li>' + data.name + '</li>'
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showsuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li"); 
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else{
        searchWrapper.classList.remove("active");

    }
}
function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
    suggBox.display = none;
}       
    

function showsuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}