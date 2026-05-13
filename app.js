const { useEffect, useMemo, useState } = React;

const PRODUCTS = [
  {
    id: "soap-oat-honey",
    category: "jabones",
    price: 7.9,
    i18n: {
      en: {
        name: "Oat & Honey Soap Bar",
        scent: "Oat, honey and almond",
        description: "Nourishing, creamy lather for sensitive skin.",
      },
      es: {
        name: "Jabón de avena y miel",
        scent: "Avena, miel y almendra",
        description: "Nutre y suaviza la piel sensible con una espuma cremosa.",
      },
      fr: {
        name: "Savon avoine & miel",
        scent: "Avoine, miel et amande",
        description: "Mousse crémeuse et nourrissante pour peaux sensibles.",
      },
    },
    image:
      "https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "soap-lavender",
    category: "jabones",
    price: 8.4,
    i18n: {
      en: {
        name: "Lavender Soap Bar",
        scent: "Provence lavender",
        description: "Perfect for a calm evening ritual with a relaxing scent.",
      },
      es: {
        name: "Jabón de lavanda",
        scent: "Lavanda provenzal",
        description: "Ideal para el ritual nocturno gracias a su aroma relajante.",
      },
      fr: {
        name: "Savon lavande",
        scent: "Lavande de Provence",
        description: "Idéal pour un rituel du soir grâce a son parfum apaisant.",
      },
    },
    image:
      "https://images.pexels.com/photos/6187530/pexels-photo-6187530.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "soap-rosemary",
    category: "jabones",
    price: 8.1,
    i18n: {
      en: {
        name: "Rosemary Soap Bar",
        scent: "Rosemary and olive oil",
        description: "Herbal freshness for a revitalizing everyday cleanse.",
      },
      es: {
        name: "Jabón de romero",
        scent: "Romero y aceite de oliva",
        description: "Frescura herbal para una limpieza revitalizante diaria.",
      },
      fr: {
        name: "Savon romarin",
        scent: "Romarin et huile d'olive",
        description: "Fraicheur herbale pour une toilette revitalisante.",
      },
    },
    image:
      "https://images.pexels.com/photos/6187525/pexels-photo-6187525.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "soap-rosehip",
    category: "jabones",
    price: 8.9,
    i18n: {
      en: {
        name: "Rosehip Soap Bar",
        scent: "Soft rose and floral notes",
        description: "Leaves skin feeling silky and luminous after every use.",
      },
      es: {
        name: "Jabón de rosa mosqueta",
        scent: "Rosa suave y notas florales",
        description: "Aporta luminosidad y un tacto sedoso tras cada uso.",
      },
      fr: {
        name: "Savon a la rose musquee",
        scent: "Rose douce et notes florales",
        description: "Apporte de l'eclat et un toucher soyeux apres usage.",
      },
    },
    image:
      "https://images.pexels.com/photos/16244099/pexels-photo-16244099.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "candle-lavender",
    category: "velas",
    price: 12.9,
    i18n: {
      en: {
        name: "Lavender Candle",
        scent: "French lavender",
        description: "Vegetal soy wax with a clean, long-lasting burn.",
      },
      es: {
        name: "Vela de lavanda",
        scent: "Lavanda francesa",
        description: "Cera vegetal de soja con combustión limpia y duradera.",
      },
      fr: {
        name: "Bougie lavande",
        scent: "Lavande francaise",
        description: "Cire vegetale de soja, combustion propre et durable.",
      },
    },
    image:
      "https://images.pexels.com/photos/7234625/pexels-photo-7234625.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "candle-vanilla",
    category: "velas",
    price: 13.4,
    i18n: {
      en: {
        name: "Vanilla Candle",
        scent: "Warm vanilla",
        description: "A cozy ambience with delicate sweet notes.",
      },
      es: {
        name: "Vela de vainilla",
        scent: "Vainilla calida",
        description: "Ambiente acogedor con notas dulces y delicadas.",
      },
      fr: {
        name: "Bougie vanille",
        scent: "Vanille chaleureuse",
        description: "Une ambiance cocooning aux notes douces et delicates.",
      },
    },
    image:
      "https://images.pexels.com/photos/18200312/pexels-photo-18200312.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "candle-jasmine",
    category: "velas",
    price: 13.9,
    i18n: {
      en: {
        name: "Jasmine Candle",
        scent: "White jasmine",
        description: "Elegant floral fragrance for quiet moments.",
      },
      es: {
        name: "Vela de jazmin",
        scent: "Jazmin blanco",
        description: "Fragancia floral elegante para momentos de calma.",
      },
      fr: {
        name: "Bougie jasmin",
        scent: "Jasmin blanc",
        description: "Parfum floral elegant pour des moments de calme.",
      },
    },
    image:
      "https://images.pexels.com/photos/37145792/pexels-photo-37145792.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "candle-clean-cotton",
    category: "velas",
    price: 12.5,
    i18n: {
      en: {
        name: "Clean Cotton Candle",
        scent: "Fresh linen",
        description: "A clean-home feeling with a light, pure scent.",
      },
      es: {
        name: "Vela de algodon limpio",
        scent: "Lino fresco",
        description: "Sensacion de hogar limpio con aroma ligero y puro.",
      },
      fr: {
        name: "Bougie coton propre",
        scent: "Linge frais",
        description: "Sensation de maison propre au parfum leger et pur.",
      },
    },
    image:
      "https://images.pexels.com/photos/27911353/pexels-photo-27911353.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "pack-gift-ritual",
    category: "packs",
    price: 24.9,
    i18n: {
      en: {
        name: "Natural Ritual Gift Set",
        scent: "Lavender + Vanilla",
        description: "Includes 1 candle and 2 soap bars in a gift box.",
      },
      es: {
        name: "Pack Ritual Natural",
        scent: "Lavanda + Vainilla",
        description: "Incluye 1 vela y 2 jabones artesanales en caja regalo.",
      },
      fr: {
        name: "Coffret rituel naturel",
        scent: "Lavande + Vanille",
        description: "1 bougie et 2 savons en boite cadeau.",
      },
    },
    image:
      "https://images.pexels.com/photos/10853708/pexels-photo-10853708.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "pack-gift-floral",
    category: "packs",
    price: 27.5,
    i18n: {
      en: {
        name: "Serene Floral Gift Set",
        scent: "Jasmine + Rose",
        description: "A premium selection to gift care and wellbeing.",
      },
      es: {
        name: "Pack Floral Sereno",
        scent: "Jazmin + Rosa",
        description: "Seleccion premium para regalar bienestar y cuidado.",
      },
      fr: {
        name: "Coffret floral serein",
        scent: "Jasmin + Rose",
        description: "Selection premium pour offrir soin et bien-etre.",
      },
    },
    image:
      "https://images.pexels.com/photos/19981911/pexels-photo-19981911.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const CATEGORIES = [
  {
    id: "jabones",
    i18n: {
      en: {
        title: "Natural Soap Bars",
        description: "Handmade with gentle botanical oils, butters and extracts.",
      },
      es: {
        title: "Jabones naturales",
        description: "Hechos a mano con aceites botanicos, mantecas y extractos suaves.",
      },
      fr: {
        title: "Savons naturels",
        description: "Faits main avec huiles botaniques, beurres et extraits doux.",
      },
    },
    image:
      "https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "velas",
    i18n: {
      en: {
        title: "Handcrafted Candles",
        description: "Vegetal wax, cotton wick and soft fragrances for your home.",
      },
      es: {
        title: "Velas artesanales",
        description: "Cera vegetal, mecha de algodon y fragancias que envuelven tu hogar.",
      },
      fr: {
        title: "Bougies artisanales",
        description: "Cire vegetale, meche en coton et parfums doux pour la maison.",
      },
    },
    image:
      "https://images.pexels.com/photos/19981911/pexels-photo-19981911.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "packs",
    i18n: {
      en: {
        title: "Gift Sets",
        description: "Curated combinations to gift natural beauty and calm.",
      },
      es: {
        title: "Packs regalo",
        description: "Combinaciones especiales para sorprender con belleza natural.",
      },
      fr: {
        title: "Coffrets cadeau",
        description: "Combinaisons speciales pour offrir une beaute naturelle.",
      },
    },
    image:
      "https://images.pexels.com/photos/10853708/pexels-photo-10853708.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const IMAGE_FALLBACKS = {
  hero: "https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  jabones:
    "https://images.pexels.com/photos/6187525/pexels-photo-6187525.jpeg?auto=compress&cs=tinysrgb&w=1200",
  velas:
    "https://images.pexels.com/photos/7234625/pexels-photo-7234625.jpeg?auto=compress&cs=tinysrgb&w=1200",
  packs:
    "https://images.pexels.com/photos/10853708/pexels-photo-10853708.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const handleImageError = (e, fallback) => {
  const img = e.currentTarget;
  if (img.dataset.fallbackApplied === "1") {
    img.onerror = null;
    img.src = "./logo-lilix.svg";
    return;
  }
  img.dataset.fallbackApplied = "1";
  img.src = fallback;
};

const BRAND = {
  name: "Lilix",
  phone: "+34 611 223 334",
  email: "hola@lilixnatural.es",
  address: "Calle Magnolia 12, 28004 Madrid",
  instagram: "https://instagram.com/lilix.natural",
  whatsapp: "https://wa.me/34611223334",
};

const CURRENCIES = {
  GBP: {
    label: "GBP",
    locale: "en-GB",
    rateFromGbp: 1,
  },
  EUR: {
    label: "EUR",
    locale: "en-IE",
    rateFromGbp: 1.157,
  },
  USD: {
    label: "USD",
    locale: "en-US",
    rateFromGbp: 1.3361,
  },
};

const EXCHANGE_RATE_NOTE = "Rates use the April 2026 HMRC monthly average: £1 = €1.1570 / $1.3361.";

const formatCurrency = (value, currency = "GBP") => {
  const selectedCurrency = CURRENCIES[currency] ?? CURRENCIES.GBP;
  return new Intl.NumberFormat(selectedCurrency.locale, {
    style: "currency",
    currency,
  }).format(value * selectedCurrency.rateFromGbp);
};

const STRINGS = {
  en: {
    nav: { home: "Home", soaps: "Soaps", candles: "Candles", packs: "Packs", orders: "Orders", contact: "Contact" },
    hero: {
      kicker: "Handmade with love and calm",
      title: "Natural soap bars and candles to care for your home and your skin",
      subtitle:
        "At Lilix we craft artisanal pieces with natural ingredients, gentle fragrances and details that turn routines into rituals.",
      ctaProducts: "View products",
      ctaOrder: "Place an order",
    },
    sections: {
      categories: "Shop by category",
      gallery: "Product gallery",
      candles: "Candles",
      soaps: "Soaps",
      packs: "Gift packs",
      cart: "Cart",
      checkout: "Order form",
      contact: "Contact",
    },
    filters: { all: "All", soaps: "Soaps", candles: "Candles", packs: "Packs" },
    actions: { add: "Add to cart", finish: "Checkout", remove: "Remove" },
    currency: { label: "Currency", note: EXCHANGE_RATE_NOTE },
    cart: { empty: "Your cart is empty. Add products to prepare your order.", product: "Product", qty: "Qty", price: "Price", subtotal: "Subtotal", total: "Order total" },
    order: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      address: "Address",
      notes: "Additional notes",
      send: "Send order",
      thanks: "Thank you, we have received your order. We will contact you to confirm the details.",
      summary: "Cart summary",
      empty: "No items added.",
    },
    contact: {
      intro: "Write to us and we will help you choose the ideal scent or gift set.",
      send: "Send message",
      sent: "Message sent. Thank you for reaching out.",
      details: "Contact details",
      message: "Your message",
    },
    footer: "Handcrafted in Spain.",
    modal: { aroma: "Scent:" },
  },
  es: {
    nav: { home: "Inicio", soaps: "Jabones", candles: "Velas", packs: "Packs", orders: "Pedidos", contact: "Contacto" },
    hero: {
      kicker: "Hecho a mano con amor y calma",
      title: "Jabones y velas naturales para cuidar tu hogar y tu piel",
      subtitle:
        "En Lilix creamos piezas artesanales con ingredientes naturales, fragancias suaves y detalles que convierten cada rutina en un momento especial.",
      ctaProducts: "Ver productos",
      ctaOrder: "Hacer pedido",
    },
    sections: {
      categories: "Descubre por categorias",
      gallery: "Galeria de productos",
      candles: "Seccion de Velas",
      soaps: "Seccion de Jabones",
      packs: "Packs Regalo",
      cart: "Cesta de pedido",
      checkout: "Formulario de pedido",
      contact: "Contacto",
    },
    filters: { all: "Todos", soaps: "Jabones", candles: "Velas", packs: "Packs" },
    actions: { add: "Anadir a la cesta", finish: "Finalizar pedido", remove: "Eliminar" },
    currency: { label: "Moneda", note: "Tipos medios mensuales HMRC de abril de 2026: £1 = €1,1570 / $1,3361." },
    cart: { empty: "Tu cesta esta vacia. Anade productos para preparar tu pedido.", product: "Producto", qty: "Cantidad", price: "Precio", subtotal: "Subtotal", total: "Total del pedido" },
    order: {
      name: "Nombre",
      phone: "Telefono",
      email: "Email",
      address: "Direccion",
      notes: "Comentarios adicionales",
      send: "Enviar pedido",
      thanks: "Gracias, hemos recibido tu pedido. Te contactaremos para confirmar los detalles.",
      summary: "Resumen de la cesta",
      empty: "No hay productos anadidos.",
    },
    contact: {
      intro: "Escribenos y te ayudamos a elegir el aroma o pack ideal para ti o para regalo.",
      send: "Enviar mensaje",
      sent: "Mensaje enviado. Gracias por escribirnos.",
      details: "Datos de contacto",
      message: "Tu mensaje",
    },
    footer: "Hecho artesanalmente en Espana.",
    modal: { aroma: "Aroma:" },
  },
  fr: {
    nav: { home: "Accueil", soaps: "Savons", candles: "Bougies", packs: "Coffrets", orders: "Commande", contact: "Contact" },
    hero: {
      kicker: "Fait main avec amour et calme",
      title: "Savons naturels et bougies pour prendre soin de votre maison et de votre peau",
      subtitle:
        "Chez Lilix, nous creons des pieces artisanales avec des ingredients naturels, des parfums doux et des details qui transforment la routine en rituel.",
      ctaProducts: "Voir les produits",
      ctaOrder: "Passer commande",
    },
    sections: {
      categories: "Explorer par categorie",
      gallery: "Galerie de produits",
      candles: "Bougies",
      soaps: "Savons",
      packs: "Coffrets cadeau",
      cart: "Panier",
      checkout: "Formulaire de commande",
      contact: "Contact",
    },
    filters: { all: "Tous", soaps: "Savons", candles: "Bougies", packs: "Coffrets" },
    actions: { add: "Ajouter au panier", finish: "Finaliser", remove: "Supprimer" },
    currency: { label: "Devise", note: "Taux moyens mensuels HMRC d'avril 2026 : £1 = €1,1570 / $1,3361." },
    cart: { empty: "Votre panier est vide. Ajoutez des produits pour preparer votre commande.", product: "Produit", qty: "Quantite", price: "Prix", subtotal: "Sous-total", total: "Total" },
    order: {
      name: "Nom",
      phone: "Telephone",
      email: "Email",
      address: "Adresse",
      notes: "Commentaires",
      send: "Envoyer la commande",
      thanks: "Merci, nous avons recu votre commande. Nous vous contacterons pour confirmer les details.",
      summary: "Resume du panier",
      empty: "Aucun article ajoute.",
    },
    contact: {
      intro: "Ecrivez-nous, on vous aide a choisir le parfum ou coffret ideal.",
      send: "Envoyer",
      sent: "Message envoye. Merci de nous avoir ecrit.",
      details: "Coordonnees",
      message: "Votre message",
    },
    footer: "Fait main en Espagne.",
    modal: { aroma: "Parfum :" },
  },
};

const getText = (lang, keyPath) => {
  const parts = keyPath.split(".");
  let node = STRINGS[lang];
  for (const part of parts) node = node?.[part];
  return node ?? keyPath;
};

function Header({ cartCount, lang, onChangeLang, currency, onChangeCurrency, onSelectCategory }) {
  const links = [
    { href: "#inicio", label: getText(lang, "nav.home") },
    { href: "#catalogo", category: "jabones", label: getText(lang, "nav.soaps") },
    { href: "#catalogo", category: "velas", label: getText(lang, "nav.candles") },
    { href: "#catalogo", category: "packs", label: getText(lang, "nav.packs") },
    { href: "#pedidos", label: getText(lang, "nav.orders") },
    { href: "#contacto", label: getText(lang, "nav.contact") },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand">
          <img
            src="./logo-lilix.svg"
            alt="Logo Lilix"
            className="brand-logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = document.getElementById("logo-fallback");
              if (fallback) fallback.style.display = "inline-flex";
            }}
          />
          <span id="logo-fallback" className="logo-fallback" style={{ display: "none" }}>
            {BRAND.name}
          </span>
          <span className="brand-name">{BRAND.name}</span>
        </a>

        <nav className="menu">
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              onClick={(e) => {
                if (!link.category) return;
                e.preventDefault();
                onSelectCategory(link.category);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <label className="lang">
            <span className="sr-only">Language</span>
            <select value={lang} onChange={(e) => onChangeLang(e.target.value)}>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </label>
          <label className="lang">
            <span className="sr-only">{getText(lang, "currency.label")}</span>
            <select value={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
              {Object.keys(CURRENCIES).map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {CURRENCIES[currencyCode].label}
                </option>
              ))}
            </select>
          </label>
          <a href="#pedidos" className="cart-badge" aria-label="Go to cart">
            <span className="cart-icon">🧺</span>
            <span className="cart-count">{cartCount}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-content">
        <div>
          <p className="hero-kicker">{getText(lang, "hero.kicker")}</p>
          <h1>{getText(lang, "hero.title")}</h1>
          <p>{getText(lang, "hero.subtitle")}</p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">
              {getText(lang, "hero.ctaProducts")}
            </a>
            <a href="#pedidos" className="btn btn-ghost">
              {getText(lang, "hero.ctaOrder")}
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img
            src="https://images.pexels.com/photos/16244099/pexels-photo-16244099.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Composición de jabones y velas naturales"
            onError={(e) => handleImageError(e, IMAGE_FALLBACKS.hero)}
          />
        </div>
      </div>
    </section>
  );
}

function CategoryCards({ onSelectCategory, lang }) {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <h2 className="section-title">{getText(lang, "sections.categories")}</h2>
        <div className="grid categories-grid">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="card-image-wrap">
                <img
                  src={category.image}
                  alt={category.i18n?.[lang]?.title ?? category.id}
                  onError={(e) => handleImageError(e, IMAGE_FALLBACKS[category.id])}
                />
              </div>
              <div className="card-content">
                <h3>{category.i18n?.[lang]?.title ?? category.id}</h3>
                <p>{category.i18n?.[lang]?.description ?? ""}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart, onOpenProduct, lang, currency }) {
  const i18n = product.i18n?.[lang] ?? product.i18n?.en ?? {};
  return (
    <article className="product-card">
      <div className="card-image-wrap" onClick={() => onOpenProduct(product)}>
        <img
          src={product.image}
          alt={i18n.name ?? product.id}
          loading="lazy"
          onError={(e) => handleImageError(e, IMAGE_FALLBACKS[product.category])}
        />
      </div>
      <div className="card-content">
        <h3 onClick={() => onOpenProduct(product)}>{i18n.name ?? product.id}</h3>
        <p>{i18n.description ?? ""}</p>
        <small>{i18n.scent ?? ""}</small>
        <div className="price-row">
          <strong>{formatCurrency(product.price, currency)}</strong>
          <button
            className="btn btn-small"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            {getText(lang, "actions.add")}
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductGallery({
  products,
  onAddToCart,
  activeFilter,
  onChangeFilter,
  onOpenProduct,
  lang,
  currency,
}) {
  const filterOptions = [
    { key: "todos", label: getText(lang, "filters.all") },
    { key: "jabones", label: getText(lang, "filters.soaps") },
    { key: "velas", label: getText(lang, "filters.candles") },
    { key: "packs", label: getText(lang, "filters.packs") },
  ];

  return (
    <section className="section" id="catalogo">
      <div className="container">
        <h2 className="section-title">{getText(lang, "sections.gallery")}</h2>
        <div className="filters">
          {filterOptions.map((filter) => (
            <button
              key={filter.key}
              className={`filter-pill ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => onChangeFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onOpenProduct={onOpenProduct}
              lang={lang}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose, onAddToCart, lang, currency }) {
  if (!product) return null;
  const i18n = product.i18n?.[lang] ?? product.i18n?.en ?? {};
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <img
          src={product.image}
          alt={i18n.name ?? product.id}
          onError={(e) => handleImageError(e, IMAGE_FALLBACKS[product.category])}
        />
        <h3>{i18n.name ?? product.id}</h3>
        <p>{i18n.description ?? ""}</p>
        <p>
          <strong>{getText(lang, "modal.aroma")}</strong> {i18n.scent ?? ""}
        </p>
        <div className="price-row">
          <strong>{formatCurrency(product.price, currency)}</strong>
          <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
            {getText(lang, "actions.add")}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartSection({ cart, onDecrease, onIncrease, onRemove, lang, currency }) {
  const items = Object.values(cart);
  const total = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <section className="section" id="pedidos">
      <div className="container cart-layout">
        <div className="cart-panel">
          <h2 className="section-title">{getText(lang, "sections.cart")}</h2>
          {items.length === 0 ? (
            <p className="empty">{getText(lang, "cart.empty")}</p>
          ) : (
            <>
              <div className="cart-table">
                <div className="cart-head">
                  <span>{getText(lang, "cart.product")}</span>
                  <span>{getText(lang, "cart.qty")}</span>
                  <span>{getText(lang, "cart.price")}</span>
                  <span>{getText(lang, "cart.subtotal")}</span>
                  <span></span>
                </div>
                {items.map(({ product, quantity }) => (
                  (() => {
                    const i18n = product.i18n?.[lang] ?? product.i18n?.en ?? {};
                    return (
                  <div className="cart-row" key={product.id}>
                    <span>{i18n.name ?? product.id}</span>
                    <span className="qty-controls">
                      <button onClick={() => onDecrease(product.id)}>-</button>
                      <strong>{quantity}</strong>
                      <button onClick={() => onIncrease(product.id)}>+</button>
                    </span>
                    <span>{formatCurrency(product.price, currency)}</span>
                    <span>{formatCurrency(product.price * quantity, currency)}</span>
                    <button className="remove-btn" onClick={() => onRemove(product.id)}>
                      {getText(lang, "actions.remove")}
                    </button>
                  </div>
                    );
                  })()
                ))}
              </div>
              <div className="cart-total">
                <strong>{getText(lang, "cart.total")}</strong>
                <strong>{formatCurrency(total, currency)}</strong>
              </div>
              <p className="rate-note">{getText(lang, "currency.note")}</p>
              <a href="#formulario-pedido" className="btn btn-primary">
                {getText(lang, "actions.finish")}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function OrderSection({ cart, lang, currency }) {
  const [sent, setSent] = useState(false);
  const items = Object.values(cart);
  const total = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="formulario-pedido">
      <div className="container order-grid">
        <div>
          <h2 className="section-title">{getText(lang, "sections.checkout")}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input required placeholder={getText(lang, "order.name")} />
            <input required placeholder={getText(lang, "order.phone")} />
            <input required type="email" placeholder={getText(lang, "order.email")} />
            <input required placeholder={getText(lang, "order.address")} />
            <textarea placeholder={getText(lang, "order.notes")} rows="4"></textarea>
            <button type="submit" className="btn btn-primary">
              {getText(lang, "order.send")}
            </button>
            {sent && (
              <p className="success-msg">{getText(lang, "order.thanks")}</p>
            )}
          </form>
        </div>

        <aside className="summary">
          <h3>{getText(lang, "order.summary")}</h3>
          {items.length === 0 ? (
            <p>{getText(lang, "order.empty")}</p>
          ) : (
            <>
              {items.map(({ product, quantity }) => (
                (() => {
                  const i18n = product.i18n?.[lang] ?? product.i18n?.en ?? {};
                  return (
                <div key={product.id} className="summary-row">
                  <span>
                    {i18n.name ?? product.id} x{quantity}
                  </span>
                  <span>{formatCurrency(product.price * quantity, currency)}</span>
                </div>
                  );
                })()
              ))}
              <div className="summary-total">
                <strong>Total</strong>
                <strong>{formatCurrency(total, currency)}</strong>
              </div>
              <p className="rate-note">{getText(lang, "currency.note")}</p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

function ContactSection({ lang }) {
  const [sent, setSent] = useState(false);

  return (
    <section className="section" id="contacto">
      <div className="container order-grid">
        <div>
          <h2 className="section-title">{getText(lang, "sections.contact")}</h2>
          <p>{getText(lang, "contact.intro")}</p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              e.currentTarget.reset();
            }}
          >
            <input required placeholder={getText(lang, "order.name")} />
            <input required type="email" placeholder={getText(lang, "order.email")} />
            <textarea required placeholder={getText(lang, "contact.message")} rows="4"></textarea>
            <button className="btn btn-primary" type="submit">
              {getText(lang, "contact.send")}
            </button>
            {sent && <p className="success-msg">{getText(lang, "contact.sent")}</p>}
          </form>
        </div>
        <aside className="contact-card">
          <h3>{getText(lang, "contact.details")}</h3>
          <p>
            <strong>Tel:</strong> {BRAND.phone}
          </p>
          <p>
            <strong>Email:</strong> {BRAND.email}
          </p>
          <p>
            <strong>Dirección:</strong> {BRAND.address}
          </p>
          <div className="socials">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={BRAND.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Lilix Natural. {getText(lang, "footer")}</p>
        <a href="#inicio">{getText(lang, "nav.home")}</a>
      </div>
    </footer>
  );
}

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("lilix-cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lang, setLang] = useState("en");
  const [currency, setCurrency] = useState("GBP");

  useEffect(() => {
    localStorage.setItem("lilix-cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const filteredProducts = useMemo(() => {
    if (activeFilter === "todos") return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const addToCart = (product) => {
    setCart((prev) => {
      const current = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: current ? current.quantity + 1 : 1,
        },
      };
    });
  };

  const increaseQty = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: prev[productId].quantity + 1,
      },
    }));
  };

  const decreaseQty = (productId) => {
    setCart((prev) => {
      const item = prev[productId];
      if (!item) return prev;
      if (item.quantity <= 1) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return {
        ...prev,
        [productId]: {
          ...item,
          quantity: item.quantity - 1,
        },
      };
    });
  };

  const removeItem = (productId) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const selectCategory = (categoryId) => {
    setActiveFilter(categoryId);
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        cartCount={cartCount}
        lang={lang}
        onChangeLang={setLang}
        currency={currency}
        onChangeCurrency={setCurrency}
        onSelectCategory={selectCategory}
      />
      <main>
        <Hero lang={lang} />
        <CategoryCards onSelectCategory={selectCategory} lang={lang} />
        <ProductGallery
          products={filteredProducts}
          onAddToCart={addToCart}
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
          onOpenProduct={setSelectedProduct}
          lang={lang}
          currency={currency}
        />
        <CartSection
          cart={cart}
          onDecrease={decreaseQty}
          onIncrease={increaseQty}
          onRemove={removeItem}
          lang={lang}
          currency={currency}
        />
        <OrderSection cart={cart} lang={lang} currency={currency} />
        <ContactSection lang={lang} />
      </main>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        lang={lang}
        currency={currency}
      />
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
