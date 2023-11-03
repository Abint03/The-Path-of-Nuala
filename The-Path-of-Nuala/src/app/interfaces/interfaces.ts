/**Interfaz Usuario */
export interface user{
    usuario: string,
    constraseña: string,
    partidas: partida[]
}

/**Interfaz Partidas */
export interface partida{
    fecha: Date,
    personaje: personaje,
    puntaje: number
}

/**Interfaz Personaje */
export interface personaje{
    //Para completar con estadisticas para el juego
}

/**Interfaz de Objetos Chart de Chartopia API */
export interface chart{
    chart_name: string,
    chart_url: string,
    results: [ string ]
  }

/**Interfaz Enemigo */
export interface enemy{
    name: string,
    chartID: 76281,
    hp: number,
    dmg: number
}
