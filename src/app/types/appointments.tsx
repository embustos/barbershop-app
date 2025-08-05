export interface Appointment {
    id: string;
    barberId: string;
    clientName: string;
    clientPhone: string;
    clientEmail?: string;
    service: string;
    date: Date;
    time: Date;
    status: "pending" | "confirmed" | "cancelled";
    notes?: string;
}