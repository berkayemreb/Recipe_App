import React from "react";
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const ErrorScreen = () => {
    return (
            <LottieView
                autoPlay
                source={require('../../../assets/error.json')}
            />
    )
}

export default ErrorScreen;