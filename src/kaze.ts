
export type KazeTheme = {
  components: {
    AspectRatio?: KazeThemeComponent;
    Box?: KazeThemeComponent;
    Button?: KazeThemeComponent;
    Center?: KazeThemeComponent;
    Cluster?: KazeThemeComponent;
    Cover?: KazeThemeComponent;
    Flex?: KazeThemeComponent;
    Grid?: KazeThemeComponent;
    Heading?: KazeTypographyComponent;
    HStack?: KazeThemeComponent;
    P?: KazeTypographyComponent;
    Reel?: KazeThemeComponent;
    Select?: KazeThemeComponent;
    Sidebar?: KazeThemeComponent;
    SidebarMain?: KazeThemeComponent;
    SidebarSide?: KazeThemeComponent;
    Span?: KazeTypographyComponent;
    VStack?: KazeThemeComponent;
  };
};

export type KazeThemeComponent = {
  base?: string;
  variants?: Record<string, string>;
};

export type KazeTypographyComponent = KazeThemeComponent & {
  sizes?: Record<string, string>;
};

export type KazeTypographyProps<T> = DefaultProps<T> & {
  size?: string;
}


export type DefaultProps<ElementType> = {
  /**
   * Choose the html element type to use. default is div
   */
  as?: string;
  /**
   * Choose which variant of the component to use.
   * You can define variants in the theme config
   */
  variant?: string;
} & React.HTMLAttributes<ElementType>;

export type Spacings = 0 | 0.5 | 1 | 2 | 2.5 | 3 | 3.5 | 4 | 5;

export type MaxWidths =
  | '0'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full'
  | 'min'
  | 'max'
  | 'prose';

export type FlexAlignments = 'start' | 'center' | 'end';

export type GridCols =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'auto250'
  | 'none';
