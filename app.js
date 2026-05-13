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
        description: "A gentle bar with finely milled oats and a soft honeyed finish for everyday hand and body care.",
      },
      es: {
        name: "Jabón de avena y miel",
        scent: "Avena, miel y almendra",
        description: "Una pastilla suave con avena molida y un acabado meloso para el cuidado diario de manos y cuerpo.",
      },
      fr: {
        name: "Savon avoine & miel",
        scent: "Avoine, miel et amande",
        description: "Un savon doux avec avoine finement moulue et une note miellée pour le soin quotidien.",
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
        description: "A creamy lavender bar designed for slow evening showers and a clean, floral finish.",
      },
      es: {
        name: "Jabón de lavanda",
        scent: "Lavanda provenzal",
        description: "Una pastilla cremosa de lavanda pensada para duchas pausadas y un final floral limpio.",
      },
      fr: {
        name: "Savon lavande",
        scent: "Lavande de Provence",
        description: "Un savon crémeux à la lavande pour les douches du soir et une note florale nette.",
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
        description: "Green, herbal and crisp, with olive oil richness for a fresh morning wash.",
      },
      es: {
        name: "Jabón de romero",
        scent: "Romero y aceite de oliva",
        description: "Verde, herbal y fresco, con la riqueza del aceite de oliva para empezar la mañana.",
      },
      fr: {
        name: "Savon romarin",
        scent: "Romarin et huile d'olive",
        description: "Vert, herbacé et frais, avec la richesse de l'huile d'olive pour le matin.",
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
        description: "A silky floral bar with rosehip notes, made for a softer, more polished bathroom ritual.",
      },
      es: {
        name: "Jabón de rosa mosqueta",
        scent: "Rosa suave y notas florales",
        description: "Una pastilla floral y sedosa con notas de rosa mosqueta para un ritual de baño más cuidado.",
      },
      fr: {
        name: "Savon a la rose musquee",
        scent: "Rose douce et notes florales",
        description: "Un savon floral et soyeux aux notes de rose musquée pour un rituel plus raffiné.",
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
        description: "Hand-poured soy wax and a cotton wick for a quiet lavender glow beside the bed or bath.",
      },
      es: {
        name: "Vela de lavanda",
        scent: "Lavanda francesa",
        description: "Cera de soja vertida a mano y mecha de algodón para una luz tranquila junto a la cama o el baño.",
      },
      fr: {
        name: "Bougie lavande",
        scent: "Lavande francaise",
        description: "Cire de soja coulée à la main et mèche coton pour une lueur lavande douce.",
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
        description: "Warm vanilla with a soft bakery note, made for reading corners, dinner tables and slow weekends.",
      },
      es: {
        name: "Vela de vainilla",
        scent: "Vainilla calida",
        description: "Vainilla cálida con una nota dulce suave, ideal para rincones de lectura y sobremesas lentas.",
      },
      fr: {
        name: "Bougie vanille",
        scent: "Vanille chaleureuse",
        description: "Vanille chaude avec une note gourmande douce, parfaite pour lire ou prolonger le dîner.",
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
        description: "A refined white-flower candle that brings a little ceremony to quiet rooms.",
      },
      es: {
        name: "Vela de jazmin",
        scent: "Jazmin blanco",
        description: "Una vela de flor blanca, elegante y serena, para dar presencia a estancias tranquilas.",
      },
      fr: {
        name: "Bougie jasmin",
        scent: "Jasmin blanc",
        description: "Une bougie florale blanche, élégante et sereine, pour les pièces calmes.",
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
        description: "Fresh linen, open windows and newly folded sheets in a light, clean-burning candle.",
      },
      es: {
        name: "Vela de algodon limpio",
        scent: "Lino fresco",
        description: "Lino fresco, ventanas abiertas y sábanas recién dobladas en una vela ligera.",
      },
      fr: {
        name: "Bougie coton propre",
        scent: "Linge frais",
        description: "Linge frais, fenêtres ouvertes et draps pliés dans une bougie légère.",
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
        description: "A ready-to-gift ritual box with one candle and two soap bars, packed for birthdays or thank-you moments.",
      },
      es: {
        name: "Pack Ritual Natural",
        scent: "Lavanda + Vainilla",
        description: "Caja lista para regalar con una vela y dos jabones, pensada para cumpleaños o detalles de agradecimiento.",
      },
      fr: {
        name: "Coffret rituel naturel",
        scent: "Lavande + Vanille",
        description: "Coffret prêt à offrir avec une bougie et deux savons, pour anniversaires ou attentions.",
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
        description: "A floral pairing for someone who loves soft scent, pretty packaging and unhurried self-care.",
      },
      es: {
        name: "Pack Floral Sereno",
        scent: "Jazmin + Rosa",
        description: "Un dúo floral para quien disfruta de aromas suaves, packaging bonito y autocuidado sin prisa.",
      },
      fr: {
        name: "Coffret floral serein",
        scent: "Jasmin + Rose",
        description: "Un duo floral pour celles et ceux qui aiment les parfums doux et les beaux détails.",
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
        description: "Small-batch bars with botanical oils, creamy lather and scents that stay soft on the skin.",
      },
      es: {
        title: "Jabones naturales",
        description: "Pastillas en lotes pequeños con aceites botánicos, espuma cremosa y aromas suaves.",
      },
      fr: {
        title: "Savons naturels",
        description: "Savons en petites séries avec huiles botaniques, mousse crémeuse et parfums doux.",
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
        description: "Soy wax candles poured in small batches for bedrooms, bathrooms and slower evenings.",
      },
      es: {
        title: "Velas artesanales",
        description: "Velas de soja en lotes pequeños para dormitorios, baños y tardes sin prisa.",
      },
      fr: {
        title: "Bougies artisanales",
        description: "Bougies de soja en petites séries pour chambres, salles de bain et soirées lentes.",
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
        description: "Wrapped pairings of soaps and candles for thoughtful gifts that feel personal.",
      },
      es: {
        title: "Packs regalo",
        description: "Combinaciones envueltas de jabones y velas para regalos con intención.",
      },
      fr: {
        title: "Coffrets cadeau",
        description: "Associations de savons et bougies emballées pour des cadeaux personnels.",
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
      kicker: "Small-batch soaps and soy candles",
      title: "Quiet, botanical pieces for slower everyday rituals",
      subtitle:
        "Lilix makes hand-finished soap bars, soy candles and gift sets with soft scents, tactile textures and packaging designed to feel considered from the first look.",
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
      thanks: "Thank you, we have received your order request. We will confirm availability, delivery details and final payment before preparing it.",
      summary: "Cart summary",
      empty: "No items added.",
    },
    contact: {
      intro: "Tell us who the order is for, the mood you want to create, or the scents you usually like. We will help you choose a thoughtful combination.",
      send: "Send message",
      sent: "Message sent. Thank you for reaching out.",
      details: "Contact details",
      message: "Your message",
    },
    footer: "Small-batch soaps, candles and gifts made with care in Spain.",
    modal: { aroma: "Scent:" },
  },
  es: {
    nav: { home: "Inicio", soaps: "Jabones", candles: "Velas", packs: "Packs", orders: "Pedidos", contact: "Contacto" },
    hero: {
      kicker: "Jabones y velas de soja en lotes pequeños",
      title: "Piezas botánicas para rituales diarios más pausados",
      subtitle:
        "Lilix crea jabones, velas y packs regalo con aromas suaves, texturas cuidadas y un packaging pensado para sentirse especial desde el primer vistazo.",
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
      thanks: "Gracias, hemos recibido tu solicitud de pedido. Te contactaremos para confirmar disponibilidad, entrega y pago antes de prepararlo.",
      summary: "Resumen de la cesta",
      empty: "No hay productos anadidos.",
    },
    contact: {
      intro: "Cuéntanos para quién es el pedido, qué ambiente buscas o qué aromas te gustan. Te ayudamos a elegir una combinación con sentido.",
      send: "Enviar mensaje",
      sent: "Mensaje enviado. Gracias por escribirnos.",
      details: "Datos de contacto",
      message: "Tu mensaje",
    },
    footer: "Jabones, velas y regalos en lotes pequeños, hechos con cuidado en Espana.",
    modal: { aroma: "Aroma:" },
  },
  fr: {
    nav: { home: "Accueil", soaps: "Savons", candles: "Bougies", packs: "Coffrets", orders: "Commande", contact: "Contact" },
    hero: {
      kicker: "Savons et bougies de soja en petites séries",
      title: "Des pièces botaniques pour ralentir les gestes du quotidien",
      subtitle:
        "Lilix crée savons, bougies et coffrets avec des parfums doux, des textures soignées et un emballage pensé pour faire plaisir dès le premier regard.",
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
      thanks: "Merci, nous avons reçu votre demande. Nous confirmerons disponibilité, livraison et paiement avant préparation.",
      summary: "Resume du panier",
      empty: "Aucun article ajoute.",
    },
    contact: {
      intro: "Dites-nous pour qui est la commande, l'ambiance recherchée ou les parfums que vous aimez. Nous vous aiderons à choisir.",
      send: "Envoyer",
      sent: "Message envoye. Merci de nous avoir ecrit.",
      details: "Coordonnees",
      message: "Votre message",
    },
    footer: "Savons, bougies et cadeaux en petites séries, préparés avec soin en Espagne.",
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
