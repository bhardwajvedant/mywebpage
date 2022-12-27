const image = document.querySelector("img");
const button = document.querySelector("button");
const heading = document.querySelector("h1");
document.getElementsByTagName("a")[0].setAttribute("target","_blank");

image.onmouseover=()=>{
    image.setAttribute("src","/images/mountains.jpg");

};

image.onmouseout=()=>{
    image.setAttribute("src","/images/sunset.jpg");
};

function setUsername(){
    const name = prompt("Enter your name");
    console.log(name);
    if(name==null || name.length===0){
        setUsername();
    }
    else{
        let localstgName = localStorage.getItem("name");
        if(localstgName==null){
           console.log("setting name to local storage");
           localStorage.setItem("name",name);
           localstgName = localStorage.getItem("name");
           
        }

        heading.innerText=`My name is ${localstgName}`;
    }
}
