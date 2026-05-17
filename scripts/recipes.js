// Array with all recipe details contained
const recipes = [
  {
    title: "Chicken with 40 cloves of garlic ",
    image: "../images/Recipes/Chicken/Done.jpg",
    description: "A version of the classic French dish where a whole chicken is slow - cooked in a covered casserole dish with unpeeled garlic cloves. The cooking process transforms the garlic, which becomes mellow and sweet, and pops out of its skin. The smell while cooking is divine, and the flavour is deeply aromatic with the juice just begging for some crusty bread. The prep is quick at around 20 minutes. We serve the chicken with scalloped potatoes and a simple green salad",
    ingredients: [
      "2 tablespoons olive oil",
      "Whole chicken, preferably organic",
      "1 bunch or 6 spring onions finely sliced",
      "8 to 10 sprigs fresh thyme, or French tarragon if available",
      "40 cloves garlic (approximately 3 to 4 heads), unpeeled",
      "2 tablespoons dry white vermouth or white wine",
      "1 teaspoon sea salt",
      "Good grinding pepper"
    ],
    method: [
      "Preheat the oven to 350 degrees F.",
      "Heat the oil on the stovetop in a wide, shallow ovenproof and flameproof Dutch oven (that will snugly fit the chicken in one layer once butterflied, and that has a lid), and sear the chicken over a high heat, skin-side down for approximately 5 minutes. Flip and brown other side of chicken, then remove and place to the side.",
      "Add the sliced spring onions to the Dutch oven and quickly stir-fry with the leaves from a few sprigs of thyme or tarragon.",
      "Put 20 of the unpeeled cloves of garlic (papery excess removed) into the pan with the spring onions, top with the chicken skin-side up, then cover with the remaining 20 cloves of garlic. Add the vermouth (or white wine) and any juices from where the chicken was sitting. Sprinkle with the salt, grind over the pepper, and add the other sprigs of thyme or tarragon. Put on the lid and cook in the oven for 1½ to 2 hours. Cooking time will depend on the size of the chicken."
    ],
    notes: [
        "Chicken thighs can be used instead of a whole chicken, with the cooking time reduced to 1 ½ hrs (check at 1 ¼ hrs).",
        "Chicken can be browned and casserole assembled 1 day ahead. Cover tightly and store in the refrigerator. Season with salt and pepper and warm the pan gently on the stovetop for 5 minutes before baking as directed in recipe."
        ],
    source: "Recipe adapted from Nigella Kitchen by Nigella Lawson. Copyright 2010 Nigella Lawson. Published by Hyperion. All Rights Reserved."
  }
];

// Get elements needed to make each card

const recipeGrid = document.getElementById("recipeGrid");
const modal = document.getElementById("recipeModal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalMethod = document.getElementById("modalMethod");
const modalNotes = document.getElementById("modalNotes");
const modalSource = document.getElementById("modalSource");

// Make each recipe card

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "recipe-card";

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <h3>${recipe.title}</h3>
    <p>${recipe.description}</p>
  `;

  card.addEventListener("click", () => {
    openModal(recipe);
  });

  recipeGrid.appendChild(card);
});

// Open recipe card

function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalDescription.textContent = recipe.description;
  modalNotes.innerHTML = "";

    recipe.notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    modalNotes.appendChild(li);
    });

  modalSource.textContent = recipe.source;

  modalIngredients.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalIngredients.appendChild(li);
  });

  modalMethod.innerHTML = "";
  recipe.method.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    modalMethod.appendChild(li);
  });

  modal.classList.remove("hidden");
}

// Close recipe card

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add("hidden");
}