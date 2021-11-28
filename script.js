const mainArray = ["calculator/index.html","blueReceipt/index.html"];

function show_project(name){

    let a = document.createElement("a");
    a.href = name;
    a.innerHTML = name;
    a.target = "_blank";
    document.body.append(a);
}

mainArray.forEach(name => show_project(name))
