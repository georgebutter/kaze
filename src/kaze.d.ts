export type KazeTheme = {
  components: {
    Box?: KazeThemeComponent
    Center?: KazeThemeComponent
    Cluster?: KazeThemeComponent
    HStack?: KazeThemeComponent
    Sidebar?: KazeThemeComponent
    SidebarMain?: KazeThemeComponent
    SidebarSide?: KazeThemeComponent
    VStack?: KazeThemeComponent
  }
}

export type KazeThemeComponent = {
  base?: string;
};
