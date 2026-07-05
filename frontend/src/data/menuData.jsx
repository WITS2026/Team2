// Menu data for FOLD restaurant

export const menuItems = {
  sandwiches: [
    {
      id: 1,
      name: "The Charcoal Club",
      description:
        "Smoked turkey, crispy beef bacon, garlic aioli, arugula, pickled red onion on charcoal sourdough",
      price: 18,
      tag: "fan fave",
      emoji: "🥪",
    },
    {
      id: 2,
      name: "Golden Gate Melt",
      description:
        "House-made vegan Mozzarella cheese, caramelized onions, roasted garlic, dijon, fresh thyme on thick-cut toasted challah",
      price: 15,
      tag: "meat-free",
      emoji: "🥪",
    },
    {
      id: 3,
      name: "The Pitmaster",
      description:
        "House-cured pastrami, deli mustard, spicy dill pickles, crunchy slaw on traditional rye bread",
      price: 19,
      tag: "chef's pick",
      emoji: "🥩",
    },
    {
      id: 4,
      name: "Brisket Hour",
      description:
        "12-hour smoked brisket, parve horseradish mayo, pickled jalapeño, crunchy slaw on a pretzel roll",
      price: 20,
      tag: "bestseller",
      emoji: "🥩",
    },
  ],
  wraps: [
    {
      id: 5,
      name: "Green Goddess Chicken",
      description:
        "Grilled chicken breast, avocado, roasted chickpeas, cucumber, spring mix, herb tahini in a spinach wrap",
      price: 16,
      tag: "healthy",
      emoji: "🥑",
    },
    {
      id: 6,
      name: "Seoul Bowl Wrap",
      description:
        "Gochujang chicken, pickled daikon, kimchi slaw, scallions, sesame oil in a toasted flour wrap",
      price: 16,
      tag: "spicy",
      emoji: "🌶️",
    },
    {
      id: 7,
      name: "Smoke Signal",
      description:
        "Pulled smoked beef brisket, chipotle black beans, corn salsa, lime-cilantro parve crema, crispy onions",
      price: 17,
      tag: "bestseller",
      emoji: "🌮",
    },
    {
      id: 8,
      name: "The Levant",
      description:
        "Spiced lamb kofta, herb garlic tahini sauce, roasted red pepper, kalamata olive tapenade, fresh mint",
      price: 18,
      tag: "chef's pick",
      emoji: "🌿",
    },
  ],
};

export const tagColors = {
  "fan fave": { bg: "#FFE8CC", text: "#C45E00" },
  "meat-free": { bg: "#D4EDDA", text: "#1A6B35" },
  healthy: { bg: "#D4EDDA", text: "#1A6B35" },
  "chef's pick": { bg: "#E8D5F5", text: "#6B21A8" },
  bestseller: { bg: "#FFEAEA", text: "#C0392B" },
  spicy: { bg: "#FFE4CC", text: "#B84000" },
};
