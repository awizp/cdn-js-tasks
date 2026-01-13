let arrayOfObjects = [
    {
        fullName: 'Vishnuprakash',
        age: 20,
        country: 'India',
        city: 'Theni',
        email: 'vishnu@gmail.com',
    },
    {
        fullName: 'Robert',
        age: 23,
        country: 'London',
        city: 'Paris',
        email: 'robert@gmail.com',
    },
    {
        fullName: 'Sivanesan',
        age: 24,
        country: 'India',
        city: 'Dindugal',
        email: 'sivanesan@gmail.com',
    },
    {
        fullName: 'Virumaandi',
        age: 25,
        country: 'India',
        city: 'Theni',
        email: 'virumaandi@gmail.com',
    },
    {
        fullName: 'Thothathri',
        age: 22,
        country: 'India',
        city: 'Madurai',
        email: 'thothathri@gmail.com',
    },
];

const identifierFunc = (findingName) => {
    let i = 0;
    let result;

    while (arrayOfObjects.length) {
        switch (findingName.toLocaleLowerCase()) {

            //name will be matching case
            case arrayOfObjects[i].fullName.toLocaleLowerCase():
                //getting the object of details
                result = {
                    fullName: arrayOfObjects[i].fullName,
                    age: arrayOfObjects[i].age,
                };

                //ending the loop when finished the search
                i = arrayOfObjects.length;

                // log the details in console
                console.log('Found the person,' + result.fullName);
                break;

            default:
                //default case to log in console
                console.log("Your name is not in this list");
                break;
        }

        // search through the array of objects
        i++;
    }

    console.log(result);
};

identifierFunc('Vishnuprakash');