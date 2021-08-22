import { obtenerRobots } from "./arreglos"

xdescribe('Pruebas de arreglos',()=> {
  it('Debe de retornar al menos 3 robots', ()=>{
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  })//que sea mayor o igual a 3
  it('Debe de existir Megaman y Ultron', ()=>{
    const resp = obtenerRobots();
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  })
})
