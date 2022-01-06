import { Injectable } from '@angular/core';

export type Layer = {
  type: LayerType;
  recipie: string;
  name: string;
  image: string;
};

export enum LayerType {
  shell = 'shell',
  topping = 'topping',
  base = 'base',
  filling = 'filling',
}

export type Taco = {
  layers: {
    shell: Layer;
    topping: Layer[];
    base: Layer;
    filling: Layer;
  };
  name?: string;
  image?: string;
};

@Injectable({
  providedIn: 'root',
})
export class TacoService {}
