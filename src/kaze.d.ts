export type KazeTheme = {
  components: {
    AspectRatio?: KazeThemeComponent
    Box?: KazeThemeComponent
    Center?: KazeThemeComponent
    Cluster?: KazeThemeComponent
    Cover?: KazeThemeComponent
    Grid?: KazeThemeComponent
    HStack?: KazeThemeComponent
    Reel?: KazeThemeComponent
    Sidebar?: KazeThemeComponent
    SidebarMain?: KazeThemeComponent
    SidebarSide?: KazeThemeComponent
    VStack?: KazeThemeComponent
  }
}

export type KazeThemeComponent = {
  base?: string;
};

export type DefaultProps = {
  /**
   * Additional classNames to apply to the element,
   * only use this prop if this is a one off scenario otherwise use the
   * Kaze theme context.
   */
    className?: string;
    /**
    * Choose the html element type to use. default is div
    */
    as?: string;
}
