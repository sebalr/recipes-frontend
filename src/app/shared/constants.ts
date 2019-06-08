import { environment } from 'src/environments/environment.prod';

export const apiUrl = environment.production ? 'http://localhost:5000' : 'http://localhost:5000';
