import alfredoImg from "./assets/chicken-alfredo.jpg";
import beefBowlImg from "./assets/korean-beef-bowls.jpg";
import shrimpTacoImg from "./assets/shrimp-tacos.jpg";
import teriyakiSalmonImg from "./assets/teriyaki-salmon.jpg";
import quesadillaImg from "./assets/chicken-quesadillas.jpg";
import bologneseImg from "./assets/spaghetti-bolognese.jpg";
import friedRiceImg from "./assets/chicken-fried-rice.jpg";
import burritoImg from "./assets/steak-burrito-bowl.jpg";

export const recipes = [
  {
    id: 1,
    name: "Chicken Alfredo",
    img:alfredoImg,
    category: "Italian",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    calories: 650,
    protein: 42,
    isFavorite: false,
    tags: ["Pasta", "High Protein", "Dinner"],
    ingredients: [
      { name: "Chicken Breast", amount: 500, unit: "g" },
      { name: "Fettuccine", amount: 300, unit: "g" },
      { name: "Heavy Cream", amount: 200, unit: "ml" },
      { name: "Parmesan Cheese", amount: 100, unit: "g" },
      { name: "Garlic", amount: 3, unit: "cloves" }
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Season and cook chicken until fully cooked.",
      "Sauté garlic and add heavy cream.",
      "Stir in parmesan until melted.",
      "Combine pasta, chicken, and sauce."
    ]
  },
  {
    id: 2,
    name: "Korean Beef Bowls",
    img:beefBowlImg,
    category: "Asian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 520,
    protein: 38,
    isFavorite: true,
    tags: ["Rice", "Meal Prep", "High Protein"],
    ingredients: [
      { name: "Lean Ground Beef", amount: 500, unit: "g" },
      { name: "White Rice", amount: 300, unit: "g" },
      { name: "Soy Sauce", amount: 60, unit: "ml" },
      { name: "Brown Sugar", amount: 30, unit: "g" },
      { name: "Garlic", amount: 3, unit: "cloves" }
    ],
    instructions: [
      "Cook rice according to package instructions.",
      "Brown ground beef in a skillet.",
      "Mix soy sauce, sugar, and minced garlic.",
      "Add sauce to beef and simmer.",
      "Serve beef over rice."
    ]
  },
  {
    id: 3,
    name: "Shrimp Tacos",
    img: shrimpTacoImg,
    category: "Mexican",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 10,
    servings: 3,
    calories: 410,
    protein: 32,
    isFavorite: false,
    tags: ["Seafood", "Quick Meals", "Dinner"],
    ingredients: [
      { name: "Shrimp", amount: 450, unit: "g" },
      { name: "Corn Tortillas", amount: 6, unit: "pieces" },
      { name: "Cabbage", amount: 150, unit: "g" },
      { name: "Lime", amount: 2, unit: "pieces" },
      { name: "Greek Yogurt", amount: 100, unit: "g" }
    ],
    instructions: [
      "Season shrimp with chili powder and salt.",
      "Cook shrimp in a skillet until opaque.",
      "Mix yogurt and lime juice for sauce.",
      "Warm tortillas.",
      "Assemble tacos with shrimp and cabbage."
    ]
  },
  {
    id: 4,
    name: "Teriyaki Salmon",
    img: teriyakiSalmonImg,
    category: "Asian",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 480,
    protein: 40,
    isFavorite: true,
    tags: ["Seafood", "High Protein", "Dinner"],
    ingredients: [
      { name: "Salmon", amount: 400, unit: "g" },
      { name: "Soy Sauce", amount: 50, unit: "ml" },
      { name: "Honey", amount: 30, unit: "g" },
      { name: "Ginger", amount: 10, unit: "g" },
      { name: "Broccoli", amount: 200, unit: "g" }
    ],
    instructions: [
      "Mix soy sauce, honey, and ginger.",
      "Coat salmon with sauce.",
      "Bake salmon at 400°F until cooked.",
      "Steam broccoli.",
      "Serve salmon with broccoli."
    ]
  },
  {
    id: 5,
    name: "Chicken Quesadillas",
    img:quesadillaImg,
    category: "Mexican",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 550,
    protein: 45,
    isFavorite: false,
    tags: ["Quick Meals", "High Protein", "Lunch"],
    ingredients: [
      { name: "Chicken Breast", amount: 300, unit: "g" },
      { name: "Flour Tortillas", amount: 4, unit: "pieces" },
      { name: "Cheddar Cheese", amount: 120, unit: "g" },
      { name: "Bell Pepper", amount: 1, unit: "piece" }
    ],
    instructions: [
      "Cook and dice chicken.",
      "Slice and sauté bell pepper.",
      "Fill tortillas with chicken, pepper, and cheese.",
      "Cook in skillet until golden on both sides.",
      "Slice and serve."
    ]
  },
  {
    id: 6,
    name: "Spaghetti Bolognese",
    img:bologneseImg,
    category: "Italian",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    calories: 590,
    protein: 35,
    isFavorite: false,
    tags: ["Pasta", "Dinner", "Meal Prep"],
    ingredients: [
      { name: "Ground Beef", amount: 500, unit: "g" },
      { name: "Spaghetti", amount: 350, unit: "g" },
      { name: "Crushed Tomatoes", amount: 400, unit: "g" },
      { name: "Onion", amount: 1, unit: "piece" },
      { name: "Garlic", amount: 3, unit: "cloves" }
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Sauté diced onion and garlic.",
      "Add beef and cook until browned.",
      "Add tomatoes and simmer for 25 minutes.",
      "Serve sauce over spaghetti."
    ]
  },
  {
    id: 7,
    name: "Chicken Fried Rice",
    img: friedRiceImg,
    category: "Asian",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 460,
    protein: 34,
    isFavorite: true,
    tags: ["Rice", "Meal Prep", "Quick Meals"],
    ingredients: [
      { name: "Chicken Breast", amount: 400, unit: "g" },
      { name: "Cooked Rice", amount: 500, unit: "g" },
      { name: "Eggs", amount: 3, unit: "pieces" },
      { name: "Frozen Vegetables", amount: 200, unit: "g" },
      { name: "Soy Sauce", amount: 50, unit: "ml" }
    ],
    instructions: [
      "Dice and cook chicken.",
      "Scramble eggs in a large skillet.",
      "Add vegetables and cook until tender.",
      "Add rice, chicken, and soy sauce.",
      "Stir-fry until heated through."
    ]
  },
  {
    id: 8,
    name: "Steak Burrito Bowl",
    img:burritoImg,
    category: "Mexican",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    calories: 610,
    protein: 48,
    isFavorite: false,
    tags: ["Rice", "High Protein", "Meal Prep"],
    ingredients: [
      { name: "Sirloin Steak", amount: 450, unit: "g" },
      { name: "White Rice", amount: 250, unit: "g" },
      { name: "Black Beans", amount: 200, unit: "g" },
      { name: "Corn", amount: 150, unit: "g" },
      { name: "Avocado", amount: 1, unit: "piece" }
    ],
    instructions: [
      "Cook rice according to package instructions.",
      "Season and sear steak to desired doneness.",
      "Rest steak and slice thinly.",
      "Warm beans and corn.",
      "Assemble bowls with rice, steak, and toppings."
    ]
  }
];

export default recipes;
