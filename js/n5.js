var noteEnEntier,moyenne,noteEnString;
var somme = 0;

for (var compteur = 0; compteur <= 9; compteur++) 
{
	noteEnString = prompt("Entrez une note de 0 a 20 : ");
	noteEnEntier = Number(noteEnString);

	while (((noteEnEntier>20)||(noteEnEntier<0))||isNaN(noteEnEntier))
	{
		alert("Votre chiffre n'est pas entre 0 et 20 ou n'en est pas un, recommencer du début :")
		noteEnString = prompt("Entrez une note de 0 a 20 : ");
		noteEnEntier = Number(noteEnString);
	}

	somme = somme+noteEnEntier;

}

moyenne = (somme/10)

alert("La moyenne est de : " + moyenne);