import { Jugador2 } from "./jugador2";

describe('Jugador 2 emit',() => {

  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2())

  it('Debe de emitir un evento cuando recibe damage', () =>{
    let nuevoHP = 0;
    jugador.hpCambia.subscribe(data =>{
      nuevoHP = data

    })
    jugador.takeDamage(1000);
    expect(nuevoHP).toBe(0)
  })

  it('Debe de emitir un evento cuando recibe damage y sobrevivir si es menos de 100', () =>{
    let nuevoHP = 0;
    jugador.hpCambia.subscribe(data =>{
      nuevoHP = data

    })
    jugador.takeDamage(50);
    expect(nuevoHP).toBe(50)
  })
});
