export const TOPBAR_ITEMS = [
    { label: 'Charging Stations', path: '/home' },
    { label: 'Fleet Sizing', path: '/home/fleet-sizing' },
    { label: 'Parking', path: '/home/parking' },
];

export interface IVariable {
    id: string;
    label: string;
    description: string;
}