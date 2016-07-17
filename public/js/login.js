
function moveRight(id, html)
{
    var element = document.getElementById(id);
    element.className = "moveRight";
    element.addEventListener('webkitAnimationEnd', function( event ) {

    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated bounceInLeft";
    }, false );
}

function moveLeft(id, html)
{
  var element = document.getElementById(id);
  element.className = "moveLeft";
  element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated bounceInRight";
  //view.innerHTML = html;
  }, false );
}

function moveUp(id, html)
{
    var element = document.getElementById(id);
    element.className = "animated bounceOutUp";
    element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated bounceInUp";
  //view.innerHTML = html;
  }, false );
}

function loadRecipeForm()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveRight("child", text);
                setDisplayLocal(text, "Add Recipe | GotIngredients.com");
                document.title = "Add Recipe | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/loadRecipeForm", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function loadIngredientForm()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveLeft("child", text);
                setDisplayLocal(text, "Add Ingredient | GotIngredients.com");
                document.title = "Add Ingredient | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/loadIngredientForm", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function loadHome()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveLeft("child", text);
                setDisplayLocal(text, "Home | GotIngredients.com");
                document.title = "Home | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/loadHome", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}


function fadeOut(id, html)
{
  var element = document.getElementById(id);
  element.className += "animated fadeOut";
  element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("Water");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated slideInRight";
  //view.innerHTML = html;
  }, false );
}

function speed(id, html)
{
  var element = document.getElementById(id);
  element.className += "animated lightSpeedOut";
  element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("Water");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated flipInY";
  //view.innerHTML = html;
  }, false );
}

function roll(id, html)
{
  var element = document.getElementById(id);
  element.className += "animated rollOut";
  element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("Water");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated zoomInUp";
  //view.innerHTML = html;
  }, false );
}

function fade(id, html)
{
  var element = document.getElementById(id);
  element.className += "animated fadeOut";
  element.addEventListener('webkitAnimationEnd', function( event ) {
    element.parentNode.removeChild(element);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("Water");         
    node.appendChild(textnode); 
    node.id = "child";                             
    document.getElementById("mainView").appendChild(node);
    node.innerHTML = html; 
    node.className += "animated fadeIn";
  //view.innerHTML = html;
  }, false );
}  

var nameValue = "";
function VerifyName(id, id2)
{
    var inputText = document.getElementById(id);
    var message = document.getElementById(id2);
    if(inputText.value.length < 4)
    {
        var message = document.getElementById(id2);
        message.innerHTML = "User name must be more than 4 characters long";
        message.style.display = "block";
        inputText.style.borderColor = "red";
    }
    else
    {
        var message = document.getElementById(id2);
        message.innerHTML = "";
        message.style.display = "none";
        inputText.style.borderColor = "green";
        nameValue = inputText.value;
        enableRegister();
    }
}


function checkLocal()
{
    var text = localStorage.getItem("display");
    var title = localStorage.getItem("title");
    if(text)
    {
        var element = document.getElementById("child");
        element.display = "none";
        element.parentNode.removeChild(element);
        var node = document.createElement("LI");                 
        var textnode = document.createTextNode("");         
        node.appendChild(textnode); 
        node.id = "child";                             
        document.getElementById("mainView").appendChild(node);
        node.innerHTML = text; 
        node.className += "animated zoomInUp";
        document.title = title;
    }
}

function setDisplayLocal(text, title)
{
    localStorage.setItem("display", text);
    localStorage.setItem("title", title);
}

function loadSearchForm()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveUp("child", text);
                setDisplayLocal(text, "Recipe Search | GotIngredients.com");
                document.title = "Recipe Search | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/loadRecipeSearch", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function loadRecipeList()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveUp("child", text);
                setDisplayLocal(text, "Recipe List | GotIngredients.com");
                document.title = "Recipe List | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/loadRecipes", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function searchForRecipe(list, type)
{
    var typeRecipe = document.getElementById(type);
    var ingList = document.getElementById(list).childNodes;

    var typeId = 0;
    var total = ingList.length;
    var number = 0;
    var ingredients = [];
    var num = 0;

    if(typeRecipe.value != '-')
    {
        typeId = typeRecipe.value;
    }

    if(total > 1)
    {
        while(number < total)
        {
            if(ingList[number].firstChild != null)
            {
                var node_list =  ingList[number].firstChild.childNodes;
                var ingredient = {id_ingredient: node_list[7].value};
                ingredients[num] = ingredient;
                num++;
            }
            number++;
        }
    }
    else
    {
        ingredients[0] = 0;
    }
    
    var query = {recipe_type: typeId, ingredientList: ingredients};
    console.log(query);
    var query = {recipe_type: typeId, ingredientList: ingredients};
    var param = "query="+JSON.stringify(query);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveUp("child", text);
                setDisplayLocal(text, "Recipe Search | GotIngredients.com");
                document.title = "Recipe Search | GotIngredients.com";
            }
            else
            {
                inputEl.style.borderColor = "red";
                messageEl.innerHTML = "There was an error.";
                messageEl.style.display = "block";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/RecipeSearch", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send(param);
}

function loadRecipePage(id)
{
    var param = "recipe="+id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                moveRight("child", text);
                setDisplayLocal(text, "Recipe | GotIngredients.com");
                document.title = "Recipe | GotIngredients.com";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/LoadRecipe", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send(param);
}