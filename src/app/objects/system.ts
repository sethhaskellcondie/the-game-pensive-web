export interface System {
    id?: number;
    name: string;
    generation: number;
    handheld: boolean;
}

// function systemNameValidation = (name: string): boolean => {
//     if (name.length <= 0) {
//         return true;
//     }
//     return false;
// }