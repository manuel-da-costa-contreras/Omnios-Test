export interface GrillMenuModel {
  id: string;
  menu: string;
  items: GrillMenuItemModel[];
}

interface GrillMenuItemModel {
  id: string;
  name: string;
  length: number;
  width: number;
  duration: string;
  quantity: number;
}
