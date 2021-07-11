export type KazeTheme = {
  components: {
    Box?: KazeThemeComponent
    Center?: KazeThemeComponent
    Cluster?: KazeThemeComponent
    HStack?: KazeThemeComponent
    Sidebar?: KazeThemeComponent
    VStack?: KazeThemeComponent
  }
}

export type KazeThemeComponent = {
  base?: string;
};
