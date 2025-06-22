"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default AppProvider;
