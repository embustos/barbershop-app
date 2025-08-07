import { Appointment } from "./appointments";

export interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
    appointments?: Appointment[];
}