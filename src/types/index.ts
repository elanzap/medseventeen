// Update Drug type
export interface Drug {
  id: string;
  name: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Drops' | 'Cream' | 'Gel' | 'Ointment';
  strength: string;
  genericName?: string;
}

// Add Option type for SearchableSelect
export interface Option {
  value: string;
  label: string;
}

// ... (keep other type definitions)
