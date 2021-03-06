function VerifyName(id, id2)
{
    var inputText = document.getElementById(id);
    var message = document.getElementById(id2);
    if(inputText.value.length < 3)
    {
        var message = document.getElementById(id2);
        message.innerHTML = "Item must be at least 3 characters long.";
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

function VerifyIngredient(input, message, type)
{
    var inputEl = document.getElementById(input);
    if (inputEl.value.length >= 3)
    {
        
        var messageEl = document.getElementById(message);
        var typeEl = document.getElementById(type);
        var storageIng = {name: inputEl.value, id_input: input, type_id: typeEl.value, id_select: type};
        localStorage.setItem("ingredient", JSON.stringify(storageIng));
        var ingredient = {id_type: typeEl.value, name: inputEl.value};
        var ingredientJSON = JSON.stringify(ingredient);
        var param = "ingredient="+ingredientJSON;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                var text = xhttp.responseText;
                if(text === "exists")
                {
                    inputEl.style.borderColor = "red";
                    messageEl.innerHTML = "Ingredient already exists.";
                    messageEl.style.display = "block";
                }
                else
                {
                    inputEl.style.borderColor = "green";
                    messageEl.style.display = "none";
                    enableItem("buttonAdd");
                }
            }
        };
        xhttp.open("POST", "index.php/recipe/VerifyIngredient", true);
        xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
        xhttp.send(param);
    }
}

function enableItem(id)
{
    document.getElementById(id).disabled = false;
}

function addIngredient(input, message, type)
{
    var inputEl = document.getElementById(input);
    if (inputEl.value.length >= 3)
    {
        var messageEl = document.getElementById(message);
        var typeEl = document.getElementById(type);
        var ingredient = {id_type: typeEl.value, name: inputEl.value};
        var ingredientJSON = JSON.stringify(ingredient);
        var param = "ingredient="+ingredientJSON;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                var text = xhttp.responseText;
                if(text)
                {
                    inputEl.style.borderColor = "green";
                    inputEl.value = "";
                    messageEl.innerHTML = text+" was added.";
                    messageEl.style.display = "block";
                    messageEl.style.color = "green";
                    document.getElementById('removeId').click();
                }
                else
                {
                    inputEl.style.borderColor = "red";
                    messageEl.innerHTML = "There was an error.";
                    messageEl.style.display = "block";
                }
            }
        };
        xhttp.open("POST", "index.php/recipe/AddIngredient", true);
        xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
        xhttp.send(param);
    }
}

function getIngredients(type, list)
{
    var ingType = document.getElementById(type);
    var param = "type="+ingType.value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                var ingList = JSON.parse(text);
                var count = ingList.length;
                var number = 0;
                var select = document.getElementById(list);
                while (select.firstChild) {
                    select.removeChild(select.firstChild);
                }
                var blank = document.createElement('OPTION');
                blank.text = "-";
                select.appendChild(blank);
                while(number < count)
                {
                    var option = document.createElement('OPTION');
                    option.value = ingList[number].id;
                    option.text = ingList[number].name;
                    select.appendChild(option);
                    number++;
                }
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/getIngredients", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send(param);
}

function add(id)
{
    console.log(id);
}

function addIngInput(id)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                var list = document.getElementById(id);
                var li = document.createElement('LI');
                li.innerHTML = text;
                list.appendChild(li);
                li.className = "animated slideInDown";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/addIngredientInput", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function removeIngInput(id)
{
    var child = id.parentNode.parentNode;
    child.className = "animated fadeOut";
    child.addEventListener('webkitAnimationEnd', function( event ) {
        child.parentNode.removeChild(child);
        document.getElementById('buttonIngForm').disabled = false;
    }, false );
    
}

function addIngForm(id, button)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                var list = document.getElementById(id);
                var li = document.createElement('LI');
                li.innerHTML = text;
                list.appendChild(li);
                li.className = "animated slideInDown";
                button.disabled = true;
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/addIngForm", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

function enableRecipeSubmit()
{
    storeRecipe();
    var name = document.getElementById('nameRecipe');
    var type = document.getElementById('typeRecipe');
    var steps = document.getElementById('stepsRecipe');

    if((name.value != '') && (type.value != "") && (steps != ''))
    {
        document.getElementById('buttonRecipe').disabled = false;
    }
}

function VerifyRecipe(id, id2)
{
    var inputText = document.getElementById(id);
    var message = document.getElementById(id2);
    if(inputText.value.length < 4)
    {
        var message = document.getElementById(id2);
        message.innerHTML = "Recipe name must be more than 4 characters long";
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
        storeRecipe();
    }
}

function storeRecipe()
{
    var ingList = document.getElementById('ingList').childNodes;
    
    var total = ingList.length;
    var number = 0;
    var ingredients = [];
    var num = 0;
    while(number < total)
    {
        if(ingList[number].firstChild != null)
        {
            ingredients[num] = ingList[number].outerHTML;
            num++;
        }
        number++;
    }
    var recipe = {name_input: 'nameRecipe', name_value: document.getElementById('nameRecipe').value, 
                  type_input: 'typeRecipe', type_value: document.getElementById('typeRecipe').value,
                  steps_input: 'stepsRecipe', steps_value: document.getElementById('stepsRecipe').value,
                  list_input: 'ingList', list_values: ingredients}
    localStorage.setItem("recipe", JSON.stringify(recipe));
}

function addRecipe(name, message, type, steps, list)
{
    var nameRecipe = document.getElementById(name);
    var typeRecipe = document.getElementById(type);
    var stepsRecipe = document.getElementById(steps);
    var ingList = document.getElementById(list).childNodes;
    var total = ingList.length;
    var number = 0;
    var ingredients = [];
    var num = 0;

    while(number < total)
    {
        if(ingList[number].firstChild != null)
        {
            var node_list =  ingList[number].firstChild.childNodes;
            var ingredient = {id_ingredient: node_list[7].value, id_measurement: node_list[11].value, quantity: node_list[15].value};
            ingredients[num] = ingredient;
            num++;
        }
        number++;
    }

    var recipe = {name: nameRecipe.value, id_type: typeRecipe.value, steps: stepsRecipe.value, ingredientList: ingredients};
    var recipeJSON = JSON.stringify(recipe);
    var param = "recipe="+recipeJSON;

    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                var text = xhttp.responseText;
                if(text)
                {
                    moveUp("child", text);
                    window.scrollTo(0, 0);
                }
                else
                {
                    stepsRecipe.style.borderColor = "red";
                    message.innerHTML = "There was an error.";
                    message.style.display = "block";
                }
            }
        };
        xhttp.open("POST", "index.php/recipe/AddRecipe", true);
        xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
        xhttp.send(param);
}

function rateRecipe(id, rating, element)
{
    var rate = {recipe: id, rated: rating};
    var param = "rate="+JSON.stringify(rate);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {

                var stars = element.parentNode.childNodes;
                element.parentNode.style.opacity = "0.5";
                for(i = 0; i < stars.length; i++)
                {
                    stars[i].disabled = true;
                }
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/RateRecipe", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send(param);
}

function addIngSearch(id)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var text = xhttp.responseText;
            if(text)
            {
                var list = document.getElementById(id);
                var li = document.createElement('LI');
                li.innerHTML = text;
                list.appendChild(li);
                li.className = "animated slideInDown";
            }
        }
    };
    xhttp.open("POST", "index.php/recipe/addIngredientSearch", true);
    xhttp.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhttp.send();
}

