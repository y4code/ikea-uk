// TODO: user real room names
export enum RoomName {
  Garden = 'Garden',
  Kitchen = 'Kitchen',
  Bedroom = 'Bedroom',
  Bathroom = 'Bathroom',
  LivingRoom = 'Living Room',
  DiningRoom = 'Dining Room',
  Office = 'Office',
  Garage = 'Garage',
  Other = 'Other',
}

// user freindly name
export const RoomMap = {
  Garden: "Garden",
  Kitchen: "Kitchen",
  Bedroom: "Bedroom",
  Bathroom: "Bathroom",
  "Living Room": "Living Room",
  "Dining Room": "Dining Room",
  Office: "Office",
  Garage: "Garage",
  Other: "Other",
} as { [key in RoomName]: string };

export const RoomColorMap = {
  Garden: "#4b82ee",
  Kitchen: "#5de04e",
  Bedroom: "#4ee0a7",
  Bathroom: "#4eb3e0",
  "Living Room": "#ffd800",
  "Dining Room": "#1a52bf",
  Office: "#4e62e0",
  Garage: "#e04ed6",
  Other: "#1a52bf",
} as { [key in RoomName]: string };