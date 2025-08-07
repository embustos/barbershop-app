export interface Appointment {
    id: string;
    barberId: string;
    customerId: string;

    startTime: Date;
    endTime: Date;

    service: string;
    price: number;

    status: "pending" | "confirmed" | "cancelled";
    notes?: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface CreateAppointmentRequest {
    barberId: string;
    customerId: string;
    startTime: Date;
    service: string;
    notes?: string;
}