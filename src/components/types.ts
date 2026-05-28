export type ColorVariants = 'default' | 'secondary' | 'outlined' | 'ghost' | 'destructive';
export type OTSidebarNavItem = {
  name: string;
  icon?: boolean;
  iconName?: string;
  action?: (args: any) => any;
};
