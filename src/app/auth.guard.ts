
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, state) => {
    const loggedIn = localStorage.getItem('loggedIn');
    const router = inject(Router);

    if (loggedIn === 'true') {
        if (state.url === '/login') {
            return router.createUrlTree(['/']);
        }
        return true;
    } else {
        if (state.url !== '/login') {
            return router.createUrlTree(['/login']);
        }
        return true;
    }
};
