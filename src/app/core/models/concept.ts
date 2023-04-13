interface ConceptEssentials {
    operation: string;
    description: string;
    value: number;
}

interface ConceptOpcionals {
    porcentage: number;
}


/* 'Partial' sirve para que todas las variables sean opcionales */
export type Concept  = Required<ConceptEssentials> & Partial<ConceptOpcionals>;
