const initialState = {
    products: {
        floorCare: {
            description: "Cleaning your floor",
            products: [
                {
                    name: "Mr Muscle",
                    image: "/images/Mr_Muscle_Man.jpg",
                    description: "Hard-surface cleaner",
                    answer: "You will have power to fix everything. Be brave"
                }
            ]
        },
        freshYourHouse: {
            description: "Made your house to smell well",
            products: [
                {
                    name: "Glade",
                    image: "/images/glade-fresh.jpg",
                    description: "Air fresheners",
                    answer: "With Glade you will be irresistible for everyone"
                }
            ]
        },
        killInsects: {
            description: "Kill insects",
            products: [
                {
                    name: "Raid",
                    image: "/images/Raid_Logo.png",
                    description: "Insecticides",
                    answer: "With Raid you will prevail all your enemies"
                }
            ]
        }
    }
}

export default initialState