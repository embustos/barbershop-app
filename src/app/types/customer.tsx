import { Appointment } from "@/app/types/appointments";

export interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
    appointments?: Appointment[];
}