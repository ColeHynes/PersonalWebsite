import React from 'react';
import Particles from 'react-particles-js';

export default function Particle(props) {
    return(
        <div>
            <Particles 
            width='100%'
            height='100vh'
            options={{fpsLimit:60}}
            params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                        "move": {
                            "speed": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                    backgroundColor: '#000000'
                }}
                />
        </div>
    )
}