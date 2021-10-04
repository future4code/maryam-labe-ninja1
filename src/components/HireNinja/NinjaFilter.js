import React from "react";
import { FilterContainer, ContainerCart } from "./StyleHireNinja";
import { IoCartOutline } from "react-icons/io5";

class NinjaFilter extends React.Component {
  render() {
    return (
      <div>
        <ContainerCart>
          <input
            value={this.props.query}
            onChange={this.props.handleQuery}
            type="text"
            placeholder="Buscar"
          ></input>
          <button onClick={()=>this.props.handleClickCart(this.props.cart)}>
          <IoCartOutline />
          <>{this.props.quantity}</>
          </button>
        </ContainerCart>
        <FilterContainer>
          <label htmlFor="sort">Ordenar Por:</label>
          <select
            name="sort"
            value={this.props.sorting}
            onChange={this.props.handleChangeSorting}
          >
            <option value="title">Titulo</option>
            <option value="dueDate">Prazo</option>
            <option value="lower">Preço Decrescente</option>
            <option value="higher">Preço Crescente</option>
          </select>
          <label htmlFor="Valor Minimo">Valor Mínimo:</label>
          <input
            type="number"
            placeholder="R$"
            onChange={this.props.handleMinValue}
            value={this.props.minValue}
          />
          <label htmlFor="Valor Máximo">Valor Máximo:</label>
          <input
            type="number"
            placeholder="R$"
            onChange={this.props.handleMaxValue}
            value={this.props.maxValue}
          />
        </FilterContainer>
      </div>
    );
  }
}

export default NinjaFilter;
