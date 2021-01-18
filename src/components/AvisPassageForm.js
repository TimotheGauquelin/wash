import React, { Component } from 'react'

//AntD Icons
import { ArrowLeftOutlined } from '@ant-design/icons';
//AntD Components
import { Form, Input } from 'antd';

import { AvisResume } from './AvisResume';
import SignatureCanvas from 'react-signature-canvas'
import TextArea from 'antd/lib/input/TextArea';

export default class AvisPassageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            date: '',
            observations: '',
            avisPassage: []
        }

        this.goBack = this.goBack.bind(this);
    };
    //Ajout d'un avis de passage
    addAvisPassage() {
        const newAvisPassage = {
            firstName: this.state.firstName,
            date: this.state.date,
            observations: this.state.observations
        };
        let avisPassage = [...this.state.avisPassage];
        avisPassage.push(newAvisPassage);

        this.setState({
            avisPassage,
            firstName: '',
            date: '',
            observations: ''
        });

    }

    //Redirection
    goBack() {
        this.props.history.goBack();
    }

    render() {

        const resumeAvisPassage = this.state.avisPassage.map(item => {
            return (
                <AvisResume item={item} />
            );

        });


        return (
            <div className="avisDePassage">
                <div className="header">
                    <ArrowLeftOutlined onClick={this.goBack} />
                    <p>Avis de Passage</p>
                </div>
                <Form className="form" onSubmit={this.handleSubmit}>

                    <Form.Item
                        label="Nom du client/entreprise"
                        name="clientName"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez insérer le nom du client',
                            },
                        ]}
                    >
                        <Input name="firstName"
                            placeholder="Nom du Client"
                            type="text"
                            value={this.state.firstName}
                            onChange={(e) => this.setState({ firstName: e.target.value })} />
                    </Form.Item>

                    <Form.Item
                        label="Passage effectué le :"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez inserer la date de votre passage',
                            },
                        ]}
                    >
                        <Input name="date"
                            placeholder="Date de votre passage"
                            type="date"
                            value={this.state.date}
                            onChange={(e) => this.setState({ date: e.target.value })} />
                    </Form.Item>

                    <Form.Item
                        label="Observation :"
                        name="observations"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez inserer vos bservations',
                            },
                        ]}
                    >
                        <TextArea name="observations"
                            placeholder="Vos observations"
                            type="textarea"
                            value={this.state.observations}
                            onChange={(e) => this.setState({ observations: e.target.value })} />
                    </Form.Item>

                    <Form.Item
                        label="Signature de l'intervenant"
                        name="sign">
                        <SignatureCanvas penColor='black'
                            canvasProps={{ className: 'sigCanvas' }} />
                    </Form.Item>

                    <button onClick={() => this.addAvisPassage()}>Envoyer</button>

                    {resumeAvisPassage}
                </Form>
            </div>
        );
    }



}
