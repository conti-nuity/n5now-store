import React from "react";

export interface Product {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export interface Error {
  message?: any;
}

export interface Loading {
  message?: any;
}

export interface NoData {
  message?: any;
}

export interface Children {
  children: React.ReactNode;
}
