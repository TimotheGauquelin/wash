import React, { Component } from 'react'

//AntD Icons
import { ArrowLeftOutlined } from '@ant-design/icons';
//AntD Components
import { Form, Input, Button } from 'antd';

import SignatureCanvas from 'react-signature-canvas'

export default class AvisPassage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Haha',
            date: '',
            observations: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="avisDePassage">
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        Participe :
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </label>

<Form.Item
                            label="Nom du client/entreprise"
                            name="clientName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Veuillez inserer le nom du client',
                                },
                            ]}
                        >
                            <Input  name="name"
                            type="file"
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                        </Form.Item>

                    <label>
                        Date :
                    <input
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Observations :
          <input
                            name="observations"
                            type="textarea"
                            value={this.state.observations}
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.goBack = this.goBack.bind(this);

    //     this.state = {
    //     };
    // }

    // //Redirect
    // goBack() {
    //     this.props.history.goBack();
    // }

    // render() {


    //     const onFinishFailed = (errorInfo) => {
    //         console.log('Failed:', errorInfo);
    //     };

    //     return (
    //         <div className="avisDePassage">
    //             <div className="header">
    //                 <ArrowLeftOutlined onClick={this.goBack} />
    //                 <p>Avis de Passage</p>
    //             </div>
    //             <div className="form" >

    //                 <Form
    //                     className="form"
    //                 >
    //                     <Form.Item
    //                         label="Nom du client/entreprise"
    //                         name="clientName"
    //                         rules={[
    //                             {
    //                                 required: true,
    //                                 message: 'Veuillez inserer le nom du client',
    //                             },
    //                         ]}
    //                     >
    //                         <Input />
    //                     </Form.Item>

    //                     <Form.Item
    //                         label="Notre technitien est intervenu le"
    //                         name="date"
    //                         rules={[
    //                             {
    //                                 required: true,
    //                                 message: "Veuillez inserer la date de l'intervention"
    //                             },
    //                         ]}
    //                     >
    //                         <Input />
    //                     </Form.Item>

    //                     <Form.Item
    //                         label="Observation"
    //                         name="observations"
    //                         rules={[
    //                             {
    //                                 required: true,
    //                                 message: "Veuillez inserer vos observations"
    //                             },
    //                         ]}>
    //                         <Input.TextArea />
    //                     </Form.Item>


    //                     <Form.Item
    //                         label="Signature de l'intervenant"
    //                         name="sign">
    //                         <SignatureCanvas penColor='black'
    //                             canvasProps={{ className: 'sigCanvas' }} />
    //                     </Form.Item>

    //                     <Form.Item>
    //                         <Button type="primary" htmlType="submit">
    //                             Enregistrer
    //                         </Button>
    //                     </Form.Item>
    //                 </Form>

    //         </div >
    //         </div >
    //     )
    // }
}
