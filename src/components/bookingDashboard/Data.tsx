import { BookingFormState } from "./typesBookingDashboard";

export const initialBookingState: BookingFormState = {
  checkInDate: "",
  checkOutDate: "",
  roomType: "standard",
  adults: 1,
  children: 0,
  fullName: "",
  email: "",
  phone: "",
  includeBreakfast: false,
  airportTransfer: false,
  arrivalTime: "",
  specialRequests: "",
  paymentMethod: "card",
  agreeToTerms: false,
}