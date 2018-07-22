// Lazy loaded modules will add their own slice of state.
// The feature state slice will inherit from this..
export interface StateContainer {
  app: AppState;
}
export interface AppState {
  appTitle: string;
}
