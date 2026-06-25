export const dressStyleCategories = {
  casual: ["mens-shirts", "tops", "mens-shoes"],
  formal: ["mens-shirts", "womens-dresses"],
  party: ["womens-dresses", "womens-jewellery"],
  gym: ["sports-accessories"],
} as const;

export type DressStyle = keyof typeof dressStyleCategories;
