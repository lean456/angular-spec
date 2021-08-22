import { Jugador } from './clase';
describe('Pruebas de clase', () => {
  const jugador = new Jugador();

  afterEach(()=>{

    jugador.hp = 100;
  })

  it('Debe de retornar 80 de hp, si recibe 20 de damage', () => {
    // const jugador = new Jugador();
    const resp = jugador.takeDamage(20);
    expect(resp).toBe(80);
  });
  it('Debe de retornar 50 de hp, si recibe 50 de damage', () => {
    // const jugador = new Jugador();
    const resp = jugador.takeDamage(50);
    expect(resp).toBe(50);
  });
});

