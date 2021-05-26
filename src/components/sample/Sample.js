import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import '../../App.css'


export default class Sample extends Component {
    goBack = () => {
        this.setState({redirectToDefault: true});
    }

    constructor(props){
        super(props);
        this.state = {redirectToDeafult: false};
    }

    render() {
        const id = this.props.match.params.id;
        const name = this.props.match.params.name;
       
        if(this.state.redirectToDefault){
            return <Redirect to="/"/>;
        }

        return (
            <>
            
                <h2 className="cabecera-header">Componente de ejemplo</h2>
                <p>Estás viendo la página Ejemplo, con parámetros recibidos.</p>
                <h3>Parámetros recibidos: {id} y {name}</h3>
                {id === 0 ? (
                    <Redirect to="/404"/>
                ) : (
                    <div>ID no es 0</div>
                )
                }
                <button className="link-button" onClick={this.goBack}>Volver al inicio</button>
          </>
        )
    }
}
