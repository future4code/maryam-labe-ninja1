import React from "react";
import { FilterContainer } from "./StyleHireNinja";

class NinjaFilter extends React.Component {
  render() {
    return (
      <div>
        <FilterContainer>
          <label htmlfFor="sort">Ordenar Por:</label>
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
