import React from 'react';

function ButtonLink(props){ //a função recebe um objeto para tornar o botão dinâmico
    // estrutura básica -> {className> "será recebido de fora"}
    return(
        <a href ={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;