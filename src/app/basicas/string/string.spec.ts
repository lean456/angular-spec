import { mensaje } from "./string";

xdescribe('Pruebas de strings', () =>{

  it('Debe de regresar un string',() => {

    const resp = mensaje('Leandro');

    expect( typeof resp).toBe('string');
  });


  it('Debe de retornar un saludo con el nombre enviado',() => {

    const nombre = 'Leandro'
    const resp = mensaje(nombre);

    expect( resp ).toContain('Saludos ' + nombre);
  });
});
