import { usuarioIngresado } from './boolean';

xdescribe('Pruebas de booleanos', () => {
  it('Debe de retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTruthy();
  });
});
