import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

const Detalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

const headers ={
    headers:{
        Authorization: "8c24d255-953c-478d-abd9-919b05f53b21"
    }
}

export default class JobDetails extends React.Component {
    state ={id: "",
            title:"",
            description:"",
            price:0,
            paymentMethods:[],
            date:"",
            taken: false,
            // jobId:""
    }

    componentDidMount(){
        console.log("entrei no job detalhes")
        this.getJobById(this.props.jobId)
      }
    getJobById = async (jobId) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${jobId}`
        try{
            console.log("entrei na busca")
            const res = await axios.get(url, headers)
            console.log(res.data, "detalhes job")
            this.setState({id: res.data.id})
            this.setState({title: res.data.title})
            this.setState({description: res.data.description})
            this.setState({price: res.data.price})
            this.setState({paymentMethods: res.data.paymentMethods})
            this.setState({date: res.data.dueDate})
            this.setState({taken: res.data.taken})
            console.log(this.props.jobId, "ID")

        }catch(err){
            alert(err.message)
        }
    }
    
    render() { 
        
    return  (
        <div>
            <Detalhes>
                <h2>Detalhes do Job</h2>
                <p>Nome: {this.state.title}</p>
                <p>Descrição:{this.state.description}</p>
                <p>preço: {this.state.price}</p>
                <p>data: {this.state.date}</p>
            </Detalhes>
            <button onClick={()=>this.props.renderPage("Jobs")}>Voltar</button>
        </div>
    )
    }
}