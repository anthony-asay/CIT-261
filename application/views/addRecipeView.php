<div id="formRegister" class="form" style="width: 1050px; margin-left: 200px;">
	<div class="header"><h3>Add Recipe or <button class="btn" onclick="loadHome()">Return Home</button></h3></div>
	<form action="" method="post">
		<div class="error" id="typeMessage"></div>
		<ul id="formList">
			<li>
				<h4>Name:</h4>
				<input id="nameRecipe" value='' onkeyup="VerifyRecipe('nameRecipe', 'nameRecipeMessage')" type="text" title="name" name="name" placeholder="Recipe Name" required/>
				<div class="error" id="nameRecipeMessage"></div>
			</li>
			<li>
				<h4>Recipe Type:</h4>
				<select id="typeRecipe" required onchange="enableRecipeSubmit()">
					<option>-</option>
					<?php foreach ($recipeTypes as $item): ?>
								<option value="<?php echo $item->id;?>"><?php echo $item->name;?></option>
					<?php endforeach;?>
				</select>
			</li>
			<li>
				<h4 style="float: left; display: block; width:100%">Ingredients:</h4><br>
				<ul id="ingList">
					<li id="ing1">
						<div>
								<h5 class="form-label">Ingredient Type:</h5>
								<select id="ingT0" onchange="getIngredients('ingT0', 'ingI0')">
									<option>-</option>
									<?php foreach ($types as $item): ?>
										<option value="<?php echo $item->id;?>"><?php echo $item->name;?></option>
									<?php endforeach;?>
								</select>
							
								<h5 class="form-label">Ingredient:</h5>
								<select id="ingI0">	
									<option>-</option>
								</select>
							
								<h5 class="form-label">Measurement (optional):</h5>
								<select id="ingM0">
									<option>-</option>
									<?php foreach ($measurements as $item): ?>
										<option value="<?php echo $item->id;?>"><?php echo $item->name;?></option>
									<?php endforeach;?>
								</select>
							
								<h5 class="form-label">Quantity:</h5>
								<input style="width: 40px;" id="ingQ0" type="number">
							
						<button type="button" class="remove" style="margin: 0px; padding: 12px;" onclick="removeIngInput(this)"></button>
						</div>
					</li>
				</ul>
				<div>
					<button style="margin: 0; margin-top: 15px;" type="button" class="btn" onclick="addIngInput('ingList')">Add Ingredient</button>
				<button style="margin: 0; margin-top: 15px; " id="buttonIngForm" type="button" class="altbtn" onclick="addIngForm('ingList', this)">If Ingredient is not available click me</button>
				</div>
				
			</li>
			<li>
				<h4 style="display: block;">Steps:</h4>
				<textarea id="stepsRecipe" onkeyup="enableRecipeSubmit()"></textarea>
				<div class="error" id="stepsIngredientMessage"></div>
			</li>
		</ul>
		<div class="header"><h3><button type="button" style="margin-left:15px;" id="buttonRecipe" onclick="addRecipe('nameRecipe', 'nameRecipeMessage', 'typeRecipe', 'stepsRecipe', 'ingList')" disabled class="btn">Submit Recipe</button></h3></div>
	</form>
</div>
<div id="RegisterMessage" class="message positive"></div>