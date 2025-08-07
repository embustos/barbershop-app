export interface Service {
    id: string;
    name: string;
    description?: string;
    price: number;
    duration?: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface CreateServiceRequest {
    name: string;
    description?: string;
    price: number;
    duration?: number;
    isActive: boolean;
}

