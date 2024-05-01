export interface SidebarMenu {
    index: number;
    iconHtml: string;
    text: string;
    children: SubMenu[];
}

export interface SubMenu {
    iconHtml: string;
    text: string;
}



