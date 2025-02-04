// export interface Reservation {
//   id: string;
//   campsiteId: string;
//   campsiteName: string;
//   location: string;
//   checkIn: string;
//   checkOut: string;
//   status: "confirmed" | "completed" | "canceled";
// }

// type ReservationStatus = "confirmed" | "completed" | "canceled";


export interface Reservation  {
  id: string;
  campsiteId: string;
  campsiteName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "completed" | "canceled";
};