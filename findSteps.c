// function is comparing how to change the first word into the second word by
// returning the number of steps each character must take to become the character of the other string
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int findSteps(char *word1, char *word2);

int main (void)
{

    int result = findSteps("this", "bear");
    printf("Steps away: %i\n", result);
}


int findSteps (char *word1, char *word2)
{
	int steps = 0;

	for (int i = 0; i <= strlen(word1); i++)
	{
		steps = (word2[i] - 'a') - (word1[i] - 'a');
		printf("%d\n", steps);
	}

	return 0;
}