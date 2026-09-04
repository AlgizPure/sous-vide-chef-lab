/**
 * Sous-Vide Chef Lab - Core Application Engine
 * Recipes DB, Smart Multi-Timer, Web Notifications, Cure Calculator, Shopping List
 */

// Initial Seed Recipes
const DEFAULT_RECIPES = [
  {
    id: 'demian-chicken-classic',
    title: 'Куриная грудка (Прямой деликатный метод)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'poultry',
    tempC: 61,
    timeMin: 90,
    timeFormatted: '1.5 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Паприка красная, сухой чеснок, соус терияки/аджика',
    description: 'Разделка на малое и большое филе. Нежнейшая сочная текстура. Соус распределяется равномерно в вакууме.',
    steps: [
      'Разделить грудку ножом на малое и большое филе для равномерного прогрева.',
      'Сухой посол: обсыпать солью (10г) и сахаром (5г) на 500г. Оставить на 30 мин при комнатной температуре.',
      'Добавить в пакет сухой чеснок, паприку и любимый соус (терияки/аджика).',
      'Завакуумировать. Опустить в холодную или теплую воду су-вида.',
      'Готовить при 61°C 1.5 часа (или 60°C 1 час для упругой текстуры).',
      'Охладить пакет в воде. Подавать или хранить до 14 дней.'
    ],
    ingredients: ['Куриная грудка (филе) - 500г', 'Соль поваренная - 10г', 'Сахар - 5г', 'Сухой чеснок - 3г', 'Красная паприка - 3г', 'Соус терияки или аджика - 20г']
  },
  {
    id: 'demian-chicken-sear',
    title: 'Куриная грудка (С пред-колером и сливочным маслом)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'poultry',
    tempC: 61,
    timeMin: 90,
    timeFormatted: '1.5 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Свежий чеснок без ростка, тимьян, сливочное масло',
    description: 'Ресторанная технология: быстрая обжарка сырой грудки перед су-видом дает глубокий вкус жареной птицы всему объему.',
    steps: [
      'Разделить малое и большое филе. Замариновать в соли и сахаре на 30 минут.',
      'Насухо промокнуть мясо бумажным полотенцем (влага мешает корочке).',
      'Разогреть сковороду с каплей растительного масла. Обжарить по 30–40 секунд до легкого колера.',
      'Полностью остудить мясо (30 мин в холоде), чтобы пар не мешал вакууматору.',
      'Поместить в пакет: зубчик чеснока (разрезать, вынуть зеленый росток, раздавить), веточку тимьяна и кусочек сливочного масла.',
      'Вакуумировать и варить при 61°C 1.5 часа. Охладить.'
    ],
    ingredients: ['Куриная грудка - 500г', 'Соль - 10г', 'Сахар - 5г', 'Сливочное масло 82.5% - 20г', 'Свежий чеснок - 2 зубчика', 'Свежий тимьян - 2 веточки', 'Растительное масло - 10мл']
  },
  {
    id: 'demian-beef-shank',
    title: 'Говяжья голяшка (Оссобуко с Мирпуа и вином)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'beef',
    tempC: 74,
    timeMin: 480,
    timeFormatted: '8.0 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Морковь, сельдерей, лук, томатная паста, сухое красное вино',
    description: 'Длительное томление с овощным соусом. Коллаген превращается в желатин. Мясо тает во рту.',
    steps: [
      'Говядину посолить (сухой посол 30 мин).',
      'Приготовить соус Мирпуа: нарезать мелким кубиком морковь, лук и стебель сельдерея.',
      'Обжарить овощи на сковороде, добавить ложку томатной пасты и залить сухим красным вином. Выпарить алкоголь 5 минут.',
      'Остудить соус. Залить сырую говядину соусом прямо в вакуумном пакете.',
      'Вакуумировать. Обязательно закрыть крышку су-вид ванны (процесс долгий!).',
      'Готовить при 72–74°C 8 часов (плотное тающее) или 80–82°C 12 часов (тушенка).',
      'Сок из пакета подавать как готовый шелковый мясной соус.'
    ],
    ingredients: ['Говяжья голяшка - 800г', 'Морковь - 1 шт', 'Стебель сельдерея - 2 шт', 'Репчатый лук - 1 шт', 'Томатная паста - 30г', 'Сухое красное вино - 100мл', 'Соль - 16г', 'Сахар - 8г']
  },
  {
    id: 'demian-pepper-steak',
    title: 'Pepper Стейк (Альтернативный отруб)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'beef',
    tempC: 57,
    timeMin: 240,
    timeFormatted: '4.0 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Тимьян, розмарин, давленый чеснок, соус Ворчестер / бальзамик',
    description: 'Идеальный Medium/Medium Rare для плотных альтернативных отрубов нижней части туши.',
    steps: [
      'Выполнить сухой посол стейка (30 минут).',
      'Добавить в пакет веточку розмарина, тимьян, давленый чеснок (без зеленого ростка!) и вспрыснуть соусом Ворчестер или бальзамиком.',
      'Завакуумировать. Готовить при 57°C ровно 4 часа.',
      'Охладить пакет в холодной воде 10 минут перед обжаркой (не жарить горячим!).',
      'Обсушить салфеткой и обжечь на раскаленном гриле или чугунной сковороде по 45 секунд с каждой стороны.'
    ],
    ingredients: ['Стейк говяжий альтернативный - 400г', 'Соус Ворчестер (Worcestershire) - 15мл', 'Свежий розмарин - 1 веточка', 'Свежий тимьян - 2 веточки', 'Чеснок свежий - 1 зубчик', 'Соль - 8г', 'Сахар - 4г']
  },
  {
    id: 'demian-turkey-thigh',
    title: 'Бедро индейки (Соево-имбирный маринад)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'poultry',
    tempC: 64,
    timeMin: 90,
    timeFormatted: '1.5 ч',
    saltGperKg: 10,
    sugarGperKg: 10,
    spices: 'Соевый соус (15–30г), чеснок, свежий имбирь слайсами',
    description: 'Зачищенное от жестких жил сочное мясо. Идеально для нарезки или быстрого дожаривания на углях.',
    steps: [
      'Полностью срезать ножом все внутренние жесткие жилки и сухожилия (жир оставить).',
      'Нарезать крупными кусками (мелкие пересушатся при финишной обжарке).',
      'Маринад на 500г: соль 5г, сахар 5г, качественный соевый соус 15–30г, давленый чеснок и слайсы свежего имбиря.',
      'Все поместить в пакет, завакуумировать.',
      'Варить при 64°C 1.5 часа (для крупных кусков).',
      'Слить сок, насухо протереть мясо и быстро обжарить на смеси сливочного и растительного масел по 45–60 секунд.'
    ],
    ingredients: ['Бедро индейки (филе) - 600г', 'Соевый соус качественный - 30мл', 'Свежий корень имбиря - 15г', 'Чеснок - 2 зубчика', 'Соль - 6г', 'Сахар - 6г', 'Сливочное масло - 20г']
  },
  {
    id: 'demian-chicken-tabaka',
    title: 'Цыпленок табака (Целая тушка)',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'poultry',
    tempC: 66,
    timeMin: 240,
    timeFormatted: '4.0 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Чеснок, паприка, кориандр, черный перец',
    description: 'Развернутая тушка цыпленка. 66°C дает сочнейшее мясо с розовыми костями (миоглобин), 69°C — серые кости.',
    steps: [
      'Разрезать цыпленка вдоль грудки, раскрыть и слегка отбить.',
      'Натереть сухим посолом со специями (паприка, чеснок, перец, кориандр).',
      'Поместить в большой вакуум-пакет и запаять.',
      'Варить в су-виде при 66°C 4 часа (для коагуляции костей ставить 68–69°C).',
      'Охладить. Перед подачей обжарить под гнетом на сковороде до хрустящей золотистой корочки.'
    ],
    ingredients: ['Цыпленок корнишон / тушка - 800г', 'Паприка - 5г', 'Сухой чеснок - 5г', 'Кориандр молотый - 3г', 'Соль - 16г', 'Сахар - 8г']
  },
  {
    id: 'demian-rabbit',
    title: 'Кролик деликатный в соусе',
    author: 'Шеф Демьян',
    isChef: true,
    category: 'meat',
    tempC: 66,
    timeMin: 210,
    timeFormatted: '3.5 ч',
    saltGperKg: 20,
    sugarGperKg: 10,
    spices: 'Тимьян, розмарин, белое вино, сливочный соус',
    description: 'Мягкие косточки и нежнейшее мясо. Соус готовится отдельно и мясо прогревается в нем при подаче.',
    steps: [
      'Разделать кролика на порционные куски.',
      'Сухой посол 30 минут + тимьян.',
      'Завакуумировать в собственном соку без тяжелых соусов.',
      'Варить при 66°C 3.5 часа (косточки становятся мягкими).',
      'Перед подачей приготовить сливочно-горчичный или винный соус и прогреть в нем кролика 3–5 минут.'
    ],
    ingredients: ['Кролик (ножки/филе) - 700г', 'Свежий тимьян - 3 веточки', 'Сливки 33% - 150мл', 'Белое сухое вино - 50мл', 'Соль - 14г', 'Сахар - 7г']
  },
  {
    id: 'classic-salmon',
    title: 'Лосось тающий (Flaky Mi-Cuit)',
    author: 'ChefSteps / Science Lab',
    isChef: false,
    category: 'fish',
    tempC: 48,
    timeMin: 40,
    timeFormatted: '40 мин',
    saltGperKg: 15,
    sugarGperKg: 8,
    spices: 'Оливковое масло, морская соль, укроп, цедра лимона',
    description: 'Текстура, недостижимая традиционной жаркой. Прозрачные хлопья, тающие во рту.',
    steps: [
      'Слабый посол 20 мин (15г соли на 1кг). Обсушить.',
      'Положить в пакет филе лосося с ложкой оливкового масла и веточкой укропа.',
      'Бережно вакуумировать (не сдавливать рыбу).',
      'Готовить при 48°C ровно 40 минут.',
      'Подавать теплым или быстро опалить кожу газовой горелкой.'
    ],
    ingredients: ['Филе лосося / семги - 400г', 'Оливковое масло Extra Virgin - 20мл', 'Свежий укроп - 2 веточки', 'Цедра лимона - 2г', 'Соль морская - 6г']
  },
  {
    id: 'classic-pork-ribs',
    title: 'Свиные ребра BBQ (24ч медленное томление)',
    author: 'Serious Eats (Kenji)',
    isChef: false,
    category: 'pork',
    tempC: 65,
    timeMin: 1440,
    timeFormatted: '24.0 ч',
    saltGperKg: 20,
    sugarGperKg: 15,
    spices: 'Копченая паприка, коричневый сахар, чеснок, соус BBQ',
    description: 'Мясо полностью отстает от костей, сохраняя сочность натурального мясного сока.',
    steps: [
      'Снять мембрану с обратной стороны ребер.',
      'Натереть сухим рубом: соль, сахар, копченая паприка, сухой чеснок.',
      'Завакуумировать в плотный пакет. Закрыть крышку емкости су-вида.',
      'Томить при 65°C ровно 24 часа (или 74°C 12 часов для распада).',
      'Охладить. Вскрыть, смазать густым соусом BBQ и запечь под верхним грилем 7–10 минут до карамелизации.'
    ],
    ingredients: ['Свиные ребра лента - 1.2кг', 'Копченая паприка - 10г', 'Сухой чеснок - 8г', 'Соус BBQ - 80г', 'Соль - 24г', 'Сахар тростниковый - 15г']
  },
  {
    id: 'classic-onsen-egg',
    title: 'Идеальное яйцо Онсэн / Пашот',
    author: 'ChefSteps Egg Lab',
    isChef: false,
    category: 'eggs',
    tempC: 64,
    timeMin: 45,
    timeFormatted: '45 мин',
    saltGperKg: 0,
    sugarGperKg: 0,
    spices: 'Соевый соус, зеленый лук, кунжут при подаче',
    description: 'Шелковый нежный белок и кремовый теплый желток одинаковой плотности.',
    steps: [
      'Свежие куриные яйца категории С0 опустить прямо в скорлупе в ванну су-вида.',
      'Выставить 64.0°C на 45 минут.',
      'Извлечь, охладить 1 минуту в прохладной воде.',
      'Аккуратно разбить скорлупу прямо в миску с рисом, тостом или бульоном рамен.'
    ],
    ingredients: ['Куриные яйца С0 свежие - 4 шт', 'Соевый соус для подачи - 15мл', 'Зеленый лук - 10г', 'Кунжут - 5г']
  },
  {
    id: 'classic-duck-breast',
    title: 'Утиная грудка Магре',
    author: 'French Culinary Institute',
    isChef: false,
    category: 'poultry',
    tempC: 57,
    timeMin: 120,
    timeFormatted: '2.0 ч',
    saltGperKg: 18,
    sugarGperKg: 8,
    spices: 'Тимьян, апельсиновая цедра, черный перец',
    description: 'Идеальная розовая прожарка по всему срезу без серых переваренных краев.',
    steps: [
      'Сделать частую ромбовидную насечку на коже утки, не прорезая мясо.',
      'Сухой посол 30 минут.',
      'Завакуумировать с веточкой тимьяна и полоской апельсиновой цедры.',
      'Варить при 57°C 2 часа. Охладить в холодной воде.',
      'Выложить на ХОЛОДНУЮ сухую сковороду кожей вниз. Медленно вытопить жир до тонкой хрустящей корочки (4–6 мин).'
    ],
    ingredients: ['Утиная грудка с кожей - 500г', 'Свежий тимьян - 2 веточки', 'Цедра апельсина - 1 полоска', 'Соль - 9г', 'Сахар - 4г']
  }
];

// Recommended Demian Spices & Chef Blends categorized for quick addition
const DEMIAN_SPICE_GROUPS = [
  {
    category: 'rubs',
    title: '⭐️ Фирменные шеф-смеси (Chef Rubs)',
    isChef: true,
    items: [
      '⭐️ Шеф-Руб для стейков (Tellicherry + паприка + тростниковый сахар + чеснок)',
      '⭐️ Пряная птица (Тимьян + паприка + чеснок + куркума + имбирь)',
      '⭐️ Азиатский умами-микс (Имбирь + белый перец + сычуаньский перец + чеснок)',
      '⭐️ Прованский сбор (Тимьян + розмарин + эстрагон + майоран)'
    ]
  },
  {
    category: 'herbs',
    title: '🌿 Травы и сухие пряности',
    isChef: false,
    items: [
      'Тимьян свежий (веточки)',
      'Розмарин свежий',
      'Эстрагон свежий (тархун)',
      'Сухой чеснок гранулированный (пачка Metro)',
      'Свежий чеснок (без зеленого ростка)',
      'Свежий имбирь (для слайсов)',
      'Красная паприка сладкая',
      'Копченая паприка (Pimenton)',
      'Куркума молотая',
      'Черный перец Tellicherry (дробленый)',
      'Розовый перец горошком',
      'Кориандр дробленый',
      'Мускатный орех',
      'Зира (кумин)'
    ]
  },
  {
    category: 'sauces',
    title: '🍯 Соусы и жидкие маринады',
    isChef: false,
    items: [
      'Соус Ворчестер (Worcestershire Lea & Perrins)',
      'Бальзамический крем / соус',
      'Соевый соус темный премиум',
      'Аджика абхазская классическая',
      'Соус Терияки густой',
      'Соус BBQ классический копченый',
      'Дижонская зернистая горчица',
      'Томатная паста густая Mutti',
      'Сухое красное вино (для соуса Мирпуа)',
      'Сухое белое вино (для птицы и рыбы)'
    ]
  },
  {
    category: 'fats',
    title: '🧈 Масла, жиры и ароматика',
    isChef: false,
    items: [
      'Сливочное масло 82.5% (ГОСТ)',
      'Утиный жир (для конфи)',
      'Оливковое масло Extra Virgin',
      'Масло растительное рафинированное',
      'Стебли сельдерея (для Мирпуа)',
      'Цедра свежего апельсина'
    ]
  }
];

// Flat array of all spices for fast lookup & migration
const DEMIAN_RECOMMENDED_SPICES = DEMIAN_SPICE_GROUPS.flatMap(g => g.items);

// App State
const state = {
  recipes: [],
  activeCategory: 'all',
  activeTab: 'recipes',
  shoppingList: [],
  shoppingFilter: 'all',
  activeTimers: [],
  favorites: [],
  audioCtx: null
};

// LocalStorage Keys
const STORAGE_KEYS = {
  RECIPES: 'sous_vide_recipes_v2',
  SHOPPING: 'sous_vide_shopping_v2',
  TIMERS: 'sous_vide_timers_v2',
  THEME: 'sous_vide_theme_v2',
  FAVORITES: 'sous_vide_favorites_v2',
  TG_TOKEN: 'sous_vide_tg_token_v1',
  TG_CHAT_ID: 'sous_vide_tg_chat_id_v1'
};

// Initialize Application
function initApp() {
  initTheme();
  loadStoredData();
  setupNavigation();
  setupFilterChips();
  setupCalculator();
  setupShoppingList();
  setupTimerEngine();
  setupModal();
  renderRecipes();
  renderShoppingList();
  renderActiveTimers();
  registerServiceWorker();
}

// Theme Engine (Light / Dark)
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  applyTheme(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  showToast(newTheme === 'light' ? '☀️ Включена светлая тема' : '🌙 Включена темная тема');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) {
    if (theme === 'dark') {
      // Show Moon
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    } else {
      // Show Sun
      icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    }
  }
}

// Load data from LocalStorage or seed defaults
function loadStoredData() {
  const storedRecipes = localStorage.getItem(STORAGE_KEYS.RECIPES);
  if (storedRecipes) {
    try {
      state.recipes = JSON.parse(storedRecipes);
    } catch (e) {
      state.recipes = DEFAULT_RECIPES;
    }
  } else {
    state.recipes = DEFAULT_RECIPES;
    saveRecipes();
  }

  const storedShopping = localStorage.getItem(STORAGE_KEYS.SHOPPING);
  if (storedShopping) {
    try {
      state.shoppingList = JSON.parse(storedShopping);
      // Ensure each item has a valid category
      state.shoppingList.forEach(item => {
        if (!item.category) {
          const isSpice = (item.source && (item.source.includes('Демьян') || item.source.includes('Спец') || item.source.includes('Базов'))) ||
                          DEMIAN_RECOMMENDED_SPICES.some(s => s.toLowerCase().includes(item.name.toLowerCase()));
          item.category = isSpice ? 'spice' : 'recipe';
        }
      });
    } catch (e) {
      state.shoppingList = [];
    }
  }

  const storedTimers = localStorage.getItem(STORAGE_KEYS.TIMERS);
  if (storedTimers) {
    try {
      state.activeTimers = JSON.parse(storedTimers);
    } catch (e) {
      state.activeTimers = [];
    }
  }

  const storedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITES);
  if (storedFavs) {
    try {
      state.favorites = JSON.parse(storedFavs);
    } catch (e) {
      state.favorites = [];
    }
  }
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
}

function saveRecipes() {
  localStorage.setItem(STORAGE_KEYS.RECIPES, JSON.stringify(state.recipes));
}

function saveShopping() {
  localStorage.setItem(STORAGE_KEYS.SHOPPING, JSON.stringify(state.shoppingList));
}

function saveTimers() {
  localStorage.setItem(STORAGE_KEYS.TIMERS, JSON.stringify(state.activeTimers));
}

// Navigation between views
function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-item');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  document.querySelectorAll('.view-panel').forEach(p => {
    p.classList.toggle('active', p.id === `view-${tabId}`);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter Chips for Recipes
function setupFilterChips() {
  const chips = document.querySelectorAll('#view-recipes .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCategory = chip.dataset.category;
      renderRecipes();
    });
  });
}

// Render Recipes List
function renderRecipes() {
  const container = document.getElementById('recipes-container');
  if (!container) return;

  // Update Fav Count Badge
  const favBadge = document.getElementById('fav-count-badge');
  if (favBadge) {
    favBadge.textContent = state.favorites.length > 0 ? `(${state.favorites.length})` : '';
  }

  let filtered = state.recipes;
  if (state.activeCategory === 'fav') {
    filtered = state.recipes.filter(r => state.favorites.includes(r.id));
  } else if (state.activeCategory === 'chef') {
    filtered = state.recipes.filter(r => r.isChef);
  } else if (state.activeCategory !== 'all') {
    filtered = state.recipes.filter(r => r.category === state.activeCategory);
  }

  if (filtered.length === 0) {
    if (state.activeCategory === 'fav') {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">❤️</div>
          <p style="font-weight: 700; color: var(--text-primary); font-size: 1rem;">Избранных рецептов пока нет</p>
          <p style="font-size: 0.82rem; margin-top: 4px;">Нажмите на сердечко на карточке любого рецепта, чтобы добавить его сюда.</p>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <p>В этой категории пока нет рецептов.</p>
          <button class="btn btn-primary" onclick="openAddRecipeModal()" style="margin-top: 12px;">+ Добавить свой рецепт</button>
        </div>
      `;
    }
    return;
  }

  container.innerHTML = filtered.map(recipe => {
    const isFav = state.favorites.includes(recipe.id);
    return `
    <div class="card ${recipe.isChef ? 'card-chef' : ''}" id="recipe-${recipe.id}">
      <div class="card-header">
        <div>
          <h3 class="card-title">${escapeHtml(recipe.title)}</h3>
          <p class="card-subtitle">${recipe.isChef ? '⭐️ ' : ''}${escapeHtml(recipe.author)}</p>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn-fav ${isFav ? 'active' : ''}" id="fav-btn-${recipe.id}" onclick="toggleFavorite('${recipe.id}', event)" title="${isFav ? 'Удалить из закладок' : 'Добавить в закладки'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <span class="badge ${recipe.isChef ? 'badge-chef' : 'badge-temp'}">
            ${recipe.isChef ? 'Шеф Демьян' : recipe.category.toUpperCase()}
          </span>
        </div>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
        ${escapeHtml(recipe.description)}
      </p>

      <div class="recipe-metrics">
        <div class="metric-item">
          <span class="metric-label">Температура</span>
          <span class="metric-value" style="color: var(--accent-sky);">${recipe.tempC}°C</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Время су-вид</span>
          <span class="metric-value" style="color: var(--accent-emerald);">${recipe.timeFormatted}</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Базовый посол</span>
          <span class="metric-value">2% соль / 1% сахар</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Маринование</span>
          <span class="metric-value">30 мин (комната)</span>
        </div>
      </div>

      <div class="recipe-steps">
        <div style="font-weight: 700; color: #fff; margin-bottom: 6px; font-size: 0.8rem; text-transform: uppercase;">
          Технологическая карта:
        </div>
        ${recipe.steps.map((step, idx) => `
          <div class="step-item">
            <span class="step-num">${idx + 1}</span>
            <span>${escapeHtml(step)}</span>
          </div>
        `).join('')}
      </div>

      <div class="card-actions">
        <button class="btn btn-primary" onclick="startRecipeTimer('${recipe.id}')">
          ⏱ Запустить таймер
        </button>
        <button class="btn btn-secondary" onclick="addRecipeToShopping('${recipe.id}')">
          🛒 В список покупок
        </button>
      </div>
    </div>
  `;
  }).join('');

  // Update counts
  const headerCount = document.getElementById('header-recipe-count');
  if (headerCount) headerCount.textContent = state.recipes.length;
  const drawerCount = document.getElementById('drawer-total-count');
  if (drawerCount) drawerCount.textContent = `${state.recipes.length} рецептов в книге`;
}

// Favorite toggle handler
function toggleFavorite(recipeId, e) {
  if (e) e.stopPropagation();
  const idx = state.favorites.indexOf(recipeId);
  const btn = document.getElementById(`fav-btn-${recipeId}`);
  if (btn) btn.classList.add('btn-fav-pop');

  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showToast('Удалено из избранного');
  } else {
    state.favorites.push(recipeId);
    showToast('❤️ Добавлено в избранное');
  }

  saveFavorites();
  renderRecipes();
  renderDrawerRecipes();
}

// =========================================
// Recipe Navigator Drawer Engine
// =========================================

function openNavDrawer() {
  const drawer = document.getElementById('nav-drawer');
  if (!drawer) return;
  drawer.classList.add('active');
  renderDrawerRecipes();
  const input = document.getElementById('drawer-search-input');
  if (input) {
    input.value = '';
    input.focus();
  }
}

function closeNavDrawer(e) {
  const drawer = document.getElementById('nav-drawer');
  if (!drawer) return;
  if (!e || e.target === drawer || e.currentTarget === drawer || e.target.classList.contains('btn-icon')) {
    drawer.classList.remove('active');
  }
}

function filterDrawerRecipes() {
  const input = document.getElementById('drawer-search-input');
  const term = input ? input.value.trim().toLowerCase() : '';
  renderDrawerRecipes(term);
}

function renderDrawerRecipes(searchTerm = '') {
  const container = document.getElementById('drawer-recipes-list');
  if (!container) return;

  let list = state.recipes;
  if (searchTerm) {
    list = list.filter(r => 
      r.title.toLowerCase().includes(searchTerm) ||
      r.author.toLowerCase().includes(searchTerm) ||
      r.spices.toLowerCase().includes(searchTerm) ||
      String(r.tempC).includes(searchTerm) ||
      (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(searchTerm)))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
        <p>Ничего не найдено по запросу "${escapeHtml(searchTerm)}"</p>
      </div>
    `;
    return;
  }

  // Categories definitions (Favorites pinned first if available)
  const categories = [];

  // Pinned Favorites section
  if (!searchTerm && state.favorites.length > 0) {
    categories.push({
      key: 'favs',
      title: '❤️ Избранные закладки',
      filter: r => state.favorites.includes(r.id)
    });
  }

  categories.push(
    { key: 'chef', title: '⭐️ Шеф Демьян (Рекомендации)', filter: r => r.isChef },
    { key: 'poultry', title: '🍗 Птица (Курица, Индейка, Утка)', filter: r => r.category === 'poultry' },
    { key: 'beef', title: '🥩 Говядина и Стейки', filter: r => r.category === 'beef' },
    { key: 'pork', title: '🥓 Свинина и Ребра', filter: r => r.category === 'pork' },
    { key: 'fish', title: '🐟 Рыба и Морепродукты', filter: r => r.category === 'fish' },
    { key: 'eggs', title: '🥚 Яйца и Овощи', filter: r => r.category === 'eggs' },
    { key: 'other', title: '🍽 Другие блюда', filter: r => r.category === 'meat' || (!r.isChef && !['poultry','beef','pork','fish','eggs'].includes(r.category)) }
  );

  let html = '';
  categories.forEach(cat => {
    const items = list.filter(cat.filter);
    if (items.length > 0) {
      html += `
        <div class="drawer-group-title">
          <span>${cat.title}</span>
          <span style="font-family: var(--font-mono); color: var(--accent-amber);">${items.length}</span>
        </div>
      `;
      items.forEach(recipe => {
        const isFav = state.favorites.includes(recipe.id);
        html += `
          <div class="drawer-item" onclick="jumpToRecipe('${recipe.id}')">
            <div>
              <div class="drawer-item-title">${isFav ? '❤️ ' : ''}${escapeHtml(recipe.title)}</div>
              <div class="drawer-item-badges">
                <span class="drawer-tag badge-temp">${recipe.tempC}°C</span>
                <span class="drawer-tag badge-time">${recipe.timeFormatted}</span>
                ${recipe.isChef ? '<span class="drawer-tag badge-chef">Демьян</span>' : ''}
              </div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        `;
      });
    }
  });

  container.innerHTML = html;
}

function jumpToRecipe(recipeId) {
  closeNavDrawer();
  switchTab('recipes');

  // Ensure category allows this recipe to be visible
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (recipe) {
    if (state.activeCategory !== 'all' && state.activeCategory !== recipe.category && !(state.activeCategory === 'chef' && recipe.isChef)) {
      state.activeCategory = 'all';
      document.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.dataset.category === 'all');
      });
      renderRecipes();
    }
  }

  // Scroll to recipe element
  setTimeout(() => {
    const el = document.getElementById(`recipe-${recipeId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.remove('card-pulse');
      void el.offsetWidth; // trigger reflow
      el.classList.add('card-pulse');
    }
  }, 100);
}

// Cure and Marinade Calculator
function setupCalculator() {
  const weightInput = document.getElementById('calc-weight');
  const saltyToggle = document.getElementById('calc-salty-sauce');
  const quickBtns = document.querySelectorAll('.btn-quick');

  function calculate() {
    const weightG = parseFloat(weightInput.value) || 0;
    const isSalty = saltyToggle ? saltyToggle.checked : false;

    // Standard rule: 10g salt + 5g sugar per 500g (2.0% salt, 1.0% sugar)
    // If salty sauce: reduce salt by 50% -> 1.0% salt
    const saltPercent = isSalty ? 0.01 : 0.02;
    const sugarPercent = 0.01;

    const saltG = (weightG * saltPercent).toFixed(1);
    const sugarG = (weightG * sugarPercent).toFixed(1);
    const soyG = isSalty ? (weightG * 0.04).toFixed(1) : 0;

    document.getElementById('res-salt').textContent = `${saltG} г`;
    document.getElementById('res-sugar').textContent = `${sugarG} г`;
    document.getElementById('res-time').textContent = `30 мин`;
    document.getElementById('res-garlic').textContent = weightG >= 1000 ? '2 зубчика (без ростка)' : '1 зубчик (без ростка)';

    const soyRow = document.getElementById('res-soy-row');
    if (soyRow) {
      soyRow.style.display = isSalty ? 'block' : 'none';
      const soyVal = document.getElementById('res-soy-val');
      if (soyVal) soyVal.textContent = `${soyG} г`;
    }
  }

  if (weightInput) {
    weightInput.addEventListener('input', calculate);
  }
  if (saltyToggle) {
    saltyToggle.addEventListener('change', calculate);
  }

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quickBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      weightInput.value = btn.dataset.weight;
      calculate();
    });
  });

  calculate();
}

// Shopping List Logic
function setupShoppingList() {
  // Render recommended Demian spices pills by groups
  const pillsContainer = document.getElementById('demian-spices-pills');
  if (pillsContainer) {
    pillsContainer.innerHTML = DEMIAN_SPICE_GROUPS.map(group => `
      <div class="spice-group-wrap">
        <div class="spice-group-title">
          ${escapeHtml(group.title)}
        </div>
        <div class="spice-group-pills">
          ${group.items.map(spice => `
            <button class="pill-spice ${group.isChef ? 'pill-spice-chef' : ''}" onclick="addSingleSpiceToShopping('${escapeHtml(spice)}', '${escapeHtml(group.title)}', 'spice')">
              <span>+</span> ${escapeHtml(spice)}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Setup Add Custom Item
  const addCustomBtn = document.getElementById('btn-add-custom-item');
  const customInput = document.getElementById('input-custom-item');
  const catSelect = document.getElementById('select-custom-category');

  if (addCustomBtn && customInput) {
    const handleAdd = () => {
      const val = customInput.value.trim();
      const cat = catSelect ? catSelect.value : 'recipe';
      if (val) {
        const src = cat === 'spice' ? 'Базовый запас' : 'Мой список';
        addSingleSpiceToShopping(val, src, cat);
        customInput.value = '';
      }
    };
    addCustomBtn.addEventListener('click', handleAdd);
    customInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleAdd();
    });
  }

  // Setup Shopping Filter Chips
  const shopChips = document.querySelectorAll('.shop-chip');
  shopChips.forEach(chip => {
    chip.addEventListener('click', () => {
      shopChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.shoppingFilter = chip.dataset.shopFilter || 'all';
      renderShoppingList();
    });
  });
}

function addSingleSpiceToShopping(name, source = 'Базовый запас', category = 'spice') {
  const existing = state.shoppingList.find(i => i.name.toLowerCase() === name.toLowerCase());
  if (!existing) {
    state.shoppingList.push({
      id: 'shop_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      name: name,
      source: source,
      category: category,
      checked: false
    });
    saveShopping();
    renderShoppingList();
    showToast(`Добавлено: ${name}`);
  } else {
    showToast(`Уже есть в списке: ${name}`);
  }
}

function addRecipeToShopping(recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (!recipe || !recipe.ingredients) return;

  let addedCount = 0;
  recipe.ingredients.forEach(ing => {
    const existing = state.shoppingList.find(i => i.name.toLowerCase() === ing.toLowerCase());
    if (!existing) {
      state.shoppingList.push({
        id: 'shop_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        name: ing,
        source: `Рецепт: ${recipe.title}`,
        category: 'recipe',
        checked: false
      });
      addedCount++;
    }
  });

  saveShopping();
  renderShoppingList();
  showToast(`Добавлено ${addedCount} ингредиентов в список`);
  switchTab('shopping');
}

function toggleShoppingItem(id) {
  const item = state.shoppingList.find(i => i.id === id);
  if (item) {
    item.checked = !item.checked;
    saveShopping();
    renderShoppingList();
  }
}

function toggleShoppingItemCategory(id) {
  const item = state.shoppingList.find(i => i.id === id);
  if (item) {
    item.category = item.category === 'spice' ? 'recipe' : 'spice';
    saveShopping();
    renderShoppingList();
    showToast(`Категория: ${item.category === 'spice' ? '🌿 Специи' : '🥩 Рецепт'}`);
  }
}

function deleteShoppingItem(id) {
  state.shoppingList = state.shoppingList.filter(i => i.id !== id);
  saveShopping();
  renderShoppingList();
}

function clearPurchasedShopping() {
  state.shoppingList = state.shoppingList.filter(i => !i.checked);
  saveShopping();
  renderShoppingList();
  showToast('Купленные товары удалены');
}

function getFormattedShoppingText() {
  if (state.shoppingList.length === 0) return '';
  const spiceItems = state.shoppingList.filter(i => i.category === 'spice');
  const recipeItems = state.shoppingList.filter(i => i.category === 'recipe');

  let text = "🛒 СПИСОК ПОКУПОК ДЛЯ СУ-ВИДА\n";

  if (spiceItems.length > 0) {
    text += "\n🌿 СПЕЦИИ И СОУСЫ (Базовый запас):\n";
    spiceItems.forEach((i, idx) => {
      text += `${idx + 1}. [${i.checked ? 'x' : ' '}] ${i.name}\n`;
    });
  }

  if (recipeItems.length > 0) {
    text += "\n🥩 ИЗ РЕЦЕПТОВ:\n";
    recipeItems.forEach((i, idx) => {
      text += `${idx + 1}. [${i.checked ? 'x' : ' '}] ${i.name} (${i.source})\n`;
    });
  }

  return text.trim();
}

function copyShoppingToClipboard() {
  const text = getFormattedShoppingText();
  if (!text) {
    showToast('Список покупок пуст');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast('Список скопирован в буфер для мессенджера!');
  }).catch(() => {
    showToast('Не удалось скопировать в буфер');
  });
}

async function shareShoppingToTelegram() {
  const text = getFormattedShoppingText();
  if (!text) {
    showToast('Список покупок пуст');
    return;
  }

  const tgToken = localStorage.getItem(STORAGE_KEYS.TG_TOKEN);
  const tgChatId = localStorage.getItem(STORAGE_KEYS.TG_CHAT_ID);

  // If direct Telegram Bot API is configured
  if (tgToken && tgChatId) {
    try {
      showToast('Отправка в Telegram-бота...');
      const response = await fetch(`https://api.telegram.org/bot${encodeURIComponent(tgToken.trim())}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChatId.trim(),
          text: text
        })
      });
      const data = await response.json();
      if (data.ok) {
        showToast('✅ Список отправлен в Telegram бота!');
        return;
      } else {
        console.warn('Telegram API Error:', data);
        showToast(`Ошибка бота: ${data.description || 'Проверьте токен'}`);
      }
    } catch (err) {
      console.warn('Telegram Bot Fetch Error:', err);
      showToast('Ошибка сети при отправке в бота');
    }
  }

  // Fallback / standard Telegram Web/App Share link
  const shareUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank');
  showToast('✈️ Открываем Telegram...');
}

// Telegram Modal & Settings Handlers
function openTelegramModal() {
  const modal = document.getElementById('tg-modal-backdrop');
  const tokenInput = document.getElementById('tg-bot-token-input');
  const chatInput = document.getElementById('tg-chat-id-input');

  if (tokenInput) tokenInput.value = localStorage.getItem(STORAGE_KEYS.TG_TOKEN) || '';
  if (chatInput) chatInput.value = localStorage.getItem(STORAGE_KEYS.TG_CHAT_ID) || '';

  if (modal) modal.classList.add('active');
}

function closeTelegramModal() {
  const modal = document.getElementById('tg-modal-backdrop');
  if (modal) modal.classList.remove('active');
}

function saveTelegramSettings() {
  const tokenInput = document.getElementById('tg-bot-token-input');
  const chatInput = document.getElementById('tg-chat-id-input');

  const token = tokenInput ? tokenInput.value.trim() : '';
  const chatId = chatInput ? chatInput.value.trim() : '';

  if (token) localStorage.setItem(STORAGE_KEYS.TG_TOKEN, token);
  else localStorage.removeItem(STORAGE_KEYS.TG_TOKEN);

  if (chatId) localStorage.setItem(STORAGE_KEYS.TG_CHAT_ID, chatId);
  else localStorage.removeItem(STORAGE_KEYS.TG_CHAT_ID);

  closeTelegramModal();
  showToast('Настройки Telegram бота сохранены');
}

async function testTelegramBot() {
  const tokenInput = document.getElementById('tg-bot-token-input');
  const chatInput = document.getElementById('tg-chat-id-input');

  const token = tokenInput ? tokenInput.value.trim() : '';
  const chatId = chatInput ? chatInput.value.trim() : '';

  if (!token || !chatId) {
    showToast('Введите Bot Token и Chat ID для теста');
    return;
  }

  try {
    showToast('Отправка тестового сообщения...');
    const testText = "🧪 Sous-Vide Chef Lab: Тестовое сообщение бота успешно доставлено! Ваш список покупок будет приходить сюда.";
    const response = await fetch(`https://api.telegram.org/bot${encodeURIComponent(token)}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: testText
      })
    });
    const data = await response.json();
    if (data.ok) {
      showToast('✅ Тест успешен! Бот работает.');
    } else {
      showToast(`❌ Ошибка Telegram: ${data.description}`);
    }
  } catch (e) {
    showToast('❌ Ошибка сети при тесте бота');
  }
}

function clearTelegramSettings() {
  localStorage.removeItem(STORAGE_KEYS.TG_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.TG_CHAT_ID);
  const tokenInput = document.getElementById('tg-bot-token-input');
  const chatInput = document.getElementById('tg-chat-id-input');
  if (tokenInput) tokenInput.value = '';
  if (chatInput) chatInput.value = '';
  closeTelegramModal();
  showToast('Настройки Telegram сброшены');
}

function renderShoppingList() {
  const container = document.getElementById('shopping-items-list');
  const countBadge = document.getElementById('shopping-count-badge');
  const countAll = document.getElementById('shop-count-all');
  const countSpice = document.getElementById('shop-count-spice');
  const countRecipe = document.getElementById('shop-count-recipe');
  if (!container) return;

  const totalUnbought = state.shoppingList.filter(i => !i.checked).length;
  if (countBadge) {
    countBadge.textContent = totalUnbought > 0 ? totalUnbought : '';
    countBadge.style.display = totalUnbought > 0 ? 'block' : 'none';
  }

  const spiceItems = state.shoppingList.filter(i => i.category === 'spice');
  const recipeItems = state.shoppingList.filter(i => i.category === 'recipe');

  if (countAll) countAll.textContent = state.shoppingList.length;
  if (countSpice) countSpice.textContent = spiceItems.length;
  if (countRecipe) countRecipe.textContent = recipeItems.length;

  if (state.shoppingList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
        <p>Список покупок пуст.</p>
        <p style="font-size: 0.8rem; margin-top: 4px;">Нажимайте на специи выше или кнопку «В список покупок» в рецептах.</p>
      </div>
    `;
    return;
  }

  const renderItemRow = (item) => `
    <div class="shop-item-row ${item.checked ? 'checked' : ''}" id="item-${item.id}">
      <div class="shop-item-left" onclick="toggleShoppingItem('${item.id}')">
        <div class="custom-checkbox">
          ${item.checked ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
        </div>
        <div>
          <div class="shop-item-name">${escapeHtml(item.name)}</div>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px;">
            <span class="shop-item-source">${escapeHtml(item.source)}</span>
            <span class="shop-item-badge ${item.category === 'spice' ? 'shop-item-badge-spice' : 'shop-item-badge-recipe'}" onclick="event.stopPropagation(); toggleShoppingItemCategory('${item.id}')" title="Нажмите для смены категории">
              ${item.category === 'spice' ? '🌿 Специи' : '🥩 Рецепт'}
            </span>
          </div>
        </div>
      </div>
      <button class="btn-del" onclick="deleteShoppingItem('${item.id}')" title="Удалить">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `;

  let html = '';
  const filter = state.shoppingFilter || 'all';

  if (filter === 'all' || filter === 'spice') {
    if (spiceItems.length > 0) {
      const unboughtSpices = spiceItems.filter(i => !i.checked).length;
      html += `
        <div class="shop-category-header">
          <div class="shop-category-title" style="color: var(--accent-emerald);">
            🌿 Специи и соусы (Повседневные)
          </div>
          <span class="shop-category-badge">${unboughtSpices} из ${spiceItems.length}</span>
        </div>
        ${spiceItems.map(renderItemRow).join('')}
      `;
    } else if (filter === 'spice') {
      html += `
        <div style="text-align: center; padding: 24px 10px; color: var(--text-muted);">
          <p>В категории «Специи» пока ничего нет.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Выберите специи из облака вверху или добавьте свою.</p>
        </div>
      `;
    }
  }

  if (filter === 'all' || filter === 'recipe') {
    if (recipeItems.length > 0) {
      const unboughtRecipes = recipeItems.filter(i => !i.checked).length;
      html += `
        <div class="shop-category-header" style="${filter === 'all' && spiceItems.length > 0 ? 'margin-top: 20px;' : ''}">
          <div class="shop-category-title" style="color: var(--accent-amber);">
            🥩 Ингредиенты из рецептов
          </div>
          <span class="shop-category-badge">${unboughtRecipes} из ${recipeItems.length}</span>
        </div>
        ${recipeItems.map(renderItemRow).join('')}
      `;
    } else if (filter === 'recipe') {
      html += `
        <div style="text-align: center; padding: 24px 10px; color: var(--text-muted);">
          <p>В категории «Из рецептов» пока ничего нет.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Нажмите кнопку «В список покупок» в карточке любого рецепта.</p>
        </div>
      `;
    }
  }

  container.innerHTML = html;
}

// Audio Chime & Web Notifications
function playChefChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    if (!state.audioCtx) {
      state.audioCtx = new AudioContext();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }

    const now = state.audioCtx.currentTime;
    const osc1 = state.audioCtx.createOscillator();
    const osc2 = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880.00, now + 0.3); // A5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880.00, now + 0.3);
    osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.7); // D6

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(state.audioCtx.destination);

    osc1.start(now);
    osc2.start(now + 0.3);
    osc1.stop(now + 0.8);
    osc2.stop(now + 1.8);
  } catch (e) {
    console.warn('Audio chime error:', e);
  }
}

function triggerNotification(title, body) {
  // Sound
  playChefChime();

  // Vibration for Mobile
  if ('vibrate' in navigator) {
    navigator.vibrate([300, 150, 300, 150, 500]);
  }

  // Push / Web Notification
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body: body,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23f59e0b"/></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23f59e0b"/></svg>',
        vibrate: [300, 150, 300],
        requireInteraction: true
      });
    } catch (e) {
      console.warn('Notification error:', e);
    }
  }
}

function requestNotificationAccess() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showToast('Оповещения включены! Вы получите сигнал по окончании.');
      } else {
        showToast('Оповещения отключены в браузере.');
      }
    });
  }
}

// Timer Engine
function setupTimerEngine() {
  setInterval(tickTimers, 1000);
}

function startCustomTimer(name, durationMinutes, tempC = null) {
  requestNotificationAccess();

  const timer = {
    id: 'timer_' + Date.now(),
    name: name,
    durationMs: durationMinutes * 60 * 1000,
    startTime: Date.now(),
    endTime: Date.now() + (durationMinutes * 60 * 1000),
    tempC: tempC,
    status: 'running'
  };

  state.activeTimers.push(timer);
  saveTimers();
  renderActiveTimers();
  switchTab('timer');
  showToast(`Таймер "${name}" запущен на ${durationMinutes} мин`);
}

function startRecipeTimer(recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  if (!recipe) return;
  startCustomTimer(`${recipe.title} (${recipe.tempC}°C)`, recipe.timeMin, recipe.tempC);
}

function startCureTimer30Min() {
  startCustomTimer('Сухой посол (Пресол)', 30);
}

function startShockChillTimer15Min() {
  startCustomTimer('Шоковое охлаждение в воде', 15);
}

function startSearTimer45Sec() {
  startCustomTimer('Финишный колер на сковороде', 0.75); // 45 sec
}

function stopTimer(id) {
  state.activeTimers = state.activeTimers.filter(t => t.id !== id);
  saveTimers();
  renderActiveTimers();
}

function tickTimers() {
  if (state.activeTimers.length === 0) return;

  const now = Date.now();
  let changed = false;

  state.activeTimers.forEach(t => {
    if (t.status === 'running') {
      const remaining = t.endTime - now;
      if (remaining <= 0) {
        t.status = 'completed';
        changed = true;
        triggerNotification(`🏁 Таймер завершен: ${t.name}`, `Время вышло! Пора переходить к следующему этапу.`);
      }
    }
  });

  if (changed) {
    saveTimers();
  }
  renderActiveTimers();
}

function formatTimeRemaining(ms) {
  if (ms <= 0) return '00:00:00';
  const totalSec = Math.floor(ms / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function renderActiveTimers() {
  const heroContainer = document.getElementById('active-timers-list');
  const timerBadge = document.getElementById('timer-count-badge');
  if (!heroContainer) return;

  const runningCount = state.activeTimers.filter(t => t.status === 'running').length;
  if (timerBadge) {
    timerBadge.textContent = runningCount > 0 ? runningCount : '';
    timerBadge.style.display = runningCount > 0 ? 'block' : 'none';
  }

  if (state.activeTimers.length === 0) {
    heroContainer.innerHTML = `
      <div class="timer-hero">
        <div class="timer-stage-title">Нет активных процессов</div>
        <div class="timer-display">00:00:00</div>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">
          Выберите быстрый пресет ниже или запустите таймер из любого рецепта.
        </p>
        <button class="btn btn-primary btn-timer-large" onclick="startCureTimer30Min()">
          Запустить посол (30 мин)
        </button>
      </div>
    `;
    return;
  }

  const now = Date.now();
  heroContainer.innerHTML = state.activeTimers.map(t => {
    const remaining = Math.max(0, t.endTime - now);
    const isDone = t.status === 'completed' || remaining === 0;

    return `
      <div class="timer-hero" style="${isDone ? 'border-color: var(--accent-emerald);' : ''}">
        <div class="timer-stage-title" style="${isDone ? 'color: var(--accent-emerald);' : ''}">
          ${isDone ? '✅ ЭТАП ЗАВЕРШЕН' : '⏳ В ПРОЦЕССЕ'} • ${escapeHtml(t.name)}
        </div>
        <div class="timer-display" style="${isDone ? 'color: var(--accent-emerald); text-shadow: 0 0 20px rgba(16,185,129,0.3);' : ''}">
          ${formatTimeRemaining(remaining)}
        </div>
        <div class="timer-controls">
          <button class="btn btn-secondary" onclick="stopTimer('${t.id}')">
            ${isDone ? 'Скрыть таймер' : 'Отменить'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Custom Recipe Modal
function setupModal() {
  const modal = document.getElementById('add-recipe-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const saveBtn = document.getElementById('modal-save-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const title = document.getElementById('modal-title-input').value.trim();
      const author = document.getElementById('modal-author-input').value.trim() || 'Пользовательский рецепт';
      const category = document.getElementById('modal-cat-select').value;
      const tempC = parseFloat(document.getElementById('modal-temp-input').value) || 60;
      const timeHours = parseFloat(document.getElementById('modal-time-input').value) || 1.5;
      const spices = document.getElementById('modal-spices-input').value.trim();
      const stepsText = document.getElementById('modal-steps-input').value.trim();
      const ingsText = document.getElementById('modal-ings-input').value.trim();

      if (!title) {
        showToast('Пожалуйста, введите название блюда');
        return;
      }

      const steps = stepsText ? stepsText.split('\n').filter(s => s.trim()) : ['Приготовить в су-виде'];
      const ingredients = ingsText ? ingsText.split('\n').filter(i => i.trim()) : [title];

      const newRecipe = {
        id: 'custom_' + Date.now(),
        title: title,
        author: author,
        isChef: author.toLowerCase().includes('демьян'),
        category: category,
        tempC: tempC,
        timeMin: Math.round(timeHours * 60),
        timeFormatted: timeHours >= 1 ? `${timeHours} ч` : `${Math.round(timeHours * 60)} мин`,
        saltGperKg: 20,
        sugarGperKg: 10,
        spices: spices || 'Соль, сахар, специи по вкусу',
        description: `Пользовательский рецепт: ${title} (${tempC}°C / ${timeHours} ч).`,
        steps: steps,
        ingredients: ingredients
      };

      state.recipes.unshift(newRecipe);
      saveRecipes();
      renderRecipes();
      modal.classList.remove('active');
      showToast('Рецепт успешно добавлен в книгу!');
    });
  }
}

function openAddRecipeModal() {
  const modal = document.getElementById('add-recipe-modal');
  if (modal) {
    modal.classList.add('active');
  }
}

// Toast Notification
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: #1e293b;
      color: #fff;
      padding: 10px 20px;
      border-radius: 12px;
      border: 1px solid var(--border-subtle);
      font-size: 0.85rem;
      font-weight: 600;
      z-index: 300;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      transition: all 0.25s ease;
      opacity: 0;
      pointer-events: none;
      white-space: nowrap;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2600);
}

// HTML Escaper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Service Worker Registration with Auto-Update
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('✨ Доступно обновление! Перезагрузка...');
              setTimeout(() => window.location.reload(), 1200);
            }
          });
        }
      });
    }).catch(err => {
      console.log('SW registration note:', err);
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', initApp);
