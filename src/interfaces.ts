export interface Token {
    user_id: number;
    exp: number;
    is_staff: boolean;
    email: string;
    username: string
    first_name: string
    last_name: string;
    image: string | null;
}

export interface User {
    id?: number;
    avatar: string | null;
    email: string;
    first_name: string;
    last_name: string;
    tags: Tag[];
    experiences: Experience[]
    projects: Project[]
    follows: User[]
    is_active: boolean
    is_staff: boolean
}

export interface Tag {
    id: number;
    name: string;
}

export interface Experience {
    id: number
    business: string
    year: number
    time: string
    current_job: boolean
    position: string
    description: string
}

export interface Project {
    id: number
    name: string
    description: string
    technologies: Technologie[]
    year: number
}

export interface Technologie {
    name: string
    user_id: number
}