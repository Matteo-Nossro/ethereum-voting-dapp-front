import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import { ethers } from 'ethers';
export function Login() {

    const dispatch = useDispatch();

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Demander à MetaMask de se connecter
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Mettre à jour le store Redux avec l'adresse de l'utilisateur
                dispatch(connect(accounts[0]));
            } catch (error) {
                console.error("Erreur lors de la connexion:", error);
            }
        } else {
            alert('Veuillez installer MetaMask pour utiliser cette fonctionnalité.');
        }
    };

    return (
        <button
            onClick={connectWallet}
            style={{
                backgroundColor: '#f6851b',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
            }}
        >
            Se connecter à MetaMask
        </button>
    );
}
export default Login;