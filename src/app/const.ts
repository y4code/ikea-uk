export enum RoomName {
  All = "All",
  Garden = "Garden",
  Laundry = "Laundry",
  "Fitted kitchens" = "Fitted kitchens",
  Bathroom = "Bathroom",
  Hallway = "Hallway",
  "Home office" = "Home office",
  "Dining room" = "Dining room",
  Bedroom = "Bedroom",
  "Living room" = "Living room",
  "Children's room" = "Children's room",
}

export const RoomMap = {
  All: "All",
  Garden: "Garden",
  Laundry: "Laundry",
  "Fitted kitchens": "Fitted kitchens",
  Bathroom: "Bathroom",
  Hallway: "Hallway",
  "Home office": "Home office",
  "Dining room": "Dining room",
  Bedroom: "Bedroom",
  "Living room": "Living room",
  "Children's room": "Children's room",
} as { [key in RoomName]: string };

export const RoomColorMap = {
  All: "#4b82ee",
  Garden: "#ffd800",
  Laundry: "#1a52bf",
  "Fitted kitchens": "#5de04e",
  Bathroom: "#4ee0a7",
  Hallway: "#4eb3e0",
  "Home office": "#4e8ce0",
  "Dining room": "#4e62e0",
  Bedroom: "#884ee0",
  "Living room": "#e04ed6",
  "Children's room": "#349f44",
} as { [key in RoomName]: string };