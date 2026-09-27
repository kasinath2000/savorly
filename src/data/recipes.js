
export const recipes = [
  {
    id: "recipe-001",
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice layered with tender chicken, fragrant spices, and caramelized onions.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Indian",
    mealType: "Lunch",
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Basmati Rice", quantity: "500", unit: "g" },
      { name: "Chicken", quantity: "750", unit: "g" },
      { name: "Onion", quantity: "2", unit: "large" },
      { name: "Yogurt", quantity: "200", unit: "g" },
      { name: "Ginger Garlic Paste", quantity: "2", unit: "tbsp" },
      { name: "Biryani Masala", quantity: "2", unit: "tbsp" },
      { name: "Cooking Oil", quantity: "4", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare the rice",
        description:
          "Wash and soak the basmati rice for 20 minutes.",
      },
      {
        step: 2,
        title: "Marinate the chicken",
        description:
          "Mix chicken with yogurt, ginger garlic paste, biryani masala, salt, and spices. Marinate for at least 30 minutes.",
      },
      {
        step: 3,
        title: "Cook the chicken",
        description:
          "Heat oil and cook the marinated chicken until partially cooked.",
      },
      {
        step: 4,
        title: "Cook the rice",
        description:
          "Boil rice in salted water until about 70 percent cooked, then drain.",
      },
      {
        step: 5,
        title: "Layer the biryani",
        description:
          "Layer rice over the chicken and top with fried onions and herbs.",
      },
      {
        step: 6,
        title: "Dum cook",
        description:
          "Cover tightly and cook on low heat for 15 to 20 minutes.",
      },
    ],

    nutrition: {
      calories: 520,
      protein: 32,
      carbs: 58,
      fat: 18,
    },

    equipment: [
      "Large pot",
      "Heavy-bottom pan",
      "Mixing bowl",
      "Colander",
    ],

    tips: [
      "Use good quality basmati rice.",
      "Do not fully cook the rice before layering.",
      "Let the biryani rest before serving.",
    ],

    tags: [
      "biryani",
      "chicken",
      "indian",
      "rice",
      "main-course",
    ],
  },

  {
    id: "recipe-002",
    name: "Creamy Tomato Pasta",
    description:
      "Silky tomato pasta finished with cream, garlic, herbs, and parmesan.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Italian",
    mealType: "Dinner",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: "Easy",

    ingredients: [
      { name: "Pasta", quantity: "250", unit: "g" },
      { name: "Tomato Sauce", quantity: "300", unit: "ml" },
      { name: "Heavy Cream", quantity: "100", unit: "ml" },
      { name: "Garlic", quantity: "3", unit: "cloves" },
      { name: "Parmesan", quantity: "50", unit: "g" },
      { name: "Olive Oil", quantity: "2", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Boil the pasta",
        description:
          "Cook pasta in salted boiling water until al dente.",
      },
      {
        step: 2,
        title: "Prepare the sauce",
        description:
          "Sauté garlic in olive oil, add tomato sauce, and simmer.",
      },
      {
        step: 3,
        title: "Add cream",
        description:
          "Lower the heat and stir in the cream until smooth.",
      },
      {
        step: 4,
        title: "Combine",
        description:
          "Add pasta and toss until evenly coated.",
      },
      {
        step: 5,
        title: "Finish",
        description:
          "Add parmesan and fresh herbs before serving.",
      },
    ],

    nutrition: {
      calories: 480,
      protein: 16,
      carbs: 64,
      fat: 18,
    },

    equipment: [
      "Large pot",
      "Large skillet",
      "Colander",
    ],

    tips: [
      "Salt the pasta water generously.",
      "Reserve some pasta water.",
      "Add parmesan while the sauce is warm.",
    ],

    tags: [
      "pasta",
      "italian",
      "tomato",
      "vegetarian",
      "dinner",
    ],
  },

  {
    id: "recipe-003",
    name: "Avocado Toast",
    description:
      "Creamy smashed avocado on crispy sourdough with chili flakes and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=80",
    category: "Breakfast",
    cuisine: "Continental",
    mealType: "Breakfast",
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    servings: 2,
    difficulty: "Easy",

    ingredients: [
      { name: "Sourdough Bread", quantity: "2", unit: "slices" },
      { name: "Avocado", quantity: "1", unit: "large" },
      { name: "Lemon Juice", quantity: "1", unit: "tsp" },
      { name: "Chili Flakes", quantity: "1", unit: "pinch" },
      { name: "Olive Oil", quantity: "1", unit: "tsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Toast the bread",
        description:
          "Toast sourdough until golden and crisp.",
      },
      {
        step: 2,
        title: "Prepare avocado",
        description:
          "Mash avocado with lemon juice and salt.",
      },
      {
        step: 3,
        title: "Assemble",
        description:
          "Spread avocado evenly over the toast.",
      },
      {
        step: 4,
        title: "Finish",
        description:
          "Drizzle with olive oil and add chili flakes.",
      },
    ],

    nutrition: {
      calories: 290,
      protein: 7,
      carbs: 31,
      fat: 16,
    },

    equipment: [
      "Toaster",
      "Mixing bowl",
      "Fork",
    ],

    tips: [
      "Use ripe but firm avocados.",
      "Add lemon juice to prevent browning.",
    ],

    tags: [
      "breakfast",
      "avocado",
      "toast",
      "quick",
      "vegetarian",
    ],
  },

  {
    id: "recipe-004",
    name: "Chicken Manchurian",
    description:
      "Crispy chicken tossed in a glossy Indo-Chinese sauce with garlic, ginger, and spring onions.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    category: "Chicken",
    cuisine: "Chinese",
    mealType: "Dinner",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Chicken Breast", quantity: "500", unit: "g" },
      { name: "Cornflour", quantity: "4", unit: "tbsp" },
      { name: "Soy Sauce", quantity: "3", unit: "tbsp" },
      { name: "Ginger", quantity: "1", unit: "tbsp" },
      { name: "Garlic", quantity: "1", unit: "tbsp" },
      { name: "Spring Onion", quantity: "4", unit: "stalks" },
      { name: "Chili Sauce", quantity: "2", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare chicken",
        description:
          "Coat chicken pieces with cornflour, salt, and pepper.",
      },
      {
        step: 2,
        title: "Cook chicken",
        description:
          "Pan-fry or shallow-fry the chicken until golden and crisp.",
      },
      {
        step: 3,
        title: "Make sauce",
        description:
          "Sauté garlic and ginger, then add soy sauce and chili sauce.",
      },
      {
        step: 4,
        title: "Combine",
        description:
          "Add chicken and toss until coated with the sauce.",
      },
      {
        step: 5,
        title: "Garnish",
        description:
          "Finish with chopped spring onions and serve hot.",
      },
    ],

    nutrition: {
      calories: 410,
      protein: 35,
      carbs: 28,
      fat: 17,
    },

    equipment: [
      "Wok",
      "Mixing bowl",
      "Knife",
    ],

    tips: [
      "Keep the wok hot for better flavor.",
      "Do not overcrowd the pan.",
      "Serve immediately for maximum crispness.",
    ],

    tags: [
      "chinese",
      "chicken",
      "manchurian",
      "indo-chinese",
      "dinner",
    ],
  },

  {
    id: "recipe-005",
    name: "Bengali Fish Curry",
    description:
      "Tender fish cooked in a light mustard and tomato gravy with traditional Bengali spices.",
    image:
      "https://images.unsplash.com/photo-1534766555764-9a8f9f9ce9a8?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Bengali",
    mealType: "Lunch",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Rohu Fish", quantity: "600", unit: "g" },
      { name: "Mustard Oil", quantity: "4", unit: "tbsp" },
      { name: "Tomato", quantity: "2", unit: "medium" },
      { name: "Turmeric", quantity: "1", unit: "tsp" },
      { name: "Green Chili", quantity: "3", unit: "pieces" },
      { name: "Cumin", quantity: "1", unit: "tsp" },
      { name: "Ginger Paste", quantity: "1", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Season the fish",
        description:
          "Coat fish with turmeric and salt.",
      },
      {
        step: 2,
        title: "Fry the fish",
        description:
          "Heat mustard oil and lightly fry the fish on both sides.",
      },
      {
        step: 3,
        title: "Prepare gravy",
        description:
          "Add cumin, ginger, tomatoes, turmeric, and salt.",
      },
      {
        step: 4,
        title: "Simmer",
        description:
          "Add water and simmer until the gravy becomes fragrant.",
      },
      {
        step: 5,
        title: "Finish",
        description:
          "Add fried fish and green chilies and cook gently.",
      },
    ],

    nutrition: {
      calories: 360,
      protein: 34,
      carbs: 9,
      fat: 21,
    },

    equipment: [
      "Kadai",
      "Spatula",
      "Mixing bowl",
    ],

    tips: [
      "Use mustard oil for traditional flavor.",
      "Do not overcook the fish.",
      "Serve with steamed rice.",
    ],

    tags: [
      "bengali",
      "fish",
      "machher-jhol",
      "mustard",
      "lunch",
    ],
  },

  {
    id: "recipe-006",
    name: "Masala Dosa",
    description:
      "Crispy South Indian dosa filled with spiced potato masala and served with chutney.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
    category: "Breakfast",
    cuisine: "South Indian",
    mealType: "Breakfast",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 3,
    difficulty: "Medium",

    ingredients: [
      { name: "Dosa Batter", quantity: "500", unit: "g" },
      { name: "Potatoes", quantity: "4", unit: "medium" },
      { name: "Onion", quantity: "1", unit: "large" },
      { name: "Mustard Seeds", quantity: "1", unit: "tsp" },
      { name: "Curry Leaves", quantity: "10", unit: "leaves" },
      { name: "Green Chili", quantity: "2", unit: "pieces" },
      { name: "Turmeric", quantity: "1/2", unit: "tsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare potato masala",
        description:
          "Boil potatoes and mash them roughly.",
      },
      {
        step: 2,
        title: "Temper spices",
        description:
          "Heat oil and temper mustard seeds, curry leaves, chilies, and onions.",
      },
      {
        step: 3,
        title: "Finish masala",
        description:
          "Add potatoes and turmeric and cook for a few minutes.",
      },
      {
        step: 4,
        title: "Make dosa",
        description:
          "Spread dosa batter thinly over a hot pan.",
      },
      {
        step: 5,
        title: "Fill and serve",
        description:
          "Place potato masala inside, fold the dosa, and serve hot.",
      },
    ],

    nutrition: {
      calories: 330,
      protein: 8,
      carbs: 52,
      fat: 10,
    },

    equipment: [
      "Dosa tawa",
      "Spatula",
      "Pot",
    ],

    tips: [
      "Keep the tawa properly heated.",
      "Spread the batter quickly.",
      "Serve immediately for crisp texture.",
    ],

    tags: [
      "south-indian",
      "dosa",
      "breakfast",
      "vegetarian",
      "potato",
    ],
  },

  {
    id: "recipe-007",
    name: "Chicken Tacos",
    description:
      "Warm tortillas filled with seasoned chicken, fresh salsa, avocado, and lime.",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Mexican",
    mealType: "Dinner",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: "Easy",

    ingredients: [
      { name: "Chicken", quantity: "500", unit: "g" },
      { name: "Corn Tortillas", quantity: "8", unit: "pieces" },
      { name: "Tomato", quantity: "2", unit: "medium" },
      { name: "Onion", quantity: "1", unit: "small" },
      { name: "Avocado", quantity: "1", unit: "large" },
      { name: "Lime", quantity: "2", unit: "pieces" },
      { name: "Taco Seasoning", quantity: "2", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Season chicken",
        description:
          "Coat chicken with taco seasoning and lime juice.",
      },
      {
        step: 2,
        title: "Cook chicken",
        description:
          "Cook chicken in a hot skillet until fully cooked.",
      },
      {
        step: 3,
        title: "Prepare salsa",
        description:
          "Mix chopped tomato, onion, lime juice, and salt.",
      },
      {
        step: 4,
        title: "Warm tortillas",
        description:
          "Heat tortillas briefly on a dry pan.",
      },
      {
        step: 5,
        title: "Assemble",
        description:
          "Fill tortillas with chicken, salsa, avocado, and lime.",
      },
    ],

    nutrition: {
      calories: 390,
      protein: 29,
      carbs: 36,
      fat: 16,
    },

    equipment: [
      "Skillet",
      "Mixing bowl",
      "Knife",
    ],

    tips: [
      "Do not overcook the chicken.",
      "Warm tortillas before serving.",
      "Add fresh lime just before eating.",
    ],

    tags: [
      "mexican",
      "tacos",
      "chicken",
      "quick",
      "dinner",
    ],
  },

  {
    id: "recipe-008",
    name: "Thai Green Curry",
    description:
      "Creamy Thai curry with vegetables, coconut milk, basil, and fragrant green curry paste.",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Thai",
    mealType: "Dinner",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Coconut Milk", quantity: "400", unit: "ml" },
      { name: "Green Curry Paste", quantity: "3", unit: "tbsp" },
      { name: "Chicken", quantity: "400", unit: "g" },
      { name: "Bell Pepper", quantity: "1", unit: "large" },
      { name: "Bamboo Shoots", quantity: "100", unit: "g" },
      { name: "Thai Basil", quantity: "1", unit: "handful" },
      { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Heat the curry paste",
        description:
          "Cook green curry paste in a hot pan for a minute.",
      },
      {
        step: 2,
        title: "Add coconut milk",
        description:
          "Pour in coconut milk and bring it to a gentle simmer.",
      },
      {
        step: 3,
        title: "Cook chicken",
        description:
          "Add chicken pieces and simmer until cooked.",
      },
      {
        step: 4,
        title: "Add vegetables",
        description:
          "Add bell pepper and bamboo shoots and cook until tender.",
      },
      {
        step: 5,
        title: "Finish",
        description:
          "Season with fish sauce and finish with Thai basil.",
      },
    ],

    nutrition: {
      calories: 450,
      protein: 30,
      carbs: 18,
      fat: 29,
    },

    equipment: [
      "Wok",
      "Wooden spoon",
      "Knife",
    ],

    tips: [
      "Adjust curry paste according to spice preference.",
      "Do not boil coconut milk aggressively.",
      "Serve with steamed jasmine rice.",
    ],

    tags: [
      "thai",
      "green-curry",
      "coconut",
      "chicken",
      "dinner",
    ],
  },

  {
    id: "recipe-009",
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza topped with tomato, mozzarella, basil, and extra virgin olive oil.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Italian",
    mealType: "Dinner",
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 2,
    difficulty: "Medium",

    ingredients: [
      { name: "Pizza Dough", quantity: "400", unit: "g" },
      { name: "Tomato Sauce", quantity: "150", unit: "ml" },
      { name: "Mozzarella", quantity: "200", unit: "g" },
      { name: "Fresh Basil", quantity: "1", unit: "handful" },
      { name: "Olive Oil", quantity: "1", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Shape the dough",
        description:
          "Stretch the dough into a thin round base.",
      },
      {
        step: 2,
        title: "Add sauce",
        description:
          "Spread tomato sauce evenly over the dough.",
      },
      {
        step: 3,
        title: "Add toppings",
        description:
          "Top with mozzarella and fresh basil.",
      },
      {
        step: 4,
        title: "Bake",
        description:
          "Bake in a very hot oven until the crust is golden.",
      },
      {
        step: 5,
        title: "Finish",
        description:
          "Drizzle with olive oil and serve immediately.",
      },
    ],

    nutrition: {
      calories: 520,
      protein: 22,
      carbs: 62,
      fat: 20,
    },

    equipment: [
      "Pizza tray",
      "Rolling pin",
      "Oven",
    ],

    tips: [
      "Preheat the oven thoroughly.",
      "Do not overload the pizza with toppings.",
      "Use fresh mozzarella for better texture.",
    ],

    tags: [
      "italian",
      "pizza",
      "vegetarian",
      "mozzarella",
      "dinner",
    ],
  },

  {
    id: "recipe-010",
    name: "Chole Bhature",
    description:
      "Spiced chickpea curry served with fluffy deep-fried bhature, a popular North Indian favorite.",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Indian",
    mealType: "Lunch",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Chickpeas", quantity: "400", unit: "g" },
      { name: "Onion", quantity: "2", unit: "medium" },
      { name: "Tomato", quantity: "3", unit: "medium" },
      { name: "Chole Masala", quantity: "2", unit: "tbsp" },
      { name: "Ginger Garlic Paste", quantity: "1", unit: "tbsp" },
      { name: "Flour", quantity: "300", unit: "g" },
      { name: "Yogurt", quantity: "100", unit: "g" },
    ],

    instructions: [
      {
        step: 1,
        title: "Cook chickpeas",
        description:
          "Soak chickpeas overnight and cook until tender.",
      },
      {
        step: 2,
        title: "Prepare curry",
        description:
          "Cook onion, ginger garlic paste, tomatoes, and spices.",
      },
      {
        step: 3,
        title: "Add chickpeas",
        description:
          "Add cooked chickpeas and simmer until the gravy thickens.",
      },
      {
        step: 4,
        title: "Prepare bhature",
        description:
          "Mix flour and yogurt into a soft dough and rest it.",
      },
      {
        step: 5,
        title: "Fry",
        description:
          "Roll dough portions and deep-fry until puffed and golden.",
      },
    ],

    nutrition: {
      calories: 610,
      protein: 18,
      carbs: 82,
      fat: 24,
    },

    equipment: [
      "Pressure cooker",
      "Kadai",
      "Mixing bowl",
    ],

    tips: [
      "Soak chickpeas overnight.",
      "Cook the curry slowly for deeper flavor.",
      "Serve bhature immediately after frying.",
    ],

    tags: [
      "indian",
      "punjabi",
      "chole",
      "bhature",
      "vegetarian",
    ],
  },

  {
    id: "recipe-011",
    name: "Vegetable Fried Rice",
    description:
      "Fragrant rice stir-fried with colorful vegetables, soy sauce, garlic, and spring onions.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Chinese",
    mealType: "Lunch",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 3,
    difficulty: "Easy",

    ingredients: [
      { name: "Cooked Rice", quantity: "500", unit: "g" },
      { name: "Carrot", quantity: "1", unit: "medium" },
      { name: "Bell Pepper", quantity: "1", unit: "medium" },
      { name: "Spring Onion", quantity: "3", unit: "stalks" },
      { name: "Soy Sauce", quantity: "2", unit: "tbsp" },
      { name: "Garlic", quantity: "3", unit: "cloves" },
      { name: "Sesame Oil", quantity: "1", unit: "tsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare vegetables",
        description:
          "Chop all vegetables into small pieces.",
      },
      {
        step: 2,
        title: "Heat the wok",
        description:
          "Heat oil in a wok until very hot.",
      },
      {
        step: 3,
        title: "Stir-fry vegetables",
        description:
          "Add garlic and vegetables and stir-fry quickly.",
      },
      {
        step: 4,
        title: "Add rice",
        description:
          "Add cooked cold rice and toss continuously.",
      },
      {
        step: 5,
        title: "Season",
        description:
          "Add soy sauce, sesame oil, and spring onions.",
      },
    ],

    nutrition: {
      calories: 340,
      protein: 8,
      carbs: 58,
      fat: 9,
    },

    equipment: [
      "Wok",
      "Wooden spatula",
      "Knife",
    ],

    tips: [
      "Use cold cooked rice.",
      "Keep the wok very hot.",
      "Do not overcrowd the wok.",
    ],

    tags: [
      "chinese",
      "fried-rice",
      "vegetarian",
      "quick",
      "lunch",
    ],
  },

  {
    id: "recipe-012",
    name: "Mishti Doi",
    description:
      "Traditional Bengali sweet yogurt made with caramelized sugar and creamy milk.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    category: "Desserts",
    cuisine: "Bengali",
    mealType: "Dessert",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    difficulty: "Easy",

    ingredients: [
      { name: "Full Fat Milk", quantity: "1", unit: "liter" },
      { name: "Sugar", quantity: "150", unit: "g" },
      { name: "Plain Yogurt", quantity: "3", unit: "tbsp" },
      { name: "Cardamom", quantity: "2", unit: "pods" },
    ],

    instructions: [
      {
        step: 1,
        title: "Reduce the milk",
        description:
          "Simmer milk until it reduces slightly and becomes creamy.",
      },
      {
        step: 2,
        title: "Caramelize sugar",
        description:
          "Melt sugar gently until golden brown.",
      },
      {
        step: 3,
        title: "Combine",
        description:
          "Add warm milk to the caramel and mix carefully.",
      },
      {
        step: 4,
        title: "Add yogurt",
        description:
          "Once slightly cooled, mix in the yogurt.",
      },
      {
        step: 5,
        title: "Set",
        description:
          "Pour into bowls and allow the yogurt to set in a warm place.",
      },
    ],

    nutrition: {
      calories: 220,
      protein: 7,
      carbs: 35,
      fat: 6,
    },

    equipment: [
      "Heavy saucepan",
      "Mixing bowl",
      "Serving bowls",
    ],

    tips: [
      "Use full-fat milk.",
      "Do not add yogurt to very hot milk.",
      "Allow enough time for the yogurt to set.",
    ],

    tags: [
      "bengali",
      "dessert",
      "mishti-doi",
      "sweet",
      "vegetarian",
    ],
  },

  {
    id: "recipe-013",
    name: "Idli Sambar",
    description:
      "Soft steamed South Indian idlis served with comforting lentil sambar and fresh chutney.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    category: "Breakfast",
    cuisine: "South Indian",
    mealType: "Breakfast",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Idli Batter", quantity: "600", unit: "g" },
      { name: "Toor Dal", quantity: "150", unit: "g" },
      { name: "Tomato", quantity: "2", unit: "medium" },
      { name: "Carrot", quantity: "1", unit: "medium" },
      { name: "Sambar Powder", quantity: "2", unit: "tbsp" },
      { name: "Tamarind", quantity: "1", unit: "tbsp" },
      { name: "Curry Leaves", quantity: "10", unit: "leaves" },
    ],

    instructions: [
      {
        step: 1,
        title: "Steam the idlis",
        description:
          "Pour batter into greased idli molds and steam until fluffy.",
      },
      {
        step: 2,
        title: "Cook the dal",
        description:
          "Cook toor dal until soft and mash until smooth.",
      },
      {
        step: 3,
        title: "Cook vegetables",
        description:
          "Simmer tomato, carrot, tamarind, and sambar powder.",
      },
      {
        step: 4,
        title: "Combine",
        description:
          "Add cooked dal and simmer until the sambar thickens.",
      },
      {
        step: 5,
        title: "Temper",
        description:
          "Finish with mustard seeds and curry leaves tempered in oil.",
      },
    ],

    nutrition: {
      calories: 280,
      protein: 11,
      carbs: 48,
      fat: 6,
    },

    equipment: [
      "Idli steamer",
      "Pressure cooker",
      "Saucepan",
    ],

    tips: [
      "Do not overfill the idli molds.",
      "Use fresh batter for soft idlis.",
      "Adjust tamarind according to taste.",
    ],

    tags: [
      "south-indian",
      "idli",
      "sambar",
      "breakfast",
      "vegetarian",
    ],
  },

  {
    id: "recipe-014",
    name: "Butter Chicken",
    description:
      "Tender chicken simmered in a rich tomato, butter, cream, and aromatic spice sauce.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    category: "Chicken",
    cuisine: "Indian",
    mealType: "Dinner",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      { name: "Chicken", quantity: "600", unit: "g" },
      { name: "Tomato Puree", quantity: "400", unit: "ml" },
      { name: "Butter", quantity: "50", unit: "g" },
      { name: "Heavy Cream", quantity: "100", unit: "ml" },
      { name: "Garam Masala", quantity: "1", unit: "tbsp" },
      { name: "Ginger Garlic Paste", quantity: "1", unit: "tbsp" },
      { name: "Kasuri Methi", quantity: "1", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Marinate chicken",
        description:
          "Marinate chicken with yogurt, spices, ginger, and garlic.",
      },
      {
        step: 2,
        title: "Cook chicken",
        description:
          "Grill or pan-cook chicken until lightly charred.",
      },
      {
        step: 3,
        title: "Prepare gravy",
        description:
          "Cook tomato puree with butter and aromatic spices.",
      },
      {
        step: 4,
        title: "Add chicken",
        description:
          "Add cooked chicken and simmer gently in the gravy.",
      },
      {
        step: 5,
        title: "Finish",
        description:
          "Add cream and crushed kasuri methi before serving.",
      },
    ],

    nutrition: {
      calories: 510,
      protein: 38,
      carbs: 14,
      fat: 34,
    },

    equipment: [
      "Large skillet",
      "Mixing bowl",
      "Blender",
    ],

    tips: [
      "Char the chicken before adding it to the gravy.",
      "Use butter for a richer sauce.",
      "Add cream over low heat.",
    ],

    tags: [
      "indian",
      "butter-chicken",
      "chicken",
      "curry",
      "dinner",
    ],
  },

  {
    id: "recipe-015",
    name: "Paneer Tikka",
    description:
      "Smoky grilled paneer cubes marinated with yogurt, spices, onion, and bell peppers.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    category: "Vegetarian",
    cuisine: "Indian",
    mealType: "Snack",
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 3,
    difficulty: "Easy",

    ingredients: [
      { name: "Paneer", quantity: "400", unit: "g" },
      { name: "Yogurt", quantity: "150", unit: "g" },
      { name: "Bell Pepper", quantity: "1", unit: "large" },
      { name: "Onion", quantity: "1", unit: "large" },
      { name: "Tikka Masala", quantity: "2", unit: "tbsp" },
      { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Prepare marinade",
        description:
          "Mix yogurt, tikka masala, lemon juice, and salt.",
      },
      {
        step: 2,
        title: "Marinate paneer",
        description:
          "Coat paneer, onion, and bell pepper with the marinade.",
      },
      {
        step: 3,
        title: "Rest",
        description:
          "Allow the mixture to rest for at least 20 minutes.",
      },
      {
        step: 4,
        title: "Grill",
        description:
          "Grill or pan-cook until the edges become lightly charred.",
      },
      {
        step: 5,
        title: "Serve",
        description:
          "Serve hot with lemon wedges and mint chutney.",
      },
    ],

    nutrition: {
      calories: 390,
      protein: 21,
      carbs: 12,
      fat: 28,
    },

    equipment: [
      "Grill pan",
      "Mixing bowl",
      "Skewers",
    ],

    tips: [
      "Use thick yogurt for the marinade.",
      "Do not overcook paneer.",
      "Char the vegetables slightly for smoky flavor.",
    ],

    tags: [
      "indian",
      "paneer",
      "vegetarian",
      "tikka",
      "snack",
    ],
  },

  {
    id: "recipe-016",
    name: "Vegetable Chow Mein",
    description:
      "Stir-fried noodles tossed with crunchy vegetables, soy sauce, garlic, and sesame oil.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80",
    category: "Main Course",
    cuisine: "Chinese",
    mealType: "Dinner",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 3,
    difficulty: "Easy",

    ingredients: [
      { name: "Noodles", quantity: "300", unit: "g" },
      { name: "Cabbage", quantity: "150", unit: "g" },
      { name: "Carrot", quantity: "1", unit: "medium" },
      { name: "Bell Pepper", quantity: "1", unit: "medium" },
      { name: "Soy Sauce", quantity: "3", unit: "tbsp" },
      { name: "Garlic", quantity: "3", unit: "cloves" },
      { name: "Sesame Oil", quantity: "1", unit: "tsp" },
    ],

    instructions: [
      {
        step: 1,
        title: "Cook noodles",
        description:
          "Boil noodles until just tender and drain well.",
      },
      {
        step: 2,
        title: "Prepare vegetables",
        description:
          "Slice all vegetables into thin strips.",
      },
      {
        step: 3,
        title: "Stir-fry",
        description:
          "Stir-fry garlic and vegetables over high heat.",
      },
      {
        step: 4,
        title: "Add noodles",
        description:
          "Add noodles and toss quickly with the vegetables.",
      },
      {
        step: 5,
        title: "Season",
        description:
          "Add soy sauce and sesame oil and serve hot.",
      },
    ],

    nutrition: {
      calories: 360,
      protein: 10,
      carbs: 61,
      fat: 9,
    },

    equipment: [
      "Wok",
      "Large pot",
      "Chopsticks",
    ],

    tips: [
      "Keep vegetables slightly crunchy.",
      "Use high heat while stir-frying.",
      "Drain noodles thoroughly before adding them.",
    ],

    tags: [
      "chinese",
      "chow-mein",
      "noodles",
      "vegetarian",
      "quick",
    ],
  },
];
