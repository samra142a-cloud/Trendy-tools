// ===== EDIT THIS FILE ONLY. You never need to touch index.html. =====

const SHOP = {
  name: "TrendyTools.pk",
  whatsapp: "923000000000",  // 92 + number without the first 0
  instagram: "https://instagram.com/"
};

// ONE PRODUCT = ONE BLOCK between { and }.
// Add a product: copy a whole block, paste it below another block, change the words.
// Delete a product: delete its whole block (from { to },).
// stock = how many you have. Change it by hand when you sell. 0 shows "Out of stock".
// photo = name of the photo you upload to GitHub. Use a NEW name for every product.
const PRODUCTS = [
  {
    name: "Portable Neck Fan",
    price: 2499,
    stock: 10,
    photo: "fan.jpg",
    emoji: "🌀",
    short: "Rechargeable, 3 speeds",
    about: "A bladeless neck fan you wear hands-free. Rechargeable by USB, with 3 speed settings."
  },
  {
    name: "Hair & Beard Trimmer",
    price: 2999,
    stock: 8,
    photo: "IMG_20261121_151349.png",
    emoji: "✂️",
    short: "Cordless, USB charging",
    about: "A cordless trimmer for hair and beard. Charges by USB and is easy to carry."
  },
  {
    name: "Mini Handheld Vacuum",
    price: 3999,
    stock: 5,
    photo: "vacuum.jpg",
    emoji: "🧹",
    short: "Cordless, for car and desk",
    about: "A small cordless vacuum for your car, desk and keyboard. Light and rechargeable."
  },
  {
    name: "Fabric Shaver",
    price: 1799,
    stock: 12,
    photo: "IMG_20261121_151408.png",
    emoji: "🧼",
    short: "Removes lint and pilling",
    about: "Removes lint and fuzz balls from sweaters, couches and blankets in minutes."
  },
  {
    name: "Rechargeable LED Torch",
    price: 1499,
    stock: 15,
    photo: "IMG_20261121_151548.png",
    emoji: "🔦",
    short: "Bright and compact",
    about: "A bright, compact torch you can charge by USB. Handy for load shedding and travel."
  },
  {
    name: "Mini Milk Frother",
    price: 1299,
    stock: 3,
    photo: "IMG_20261121_151729.png",
    emoji: "☕",
    short: "Handheld, battery powered",
    about: "Makes creamy froth for coffee, matcha and milkshakes in seconds."
  },
  {
    name: "Motion Sensor Night Light",
    price: 999,
    stock: 20,
    photo: "IMG_20261121_151654.jpg",
    emoji: "💡",
    short: "Auto on and off",
    about: "Turns on when you walk by and off when you leave. Great for hallways and bedrooms."
  },
  {
    name: "Mini Portable Blender",
    price: 3499,
    stock: 0,
    photo: "IMG_20261121_151748.png",
    emoji: "🧊",
    short: "USB rechargeable cup",
    about: "Blend smoothies anywhere with this rechargeable blender cup."
  }
];

// Reviews: ["what the customer said", "name, city"]. Use REAL ones only.
const REVIEWS = [
  ["Sample review: replace with a real customer review.", "Customer name, Karachi"],
  ["Sample review: replace with a real customer review.", "Customer name, Karachi"],
  ["Sample review: replace with a real customer review.", "Customer name, Karachi"]
];

// FAQs: ["question", "answer"]
const FAQS = [
  ["Where do you deliver?", "Currently Karachi only. More cities coming soon."],
  ["How do I pay?", "Cash on delivery. Check your item, then pay the rider."],
  ["How long does delivery take?", "Usually 1 to 3 working days inside Karachi. We confirm your order on WhatsApp first."],
  ["What if the item is faulty?", "Message us within 48 hours of delivery with a photo or video, and we will replace it."]
];
