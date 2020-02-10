const shoppingList = document.getElementById("list1");
if(shoppingList){
    fetch('modules/shopping/list.json')
    .then(response => {
    return response.json();
    })
    .then(list => {
        
    const listHTML = list.map(listItem => {
    return `
    
    ${ document.getElementById('list1').innerHTML= listItem.item}
 
    
    `;
        
        
       
    }).join("\n");
    shoppingList.innerHTML = listHTML;
    });
}

$('head').append('<link rel="stylesheet" type="text/css" href="modules/shopping/style.css">');

