import React from 'react'

const Dog = () => {
    return (
        <mesh>
            <meshBasicMaterial color={0x00FF00} />
            <boxGeometry args={[2, 2, 1]} />
        </mesh>
    )
}

export default Dog
