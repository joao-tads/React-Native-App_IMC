import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import ResultImc from './ResultImc';

export default function Form() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2))
    }

    function ValidatorImc() {
        if (altura != null && peso != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>

                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />

                <Button
                    title={textButton}
                    onPress={() => ValidatorImc()}
                />
            </View>
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
        </View>
    );
}