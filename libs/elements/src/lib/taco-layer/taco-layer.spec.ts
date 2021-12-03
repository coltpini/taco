import { TacoLayer } from './taco-layer';

describe('TacoLayer', () => {
  it('should work', () => {
    const name = 'billy';
    const tacoLayer: TacoLayer = document.createElement('taco-layer');
    tacoLayer.name = name;
    expect(tacoLayer.name).toEqual(name);
  });
});
