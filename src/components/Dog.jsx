import React from 'react'

const Dog = () => {
    return (
        <mesh>
            <meshBasicMaterial color={0x00FF00} />
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    )
}

export default Dog
