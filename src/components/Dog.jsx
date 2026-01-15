import React from 'react'
import { Canvas } from '@react-three/fiber'

const Dog = () => {
    return (
        <Canvas>
            <mesh>
                <meshBasicMaterial color={0x00FF00} />
                <boxGeometry args={[2, 2, 2]} />
            </mesh>
        </Canvas>
    )
}

export default Dog
