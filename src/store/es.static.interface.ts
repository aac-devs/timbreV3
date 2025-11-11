// Archivo que define la estructura de los textos de la aplicación en español:

type TabItemType = {
  icon: {
    name: string;
    type: string;
  };
};

export interface StaticSpanishData {
  home: {};
  horarios: {
    diasSemana: {
      titulo: string;
      labels: string[];
    };
    regular: {
      tabItem: TabItemType;
    };
    especial: {
      tabItem: TabItemType;
    };
    eventual: {
      tabItem: TabItemType;
    };
  };
  rings: {};
  reloj: {};
  bateria: {};
}
