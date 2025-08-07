export interface Barber {
    id: number;
    name: string;
    phone: string;
    email?: string;
    imageUrl?: string;

    specialties?: string[];
    isActive: boolean;
    hourlyRate: number;

    createdAt: Date;
    updatedAt: Date;
}

export interface CreateBarber {
    name: string;
    phone: string;
    email?: string;
    hourlyRate: number;
}