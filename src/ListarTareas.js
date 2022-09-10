import React, { Component } from "react";

// construir un arreglo generar¿ndo un estado desde el construtor.
// el arreglo tendra dos(2) atributos. Un atributo llamado accion en ingles action y un atributo llamado done 

class ListarTareas extends Component {
    // se dan las funciones que se van a realizar
    constructor(props){
        super(props);
        this.state = {
            userName: "Sebastian Rendon",
            todoItems: [/* {
                accion: "Endulzar a mi amigo secreto",
                done: false,
            },
            {
                accion: "Comprar almuerzo",
                done: true,
            } */],
            newItemText: "",
        }
    }


    //funciones que se van a ver como el texto o en comun
    //METODO ACTUALIZAR
    UpdateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});   
    }
    //METODO CREAR
    CreateNewTodo = () => {
        if (!this.state.todoItems
            .find(item => item.accion === this.state.newItemText)) {
                this.setState({
                    todoItems: [...this.state.todoItems,
                    {
                        accion: this.state.newItemText, 
                        done:false
                    }],
                });
            }
    }
    ToggleTodo = (todo) => this.setState({todoItems: 
                        this.state.todoItems.map(item => item.accion === todo.accion ? {...item, done: !item.done } : item )});

    TodoTableRows = () => this.state.todoItems.map(item => 
            <tr key={item.accion}>
                <td>{ item.accion }</td>
                <td>
                    <input type="checkbox" checkbox={item.done} onChange={() => this.ToggleTodo(item)}>
                    </input>
                </td>
            </tr>
        );


    render () {
        return (
            <div>
                <h4 className="bg-info text-white text-center p-2">Lista de Tareas de {this.state.userName} - {this.state.todoItems.filter(t => !t.done).length} Cosa(s) por hacer.</h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText} onChange={this.UpdateNewTextValue}>
                        </input>
                        <button className="btn btn-danger mt-1" onClick={ this.CreateNewTodo}>Agregar
                        </button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Descripcion</th></tr>
                        </thead>
                        <tbody>{this.TodoTableRows()}</tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListarTareas;