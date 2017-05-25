
function reset(){
	document.getElementById("inputId").value = "";
}

function getFib(inputId,outputId){

	var n = Number(document.getElementById("inputId").value);

	var currentFib = 0;
	var fibOld = 1;
	var fibTemp = 0;


		if (n<=0){
			alert("Error: Input not greater than zero.")

			document.getElementById("inputId").onclick = reset();
		}

		else if (!Number.isInteger(n)){
			alert("Error: Input is not a number.")

			document.getElementById("inputId").onclick = reset();
		}

			else {

				for (var i = 0; i < n; i++) {
		
	
					fibTemp = currentFib;
					currentFib = fibOld + currentFib;
					fibOld = fibTemp;

					document.getElementById("outputId").innerHTML = currentFib;

				}


			}

	
}

	



	
	// put the input value into a variable
	
	// error check the input value
	
	
	
	// calculate the n-th value of the fibonacci sequence
	
	
	
	// return the n-th value to the innerHTML of your p-tag
	

 