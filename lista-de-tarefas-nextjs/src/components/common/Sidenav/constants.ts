import {
    House,
    User,
    Settings,
    Calendar,
} from 'lucide-react';

export const SIDENAV_LINKS = [
    { name: 'Home', href: '/home', icon: House },
    { name: 'Calendar', href: '/home/calendar', icon: Calendar },
    { name: 'User', href: '/home/user', icon: User },
    { name: 'Config', href: '/home/configuration', icon: Settings },

] as const;