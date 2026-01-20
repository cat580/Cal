// SECTION: Constants
const GOALS = {
  calories: 2200,
  protein: 130,
  carbs: 250,
  fats: 70,
};

const DEFICIT_FACTORS = {
  none: 1,
  mild: 0.85,
  aggressive: 0.7,
};

// SECTION: Recipes Database
const RECIPES = {
  "chicken rice bowl": {
    ingredients: [
      { name: "chicken breast", amount: "150g" },
      { name: "white rice", amount: "80g dry" },
      { name: "broccoli", amount: "100g" },
      { name: "olive oil", amount: "1 tbsp" }
    ],
    nutrition: { calories: 450, protein: 35, carbs: 45, fats: 12 }
  },
  "tuna salad": {
    ingredients: [
      { name: "canned tuna", amount: "1 can (120g)" },
      { name: "mixed greens", amount: "100g" },
      { name: "cherry tomatoes", amount: "50g" },
      { name: "olive oil", amount: "2 tbsp" }
    ],
    nutrition: { calories: 320, protein: 28, carbs: 8, fats: 18 }
  },
  "protein smoothie": {
    ingredients: [
      { name: "protein powder", amount: "1 scoop (30g)" },
      { name: "banana", amount: "1 medium" },
      { name: "milk", amount: "250ml" },
      { name: "peanut butter", amount: "1 tbsp" }
    ],
    nutrition: { calories: 280, protein: 25, carbs: 30, fats: 8 }
  },
  "oatmeal with berries": {
    ingredients: [
      { name: "oats", amount: "50g dry" },
      { name: "mixed berries", amount: "100g" },
      { name: "milk", amount: "200ml" },
      { name: "honey", amount: "1 tbsp" }
    ],
    nutrition: { calories: 250, protein: 8, carbs: 45, fats: 6 }
  },
  "grilled salmon": {
    ingredients: [
      { name: "salmon fillet", amount: "150g" },
      { name: "asparagus", amount: "100g" },
      { name: "sweet potato", amount: "100g" },
      { name: "olive oil", amount: "1 tbsp" }
    ],
    nutrition: { calories: 380, protein: 40, carbs: 20, fats: 22 }
  },
  "pasta with chicken": {
    ingredients: [
      { name: "whole wheat pasta", amount: "80g dry" },
      { name: "chicken breast", amount: "120g" },
      { name: "tomato sauce", amount: "100g" },
      { name: "parmesan cheese", amount: "20g" }
    ],
    nutrition: { calories: 520, protein: 32, carbs: 58, fats: 16 }
  },
  "greek yogurt parfait": {
    ingredients: [
      { name: "greek yogurt", amount: "150g" },
      { name: "granola", amount: "30g" },
      { name: "mixed berries", amount: "50g" },
      { name: "honey", amount: "1 tsp" }
    ],
    nutrition: { calories: 180, protein: 15, carbs: 22, fats: 4 }
  },
  "avocado toast": {
    ingredients: [
      { name: "whole grain bread", amount: "2 slices" },
      { name: "avocado", amount: "1 medium" },
      { name: "tomato", amount: "50g" },
      { name: "olive oil", amount: "1 tsp" }
    ],
    nutrition: { calories: 290, protein: 8, carbs: 24, fats: 18 }
  }
};

// SECTION: 4-Week Meal Plan
const MEAL_PLAN = {
  week1: {
    monday: {
      breakfast: "oatmeal with berries",
      lunch: "chicken rice bowl", 
      dinner: "grilled salmon",
      snack: "greek yogurt parfait"
    },
    tuesday: {
      breakfast: "protein smoothie",
      lunch: "tuna salad",
      dinner: "pasta with chicken",
      snack: "avocado toast"
    },
    wednesday: {
      breakfast: "greek yogurt parfait",
      lunch: "grilled salmon",
      dinner: "chicken rice bowl",
      snack: "protein smoothie"
    },
    thursday: {
      breakfast: "avocado toast",
      lunch: "pasta with chicken",
      dinner: "tuna salad",
      snack: "oatmeal with berries"
    },
    friday: {
      breakfast: "protein smoothie",
      lunch: "chicken rice bowl",
      dinner: "grilled salmon",
      snack: "greek yogurt parfait"
    },
    saturday: {
      breakfast: "oatmeal with berries",
      lunch: "tuna salad",
      dinner: "pasta with chicken",
      snack: "avocado toast"
    },
    sunday: {
      breakfast: "greek yogurt parfait",
      lunch: "grilled salmon",
      dinner: "chicken rice bowl",
      snack: "protein smoothie"
    }
  },
  week2: {
    monday: { breakfast: "protein smoothie", lunch: "tuna salad", dinner: "pasta with chicken", snack: "greek yogurt parfait" },
    tuesday: { breakfast: "avocado toast", lunch: "chicken rice bowl", dinner: "grilled salmon", snack: "oatmeal with berries" },
    wednesday: { breakfast: "greek yogurt parfait", lunch: "pasta with chicken", dinner: "tuna salad", snack: "protein smoothie" },
    thursday: { breakfast: "oatmeal with berries", lunch: "grilled salmon", dinner: "chicken rice bowl", snack: "avocado toast" },
    friday: { breakfast: "protein smoothie", lunch: "tuna salad", dinner: "pasta with chicken", snack: "greek yogurt parfait" },
    saturday: { breakfast: "avocado toast", lunch: "chicken rice bowl", dinner: "grilled salmon", snack: "oatmeal with berries" },
    sunday: { breakfast: "greek yogurt parfait", lunch: "pasta with chicken", dinner: "tuna salad", snack: "protein smoothie" }
  },
  week3: {
    monday: { breakfast: "oatmeal with berries", lunch: "grilled salmon", dinner: "pasta with chicken", snack: "protein smoothie" },
    tuesday: { breakfast: "greek yogurt parfait", lunch: "chicken rice bowl", dinner: "tuna salad", snack: "avocado toast" },
    wednesday: { breakfast: "protein smoothie", lunch: "pasta with chicken", dinner: "grilled salmon", snack: "oatmeal with berries" },
    thursday: { breakfast: "avocado toast", lunch: "tuna salad", dinner: "chicken rice bowl", snack: "greek yogurt parfait" },
    friday: { breakfast: "oatmeal with berries", lunch: "grilled salmon", dinner: "pasta with chicken", snack: "protein smoothie" },
    saturday: { breakfast: "greek yogurt parfait", lunch: "chicken rice bowl", dinner: "tuna salad", snack: "avocado toast" },
    sunday: { breakfast: "protein smoothie", lunch: "pasta with chicken", dinner: "grilled salmon", snack: "oatmeal with berries" }
  },
  week4: {
    monday: { breakfast: "greek yogurt parfait", lunch: "tuna salad", dinner: "chicken rice bowl", snack: "protein smoothie" },
    tuesday: { breakfast: "oatmeal with berries", lunch: "pasta with chicken", dinner: "grilled salmon", snack: "avocado toast" },
    wednesday: { breakfast: "protein smoothie", lunch: "chicken rice bowl", dinner: "tuna salad", snack: "greek yogurt parfait" },
    thursday: { breakfast: "avocado toast", lunch: "grilled salmon", dinner: "pasta with chicken", snack: "oatmeal with berries" },
    friday: { breakfast: "greek yogurt parfait", lunch: "tuna salad", dinner: "chicken rice bowl", snack: "protein smoothie" },
    saturday: { breakfast: "oatmeal with berries", lunch: "pasta with chicken", dinner: "grilled salmon", snack: "avocado toast" },
    sunday: { breakfast: "protein smoothie", lunch: "chicken rice bowl", dinner: "tuna salad", snack: "greek yogurt parfait" }
  }
};

// SECTION: State
let entries = [];
const STORAGE_KEY = "fueltrack_profiles_v1";
let profilesStore = { activeProfileId: null, profiles: [] };
let historyStore = [];
let foodDictionary = {};
let pendingProfileSwitch = null;

// SECTION: DOM Refs
const dateEl = document.getElementById("current-date");
const footerGoalsEl = document.getElementById("footer-goals");
const calorieGoalLabel = document.getElementById("calorie-goal-label");
const proteinGoalLabel = document.getElementById("protein-goal-label");
const carbGoalLabel = document.getElementById("carb-goal-label");
const fatGoalLabel = document.getElementById("fat-goal-label");
const calorieProgress = document.getElementById("calorie-progress");
const proteinProgress = document.getElementById("protein-progress");
const carbProgress = document.getElementById("carb-progress");
const fatProgress = document.getElementById("fat-progress");
const calorieTotal = document.getElementById("calorie-total");
const proteinTotal = document.getElementById("protein-total");
const carbTotal = document.getElementById("carb-total");
const fatTotal = document.getElementById("fat-total");
const totalCaloriesText = document.getElementById("total-calories");
const totalProteinText = document.getElementById("total-protein");
const totalCarbsText = document.getElementById("total-carbs");
const totalFatsText = document.getElementById("total-fats");
const totalWeightText = document.getElementById("total-weight");
const entryForm = document.getElementById("entry-form");
const entryList = document.getElementById("entry-list");
const emptyState = document.getElementById("empty-state");
const clearLogBtn = document.getElementById("clear-log");
const profileSelect = document.getElementById("profile-select");
const addProfileFooterBtn = document.getElementById("add-profile-footer");
const deleteProfileBtn = document.getElementById("delete-profile-btn");
const profileModal = document.getElementById("profile-modal");
const profileForm = document.getElementById("profile-form");
const profileCancelBtn = document.getElementById("profile-cancel");
const foodNameInput = document.getElementById("food-name");
const foodSuggestionsEl = document.getElementById("food-suggestions");
const needsForm = document.getElementById("needs-form");
const needsMaintenanceEl = document.getElementById("needs-maintenance");
const needsMildEl = document.getElementById("needs-mild");
const needsModerateEl = document.getElementById("needs-moderate");
const needsAggressiveEl = document.getElementById("needs-aggressive");

// Security modals
const securityModal = document.getElementById("security-modal");
const securityForm = document.getElementById("security-form");
const pinModal = document.getElementById("pin-modal");
const pinForm = document.getElementById("pin-form");
const pinCancelBtn = document.getElementById("pin-cancel");

// SECTION: Recipe and Meal Plan Functions
function autoFillFromRecipe(foodName) {
  const recipe = RECIPES[foodName.toLowerCase().trim()];
  if (recipe) {
    const { calories, protein, carbs, fats } = recipe.nutrition;
    document.getElementById("calories").value = calories;
    document.getElementById("protein").value = protein;
    document.getElementById("carbs").value = carbs;
    document.getElementById("fats").value = fats;
  }
}

function showRecipeDetails(foodName) {
  const recipe = RECIPES[foodName.toLowerCase().trim()];
  if (recipe) {
    const ingredientsList = recipe.ingredients
      .map(ing => `• ${ing.amount} ${ing.name}`)
      .join('\n');
    alert(`${foodName}\n\nIngredients:\n${ingredientsList}`);
  } else {
    alert("Recipe not found");
  }
}

function getTodaysMeals() {
  const today = new Date();
  const dayName = today.toLocaleDateString('en', { weekday: 'long' }).toLowerCase();
  const weekNumber = Math.ceil(today.getDate() / 7);
  const weekKey = `week${Math.min(weekNumber, 4)}`;
  
  return MEAL_PLAN[weekKey]?.[dayName] || null;
}

function showTodaysMealPlan() {
  const meals = getTodaysMeals();
  if (meals) {
    const mealText = `Today's Meal Plan:\n\nBreakfast: ${meals.breakfast}\nLunch: ${meals.lunch}\nDinner: ${meals.dinner}\nSnack: ${meals.snack}`;
    alert(mealText);
  }
}

// SECTION: Security functions
function hashPin(pin) {
  let hash = 0;
  for (let i = 0; i < pin.length; i++) {
    const char = pin.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}

function verifyPin(inputPin, storedHash) {
  return hashPin(inputPin) === storedHash;
}

function showSecurityModal() {
  if (securityModal) {
    securityModal.classList.add("is-open");
    securityModal.setAttribute("aria-hidden", "false");
  }
}

function hideSecurityModal() {
  if (securityModal) {
    securityModal.classList.remove("is-open");
    securityModal.setAttribute("aria-hidden", "true");
  }
}

function showPinModal() {
  if (pinModal) {
    pinModal.classList.add("is-open");
    pinModal.setAttribute("aria-hidden", "false");
    const pinInput = document.getElementById("pin-input");
    if (pinInput) pinInput.focus();
  }
}

function hidePinModal() {
  if (pinModal) {
    pinModal.classList.remove("is-open");
    pinModal.setAttribute("aria-hidden", "true");
    if (pinForm) pinForm.reset();
  }
  pendingProfileSwitch = null;
}

function checkFirstTime() {
  const hasProfiles = profilesStore.profiles.length > 0;
  if (!hasProfiles) {
    showSecurityModal();
    return false;
  }
  return true;
}

// SECTION: Init helpers
function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function getActiveCalorieGoal() {
  const active = getActiveProfile();
  const base = active.maintenanceCalories || GOALS.calories;
  const factor = DEFICIT_FACTORS[active.deficit] || 1;
  return Math.round(base * factor);
}

function setStaticUI() {
  const today = new Date();
  if (dateEl) {
    dateEl.textContent = formatDate(today);
  }

  const goalStrings = [
    `${getActiveCalorieGoal()} kcal`,
    `${GOALS.protein} g protein`,
    `${GOALS.carbs} g carbs`,
    `${GOALS.fats} g fats`,
  ];

  if (footerGoalsEl) {
    footerGoalsEl.textContent = goalStrings.join(" • ");
  }

  if (calorieGoalLabel)
    calorieGoalLabel.textContent = `Goal: ${getActiveCalorieGoal()} kcal`;
  if (proteinGoalLabel) proteinGoalLabel.textContent = `Goal: ${GOALS.protein} g`;
  if (carbGoalLabel) carbGoalLabel.textContent = `Goal: ${GOALS.carbs} g`;
  if (fatGoalLabel) fatGoalLabel.textContent = `Goal: ${GOALS.fats} g`;
}

// SECTION: State utils
function getActiveFoodDictionary() {
  const active = getActiveProfile();
  if (!active.foods) active.foods = {};
  return active.foods;
}

function updateFoodDictionary(name, calories) {
  if (!name || !calories) return;
  const dict = getActiveFoodDictionary();
  const key = name.trim().toLowerCase();
  if (!key) return;
  dict[key] = { name: name.trim(), calories };
}

function syncFoodDictionaryFromProfile() {
  const active = getActiveProfile();
  foodDictionary = active.foods || {};
}

function getISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayKey() {
  return getISODate(new Date());
}

function ensureDefaultProfile() {
  if (!profilesStore.profiles.length) {
    const defaultProfile = {
      id: "default",
      name: "Me",
      gender: "unspecified",
      maintenanceCalories: GOALS.calories,
      deficit: "none",
      history: [],
      foods: {},
      pinHash: null,
    };
    profilesStore.profiles.push(defaultProfile);
    profilesStore.activeProfileId = defaultProfile.id;
  }
}

function getActiveProfile() {
  ensureDefaultProfile();
  return (
    profilesStore.profiles.find((p) => p.id === profilesStore.activeProfileId) ||
    profilesStore.profiles[0]
  );
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      profilesStore = { activeProfileId: null, profiles: [] };
    } else {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.profiles)) {
        profilesStore = {
          activeProfileId: parsed.activeProfileId || null,
          profiles: parsed.profiles.map((p) => ({
            id: p.id,
            name: p.name,
            gender: p.gender || "unspecified",
            maintenanceCalories: p.maintenanceCalories || GOALS.calories,
            deficit: p.deficit || "none",
            history: p.history || [],
            foods: p.foods || {},
            pinHash: p.pinHash || null,
          })),
        };
      } else {
        profilesStore = { activeProfileId: null, profiles: [] };
      }
    }
  } catch (e) {
    profilesStore = { activeProfileId: null, profiles: [] };
  }

  if (checkFirstTime()) {
    ensureDefaultProfile();
    const active = getActiveProfile();
    historyStore = active.history || [];
    syncFoodDictionaryFromProfile();
  }
}

function saveHistory() {
  const active = getActiveProfile();
  active.history = historyStore;
  active.foods = getActiveFoodDictionary();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profilesStore));
  } catch (e) {
    console.warn("Failed to save to localStorage");
  }
}

function getOrCreateTodayBucket() {
  const key = getTodayKey();
  let bucket = historyStore.find((d) => d.date === key);
  if (!bucket) {
    bucket = { date: key, entries: [] };
    historyStore.push(bucket);
    saveHistory();
  }
  return bucket;
}

function syncEntriesFromToday() {
  const key = getTodayKey();
  const bucket = historyStore.find((d) => d.date === key);
  entries = bucket ? [...bucket.entries] : [];
}

function updateTodayInHistory() {
  const bucket = getOrCreateTodayBucket();
  bucket.entries = [...entries];
  saveHistory();
}

function getRangeTotals(daysBack) {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - (daysBack - 1));
  const startKey = getISODate(start);

  const totals = { calories: 0, protein: 0, carbs: 0, fats: 0 };

  historyStore.forEach((day) => {
    if (day.date >= startKey && day.date <= getTodayKey()) {
      day.entries.forEach((entry) => {
        totals.calories += entry.calories;
        totals.protein += entry.protein;
        totals.carbs += entry.carbs;
        totals.fats += entry.fats;
      });
    }
  });

  return totals;
}

function getWeeklyTotals() {
  return getRangeTotals(7);
}

function getMonthlyTotals() {
  return getRangeTotals(30);
}

function getTotals() {
  return entries.reduce(
    (acc, entry) => {
      acc.calories += entry.calories;
      acc.weight += entry.weight || 0;
      acc.protein += entry.protein;
      acc.carbs += entry.carbs;
      acc.fats += entry.fats;
      return acc;
    },
    { calories: 0, weight: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

function clampPercent(value) {
  if (!isFinite(value) || isNaN(value)) return 0;
  if (value < 0) return 0;
  if (value > 160) return 160;
  return value;
}

function sanitizeText(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// SECTION: Render
function renderFoodSuggestions() {
  if (!foodSuggestionsEl) return;
  foodSuggestionsEl.innerHTML = "";
  
  // Add recipes to suggestions
  Object.keys(RECIPES).forEach((recipeName) => {
    const opt = document.createElement("option");
    opt.value = recipeName;
    foodSuggestionsEl.appendChild(opt);
  });
  
  // Add user's food dictionary
  const dict = getActiveFoodDictionary();
  Object.values(dict).forEach((item) => {
    const opt = document.createElement("option");
    opt.value = sanitizeText(item.name);
    foodSuggestionsEl.appendChild(opt);
  });
}

function renderProfiles() {
  if (!profileSelect) return;
  ensureDefaultProfile();
  const active = getActiveProfile();

  profileSelect.innerHTML = "";
  profilesStore.profiles.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = sanitizeText(p.name);
    if (p.id === active.id) opt.selected = true;
    profileSelect.appendChild(opt);
  });

  if (deleteProfileBtn) {
    deleteProfileBtn.style.display = profilesStore.profiles.length > 1 ? "block" : "none";
  }
}

function renderHistory() {
  const weeklyEl = document.getElementById("weekly-calories");
  const monthlyEl = document.getElementById("monthly-calories");
  if (!weeklyEl || !monthlyEl) return;

  const weekly = getWeeklyTotals();
  const monthly = getMonthlyTotals();

  weeklyEl.textContent = `${Math.round(weekly.calories)} kcal`;
  monthlyEl.textContent = `${Math.round(monthly.calories)} kcal`;
}

function renderTotals() {
  const totals = getTotals();

  const cals = Math.round(totals.calories);
  const weight = Math.round(totals.weight);
  const calorieGoal = getActiveCalorieGoal();
  const protein = Math.round(totals.protein * 10) / 10;
  const carbs = Math.round(totals.carbs * 10) / 10;
  const fats = Math.round(totals.fats * 10) / 10;

  if (calorieTotal) calorieTotal.textContent = cals;
  if (proteinTotal) proteinTotal.textContent = protein;
  if (carbTotal) carbTotal.textContent = carbs;
  if (fatTotal) fatTotal.textContent = fats;

  if (totalCaloriesText)
    totalCaloriesText.textContent = `${cals} / ${calorieGoal} kcal`;
  if (totalWeightText) totalWeightText.textContent = `${weight} g`;
  if (totalProteinText) totalProteinText.textContent = `${protein} g`;
  if (totalCarbsText) totalCarbsText.textContent = `${carbs} g`;
  if (totalFatsText) totalFatsText.textContent = `${fats} g`;

  const calPercent = clampPercent((totals.calories / calorieGoal) * 100);
  const proteinPercent = clampPercent((totals.protein / GOALS.protein) * 100);
  const carbPercent = clampPercent((totals.carbs / GOALS.carbs) * 100);
  const fatPercent = clampPercent((totals.fats / GOALS.fats) * 100);

  if (calorieProgress) calorieProgress.style.width = `${calPercent}%`;
  if (proteinProgress) proteinProgress.style.width = `${proteinPercent}%`;
  if (carbProgress) carbProgress.style.width = `${carbPercent}%`;
  if (fatProgress) fatProgress.style.width = `${fatPercent}%`;
}

function renderList() {
  if (!entryList) return;

  entryList.innerHTML = "";

  if (!entries.length) {
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "entry-item";

    const nameCol = document.createElement("div");
    nameCol.className = "entry-main";
    const name = document.createElement("div");
    name.className = "entry-name";
    name.textContent = entry.name || "Untitled";
    const meta = document.createElement("div");
    meta.className = "entry-meta";
    const weightText = entry.weight ? ` • ${entry.weight} g` : "";
    meta.textContent = `${entry.calories} kcal${weightText}`;
    nameCol.appendChild(name);
    nameCol.appendChild(meta);

    const proteinCol = document.createElement("div");
    proteinCol.className = "entry-macro";
    proteinCol.innerHTML = `<strong>${entry.protein}</strong> g`;

    const carbsCol = document.createElement("div");
    carbsCol.className = "entry-macro";
    carbsCol.innerHTML = `<strong>${entry.carbs}</strong> g`;

    const fatsCol = document.createElement("div");
    fatsCol.className = "entry-macro";
    fatsCol.innerHTML = `<strong>${entry.fats}</strong> g`;

    const spacer = document.createElement("div");
    spacer.className = "entry-macro";
    spacer.textContent = "";

    li.appendChild(nameCol);
    li.appendChild(spacer);
    li.appendChild(proteinCol);
    li.appendChild(carbsCol);
    li.appendChild(fatsCol);

    entryList.appendChild(li);
  });
}

function renderAll() {
  renderProfiles();
  setStaticUI();
  renderFoodSuggestions();
  renderList();
  renderTotals();
  renderHistory();
}

// SECTION: Calorie needs helpers
function calculateBmr({ sex, weightKg, heightCm, age }) {
  if (!sex || !weightKg || !heightCm || !age) return null;
  if (sex === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  if (sex === "female") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  return null;
}

function formatKcal(value) {
  if (!isFinite(value) || isNaN(value)) return "–";
  return `${Math.round(value)} kcal`;
}

function handleNeedsSubmit(e) {
  e.preventDefault();
  if (!needsForm) return;

  const formData = new FormData(needsForm);
  const age = Number(formData.get("age")) || 0;
  const sex = (formData.get("sex") || "").toString();
  const heightCm = Number(formData.get("height")) || 0;
  const weightKg = Number(formData.get("weight")) || 0;
  const activity = Number(formData.get("activity")) || 0;

  const bmr = calculateBmr({ sex, weightKg, heightCm, age });
  if (!bmr || !activity) {
    needsMaintenanceEl.textContent = "–";
    needsMildEl.textContent = "–";
    needsModerateEl.textContent = "–";
    needsAggressiveEl.textContent = "–";
    return;
  }

  const maintenance = bmr * activity;
  const mild = maintenance - 250;
  const moderate = maintenance - 500;
  const aggressive = maintenance - 750;

  if (needsMaintenanceEl)
    needsMaintenanceEl.textContent = formatKcal(maintenance);
  if (needsMildEl) needsMildEl.textContent = formatKcal(mild);
  if (needsModerateEl) needsModerateEl.textContent = formatKcal(moderate);
  if (needsAggressiveEl) needsAggressiveEl.textContent = formatKcal(aggressive);

  const active = getActiveProfile();
  if (active) {
    active.maintenanceCalories = Math.round(maintenance);
    saveHistory();
    renderAll();
  }
}

// SECTION: Event Handlers
function handleSecurityFormSubmit(e) {
  e.preventDefault();
  if (!securityForm) return;

  const formData = new FormData(securityForm);
  const name = (formData.get("security-name") || "").toString().trim();
  const pin = (formData.get("security-pin") || "").toString();

  if (!name || !pin || pin.length !== 4) return;

  const id = "default";
  const newProfile = {
    id,
    name,
    gender: "unspecified",
    maintenanceCalories: GOALS.calories,
    deficit: "none",
    history: [],
    foods: {},
    pinHash: hashPin(pin),
  };

  profilesStore.profiles = [newProfile];
  profilesStore.activeProfileId = id;
  historyStore = newProfile.history;
  entries = [];
  syncFoodDictionaryFromProfile();
  saveHistory();
  hideSecurityModal();
  renderAll();
}

function handlePinFormSubmit(e) {
  e.preventDefault();
  if (!pinForm || !pendingProfileSwitch) return;

  const formData = new FormData(pinForm);
  const pin = (formData.get("pin-input") || "").toString();
  const targetProfile = profilesStore.profiles.find(p => p.id === pendingProfileSwitch);

  if (!targetProfile || !verifyPin(pin, targetProfile.pinHash)) {
    alert("Incorrect PIN");
    return;
  }

  profilesStore.activeProfileId = pendingProfileSwitch;
  historyStore = targetProfile.history || [];
  syncFoodDictionaryFromProfile();
  syncEntriesFromToday();
  saveHistory();
  hidePinModal();
  renderAll();
}

function handleProfileChange(e) {
  const newId = e.target.value;
  if (!newId || newId === profilesStore.activeProfileId) return;
  
  const targetProfile = profilesStore.profiles.find(p => p.id === newId);
  if (!targetProfile) return;

  if (targetProfile.pinHash) {
    pendingProfileSwitch = newId;
    showPinModal();
  } else {
    profilesStore.activeProfileId = newId;
    historyStore = targetProfile.history || [];
    syncFoodDictionaryFromProfile();
    syncEntriesFromToday();
    saveHistory();
    renderAll();
  }
}

function openProfileModal() {
  if (!profileModal) return;
  profileModal.classList.add("is-open");
  profileModal.setAttribute("aria-hidden", "false");
  const nameInput = document.getElementById("profile-name");
  if (nameInput) nameInput.focus();
}

function closeProfileModal() {
  if (!profileModal) return;
  profileModal.classList.remove("is-open");
  profileModal.setAttribute("aria-hidden", "true");
  if (profileForm) profileForm.reset();
}

function handleAddProfile() {
  openProfileModal();
}

function handleDeleteProfile() {
  if (profilesStore.profiles.length <= 1) return;
  
  const active = getActiveProfile();
  if (!confirm(`Delete profile "${active.name}"?`)) return;

  profilesStore.profiles = profilesStore.profiles.filter(p => p.id !== active.id);
  profilesStore.activeProfileId = profilesStore.profiles[0].id;
  
  const newActive = getActiveProfile();
  historyStore = newActive.history || [];
  syncFoodDictionaryFromProfile();
  syncEntriesFromToday();
  saveHistory();
  renderAll();
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  if (!profileForm) return;

  const formData = new FormData(profileForm);
  const name = (formData.get("profile-name") || "").toString().trim();
  const pin = (formData.get("profile-pin") || "").toString();
  const gender = (formData.get("profile-gender") || "unspecified").toString();
  const deficitRaw = (formData.get("profile-deficit") || "none").toString().toLowerCase();
  const deficit = ["none", "mild", "aggressive"].includes(deficitRaw)
    ? deficitRaw
    : "none";

  if (!name || !pin || pin.length !== 4) return;

  const id = `p_${Date.now()}`;
  const maintenanceCalories =
    gender === "male" ? 2500 : gender === "female" ? 2000 : GOALS.calories;

  const newProfile = {
    id,
    name,
    gender,
    maintenanceCalories,
    deficit,
    history: [],
    foods: {},
    pinHash: hashPin(pin),
  };

  profilesStore.profiles.push(newProfile);
  profilesStore.activeProfileId = id;
  historyStore = newProfile.history;
  entries = [];
  syncFoodDictionaryFromProfile();
  saveHistory();
  closeProfileModal();
  renderAll();
}

function validateInput(value, min, max) {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
}

function handleAddEntry(e) {
  e.preventDefault();
  if (!entryForm) return;

  const formData = new FormData(entryForm);
  const name = (formData.get("food-name") || "").toString().trim();
  const calories = Number(formData.get("calories")) || 0;
  const protein = Number(formData.get("protein")) || 0;
  const carbs = Number(formData.get("carbs")) || 0;
  const fats = Number(formData.get("fats")) || 0;
  const weight = Number(formData.get("weight")) || 0;

  if (!name || !validateInput(calories, 1, 5000)) {
    alert("Please enter valid food name and calories (1-5000)");
    return;
  }

  entries.push({ name, calories, weight, protein, carbs, fats });
  updateFoodDictionary(name, calories);
  updateTodayInHistory();
  entryForm.reset();
  renderAll();
}

function handleClearLog() {
  if (!entries.length) return;
  const ok = confirm("Clear all entries for today?");
  if (!ok) return;
  entries = [];
  updateTodayInHistory();
  renderAll();
}

// SECTION: Boot
function init() {
  loadHistory();
  
  if (profilesStore.profiles.length > 0) {
    setStaticUI();
    syncEntriesFromToday();
    renderAll();
  }

  if (entryForm) {
    entryForm.addEventListener("submit", handleAddEntry);
  }

  if (clearLogBtn) {
    clearLogBtn.addEventListener("click", handleClearLog);
  }

  if (profileSelect) {
    profileSelect.addEventListener("change", handleProfileChange);
  }

  if (addProfileFooterBtn) {
    addProfileFooterBtn.addEventListener("click", handleAddProfile);
  }

  if (deleteProfileBtn) {
    deleteProfileBtn.addEventListener("click", handleDeleteProfile);
  }

  if (profileForm) {
    profileForm.addEventListener("submit", handleProfileFormSubmit);
  }

  if (profileCancelBtn) {
    profileCancelBtn.addEventListener("click", closeProfileModal);
  }

  if (securityForm) {
    securityForm.addEventListener("submit", handleSecurityFormSubmit);
  }

  if (pinForm) {
    pinForm.addEventListener("submit", handlePinFormSubmit);
  }

  if (pinCancelBtn) {
    pinCancelBtn.addEventListener("click", hidePinModal);
  }

  if (needsForm) {
    needsForm.addEventListener("submit", handleNeedsSubmit);
  }

  // Recipe and meal plan buttons
  const viewRecipeBtn = document.getElementById("view-recipe");
  if (viewRecipeBtn) {
    viewRecipeBtn.addEventListener("click", () => {
      const foodName = document.getElementById("food-name").value;
      showRecipeDetails(foodName);
    });
  }

  const mealPlanBtn = document.getElementById("meal-plan-btn");
  if (mealPlanBtn) {
    mealPlanBtn.addEventListener("click", showTodaysMealPlan);
  }

  // Auto-fill from recipes when food name changes
  if (foodNameInput) {
    foodNameInput.addEventListener("blur", (e) => {
      autoFillFromRecipe(e.target.value);
    });
  }

  // Keyboard support for modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (pinModal && !pinModal.getAttribute("aria-hidden")) {
        hidePinModal();
      }
      if (profileModal && !profileModal.getAttribute("aria-hidden")) {
        closeProfileModal();
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
