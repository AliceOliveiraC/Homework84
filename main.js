pizzaListArray = [];

function getmenu()
	{    
        // Dê um nome apropriado ao id como pizzaName
        var item = document.getElementById("pizzaName").value; 
        console.log("pizzaName")
        console.log("calabresa")
        console.log("quatro queijos")
        console.log("brigadeiro")
        console.log("mussarela")
        console.log("a moda")
        console.log("presunto")
       
        //Adicione a função push() para empurrar itens dentro para da array
        pizzaListArray.push(item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}