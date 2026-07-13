export interface BookingFormState {
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
  adults: number;
  children: number;
  fullName: string;
  email: string;
  phone: string;
  includeBreakfast: boolean;
  airportTransfer: boolean;
  arrivalTime: string;
  specialRequests: string;
  paymentMethod: string;
  agreeToTerms: boolean;
}

export interface RoomSelectionProps {
  values: { checkInDate: string; checkOutDate: string; roomType: string; adults: number; children: number; };
  errors: { checkInDate?: string; checkOutDate?: string; };
  onChange: (name: keyof BookingFormState, value: string) => void;
}

export interface GuestContactsProps {
  values: { fullName: string; email: string; phone: string; };
  errors: { fullName?: string; email?: string; phone?: string; };
  onChange: (name: keyof BookingFormState, value: string) => void;
}

export interface AdditionalServicesProps {
  values: { includeBreakfast: boolean; airportTransfer: boolean; arrivalTime: string; specialRequests: string; };
  onChange: (name: keyof BookingFormState, value: string) => void;
}

export interface PaymentProps {
  values: { paymentMethod: string; agreeToTerms: boolean; };
  errors: { agreeToTerms?: string; };
  onChange: (name: keyof BookingFormState, value: string) => void;
}