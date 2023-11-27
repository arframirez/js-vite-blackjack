import _ from 'underscore'

// Esta función crea un nuevo deck


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejem ['C','D','H','S'];
 * @param {Array<string>} TiposEspeciales Ejem ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    if ( !tiposDeCarta ||  !tiposDeCarta.length === 0 )
    throw new Error('TiposDeCarta es tiene que ser un arreglo de string');

    if ( !TiposEspeciales ||  !TiposEspeciales.length === 0 )
    throw new Error('TiposEspeciales es tiene que ser un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}