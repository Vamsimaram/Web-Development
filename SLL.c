// CS531 Assignment 3
// Vamsi Krishna Maram
// G01478991

#include <stdio.h> //printf, scanf definition functions
#include <stdlib.h> //malloc, free definition functions
#include <string.h> //strlen, strcpy functions

//Structure for node IPv4 address with aliaes
struct address_t {
	int octet[4];
	char alias[11];
	struct address_t *next;
};

struct address_t *head = NULL; //head of linked list

void addAddress(); //function to add address
void lookupAddress(); //function to lookup address
void updateAddress(); //function to update address
void deleteAddress(); //function to delete address
void displayList(); //function to display list
void displayAliasesForLocation(); //function to display aliaes for location
void saveToFile(); //function to save file
void printMenu(); //function to print the menu
void quitProgram(); //function to quit the program
void readFromFile(); // New function for reading from file

//function to compare if the two addresses are equal
int areAddressesEqual(const struct address_t *addr1, const struct address_t *addr2) {
	return (addr1->octet[0] == addr2->octet[0] &&
			addr1->octet[1] == addr2->octet[1] &&
			addr1->octet[2] == addr2->octet[2] &&
			addr1->octet[3] == addr2->octet[3]);
}

int main() {
	readFromFile(); // Read data from file at the beginning
	int optn; //option for menu 

	//loop to display menu
	do {
		printMenu();
		printf("Enter your choice: ");
		scanf("%d", &optn);

		//switch case for menu
		switch (optn) {
			case 1:
				addAddress();
				break;
			case 2:
				lookupAddress();
				break;
			case 3:
				updateAddress();
				break;
			case 4:
				deleteAddress();
				break;
			case 5:
				displayList();
				break;
			case 6:
				displayAliasesForLocation();
				break;
			case 7:
				saveToFile();
				break;
			case 8:
				quitProgram();
				break;
			default:
				printf("Invalid choice. Please try again.\n");
		}
	} while (optn != 8); 
	return 0;
}

//function to print the menu
void printMenu() {
	printf("\nSelect one option:\n");
	printf("1) Add the Address\n");
	printf("2) Lookup the Address\n");
	printf("3) Update the Address\n");
	printf("4) Delete the Address\n");
	printf("5) Display the list\n");
	printf("6) Display aliases for the location\n");
	printf("7) Save to file\n");
	printf("8) Quit\n");
}

//function  to read the file
void readFromFile() {
	FILE *file = fopen("CS531_Inet.txt", "r"); //open the file for reading
	if (file == NULL) {
		printf("Error, opening file for reading.\n"); //if file not found
		return;
	}

	//read data from file
	while (!feof(file)) { 
		struct address_t *newAdd = (struct address_t *)malloc(sizeof(struct address_t)); //allocate memory for new node
		if (!newAdd) { 
			printf("Memory allocation is failed.\n"); //if memory is not allocated
			exit(EXIT_FAILURE);
		}

		int count = fscanf(file, "%d.%d.%d.%d %s\n", &newAdd->octet[0], &newAdd->octet[1], &newAdd->octet[2], &newAdd->octet[3], newAdd->alias);
		
		//if data is read
		if (count == 5) { 
			newAdd->next = head;
			head = newAdd;
		} else {
			free(newAdd);
		}
	}
	fclose(file);
}

//function to add address
void addAddress() {
	//allocate memory for new node
	struct address_t *newAdd= (struct address_t *)malloc(sizeof(struct address_t));

	//if memory is not allocated
	if (!newAdd) { 
		printf("Memory allocation is failed.\n");
		exit(EXIT_FAILURE);
	}

	// ask user for an IPv4 address
	char addressString[20]; //string to store address
	printf("Enter new IPv4 address (e.g: 121.23.44.6): ");
	scanf("%s", addressString);

	// Parse the address string
	if (sscanf(addressString, "%d.%d.%d.%d", &newAdd->octet[0], &newAdd->octet[1], &newAdd->octet[2], &newAdd->octet[3]) != 4) {
		printf("Invalid address format. Please try again.\n"); //if address is not in correct format
		free(newAdd); //free the memory
		return;
	}

	// ask user for an alias
	printf("Enter new alias (up to 10 characters): ");
	scanf("%s", newAdd->alias);

	// Check for duplicate address or alias
	struct address_t *cur = head;

	//loop for cheking if address or alias is already present
	while (cur != NULL) {
		if (areAddressesEqual(cur, newAdd) || strcasecmp(cur->alias, newAdd->alias) == 0) {
			printf("Error: The address or alias already exists in the list. Please try again.\n");
			free(newAdd);
			return;
		}
		cur = cur->next;
	}

	//add the new address to the list
	newAdd->next = head;
	head = newAdd;

	printf("Address added successfully.\n");
}

//function to look up the address
void lookupAddress() {
	char searchAlias[11]; //string to store alias
	printf("Enter the alias to look: ");
	scanf("%s", searchAlias);

	struct address_t *cur = head; //current node

	//loop to find address
	while (cur != NULL) {
		if (strcasecmp(cur->alias, searchAlias) == 0) {
			printf("The corresponding address: %d.%d.%d.%d\n", cur->octet[0], cur->octet[1], cur->octet[2], cur->octet[3]); //print the address
			return;
		}
		cur = cur->next; 
	}
	printf("Error, alias is not found in the list.\n");
}

//function to update the address
void updateAddress() {
	char updateAlias[11]; //string to store alias
	printf("Enter the alias to update: ");
	scanf("%s", updateAlias);

	struct address_t *cur = head; //current node
	struct address_t *prev = NULL; //previous node

	//search for the alias in the list
	while (cur != NULL) {
		//if aliaes are found
		if (strcasecmp(cur->alias, updateAlias) == 0) {
			printf("Current address: %d.%d.%d.%d\n", cur->octet[0], cur->octet[1], cur->octet[2], cur->octet[3]); //print the address

			struct address_t *newAdd = (struct address_t *)malloc(sizeof(struct address_t)); //allocate memory for new node

			//if memory is not allocated
			if (!newAdd) {
				printf("Memory allocation failed.\n");
				exit(EXIT_FAILURE);
			}

			//ask user for a new IPv4 address
			char newAddressString[20];  //string to store address
			printf("Enter new IPv4 address (e.g., 192.168.1.1): ");
			scanf("%s", newAddressString);

			//parse the address string
			if (sscanf(newAddressString, "%d.%d.%d.%d", &newAdd->octet[0], &newAdd->octet[1], &newAdd->octet[2], &newAdd->octet[3]) != 4) {
				printf("Error, Invalid address format. Please try again.\n");
				free(newAdd);
				return;
			}

			//check for duplicate address
			struct address_t *checkDuplicate = head; //current node
			while (checkDuplicate != NULL) {
				//if address is found
				if (strcasecmp(checkDuplicate->alias, updateAlias) != 0 &&
					areAddressesEqual(checkDuplicate, newAdd)) {
					printf("Error, New address is duplicate one. Please try again.\n"); //if address is duplicate
					free(newAdd); //free the memory
					return;
				}
				checkDuplicate = checkDuplicate->next; //move to next node
			}

			//check if the new address is the same as the current address
			if (areAddressesEqual(cur, newAdd)) {
				printf("Error, New address is the same as the current address. Please try again.\n"); //if address is same
				free(newAdd); //free the memory
				return;
			}

			//update the address in the list
			if (prev == NULL) {
				head = newAdd; //if previous node is null
			} else {
				prev->next = newAdd; //if previous node is not null
			}

			newAdd->next = cur->next; //move next node to new node
			memcpy(newAdd->alias, cur->alias, sizeof(cur->alias));  //copy the alias
			free(cur);  //free the memory

			printf("Address updated successfully.\n");
			return;
		}
		prev = cur; //update previous node
		cur = cur->next; //move to next node
	}
	printf("Error, Alias is not found in the list.\n");
}

//function to delete the address
void deleteAddress() {
	char deleteAlias[11]; //string to store alias
	printf("Enter alias to delete: ");
	scanf("%s", deleteAlias);

	struct address_t *cur = head; //current node
	struct address_t *prev = NULL; //previous node

	//search for the alias in the list
	while (cur != NULL) {
		//if alias is found
		if (strcasecmp(cur->alias, deleteAlias) == 0) {
			printf("Address to delete: %d.%d.%d.%d\n", cur->octet[0], cur->octet[1], cur->octet[2], cur->octet[3]); //print the address

			char confirm; //to store confimation of deletion
			printf("Do you want to delete this address? (Y/N): ");
			scanf(" %c", &confirm);

			//if user confirms deletions
			if (confirm == 'y' || confirm == 'Y') {
				// Update head if necessary
				if (prev == NULL) {
					head = cur->next;
				} else {
					prev->next = cur->next;
				}

				free(cur);  // Free the memory of the deleted address
				printf("Address is deleted successfully.\n");
			//if user does not confirm deletion
			} else {
				printf("Deletion is canceled.\n");
			}
			return;
		}
		prev = cur; //update previous node
		cur = cur->next; //move to next node
	}
	printf("Error, Alias not found in the list.\n"); //if alias not found
}

//function to display list
void displayList() {
	//if list is empty
	if (head == NULL) {
		printf("The list is empty.\n");
		return;
	}

	struct address_t *cur = head; //current node
	int total = 0; //total number of addresses

	//loop to display list
	while (cur != NULL) {
		printf("%d.%d.%d.%d %s\n", cur->octet[0], cur->octet[1], cur->octet[2], cur->octet[3], cur->alias); //print the address
		cur = cur->next; //move to next node
		total++; //increment the total value
	}

	printf("Total number of nodes in the list: %d\n", total); //print total number of addresses
}

//function to display aliases for location
void displayAliasesForLocation() {
	int loc1, loc2; //to store location
	printf("Enter the address location (two values between 0-255): ");
	scanf("%d %d", &loc1, &loc2);
	//if location is not in range
	if (loc1 < 0 || loc1 > 255 || loc2 < 0 || loc2 > 255) {
		printf("Error, Invalid address location.\n");
		return;
	}
	struct address_t *cur = head; //current node
	int found = 0; //flag to check if any aliaes is found
	//loop to display list
	while (cur != NULL) {
		//if location is found
		if (cur->octet[0] == loc1 && cur->octet[1] == loc2) {
			printf("Alias: %s\n", cur->alias);
			found = 1; //set the flag
		}
		cur = cur->next; //move to next node
	}
	//if no aliases are found
	if (!found) {
		printf("Error, Location is not found in the list.\n");
	}
}

//function to save the file
void saveToFile() {
	char fname[30]; //string to store file name
	printf("Enter the file name to save: ");
	scanf("%s",fname);

	//open file for writing
	FILE *file = fopen(fname, "w");
	//if file is not opened
	if (file == NULL) {
		printf("Error, opening file for writing.\n");
		return;
	}

	struct address_t *cur = head; //current node

	//write each address/alias pair to the file
	while (cur != NULL) {
		fprintf(file, "%d.%d.%d.%d %s\n", cur->octet[0], cur->octet[1], cur->octet[2], cur->octet[3], cur->alias);
		cur = cur->next; //move to next node
	}
	fclose(file); //close the file
	printf("The list saved to %s successfully.\n", fname);
}

//function to quit the program
void quitProgram() {
	printf("Exiting the program.\n");
	//free the memory
	exit(EXIT_SUCCESS);
}