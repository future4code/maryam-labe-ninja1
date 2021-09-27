import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 300px;
    width: 200px;
    border: solid black 1px;
    border-radius: 10px;
`

const headers ={
    headers:{
        Authorization: "8c24d255-953c-478d-abd9-919b05f53b21"
    }
}

export default class CardDetails extends React.Component {
    state={jobs:[{}],
        carrinho:[{}],
        job:{},

    }

    getJobById = async (jobId) =>{
        const url = `https://labeninjas.herokuapp.com/jobs/${jobId}`
        try{
            const res = await axios.get(url, headers)
            console.log(res.data)
            this.setState({job: res.data})
            console.log(this.state.job)
        } catch(err){
            alert(err.response)
        }
    }
    

    addCart = (job) => {
        console.log(job, "job");
        this.setState({carrinho:job, ...this.state.carrinho})
        console.log(this.state.carrinho, "carrinho")

        // if (!this.state.carrinho.includes(produto)) {
        //     this.setState({
        //         carrinho: [
        //         ...this.state.carrinho,
        //         job,
        //         ]
        //     })
        // } 
        // else {
        //     produto.quantity += 1;
        //     this.setState({
        //         carrinho: [
        //         ...this.state.carrinho,
        //         ]
        //     })
        // }
    }

    render() { 
        return (
            <div>
                <Card>
                    {/* Card Details */}
                    {this.state.job.title}<br></br>
                    {this.state.job.description}<br></br>
                    {this.state.job.price}<br></br>
                    {this.state.job.paymentMethods}
                    <div>
                        <button onClick={()=>this.addCart(this.state.job)}>Adicionar carrinho</button>
                        <button>Excluir</button>
                    </div>
                </Card>
                <button onClick={()=>this.getJobById("4c71e803-cc10-449e-8a15-ca543437705d")}>Buscar Jobs</button>
            </div>
        )
    }
}
