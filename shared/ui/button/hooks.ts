import { ButtonVariant } from "./types";

export const useButtonVariant = (variant?: ButtonVariant): string => {
    switch (variant){
        case 'primary': return 'btn-primary';
        case 'secondary': return 'btn-secondary';
        case 'accent': return 'btn-accent';
        case 'info': return 'btn-info';
        case 'success': return 'btn-success';
        case 'warning': return 'btn-warning';
        case 'error': return 'btn-error';
        case 'ghost': return 'btn-ghost';
        case 'link': return 'btn-link';
        default: return '';
    }
}